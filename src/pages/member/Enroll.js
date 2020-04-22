import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
// import { Link, withRouter, Redirect } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

import bcrypt from 'bcryptjs'

import Breadcrumb from '../../components/Breadcrumb'

function Enroll() {
  const [enrAcc, setEnrAcc] = useState('')
  const [enrEmail, setEnrEmail] = useState('')
  const [enrPwd, setEnrPwd] = useState('')
  const [enrID, setEnrID] = useState('')

  const [bsAlert, setBSAlert] = useState(false)
  const [doneEnroll, setDoneEnroll] = useState(false)

  let isVerified = false

  function validateForm() {
    return enrAcc.length > 0 && enrEmail.length > 0 && enrPwd.length > 0
  }
  function handleSubmit(event) {
    event.preventDefault()

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(enrPwd, salt, function (err, hash) {
        // console.log(hash)
        fetch('http://localhost:6001/api/member')
          .then(function (response) {
            return response.json()
          })
          .then(function (allMemberList) {
            //創造新ID
            var arr_length = Object.keys(allMemberList).length
            var id_max = allMemberList[arr_length - 1].customerID
            let newID = 'C' + (parseInt(id_max.split('C')[1]) + 1)
            setEnrID(newID)

            //檢查信箱是否重複
            for (let i = 0; i < arr_length; i++) {
              if (
                allMemberList[i].cEmail === enrEmail ||
                allMemberList[i].cAccount === enrAcc
              ) {
                i = arr_length
                setBSAlert(true)
                return (isVerified = false)
              }
            }
            setBSAlert(false)
            return (isVerified = true)
          })
          .then(function () {
            //確定符合格式:送件
            if (isVerified === true) {
              let newMember = {
                customerID: enrID,
                cName: enrAcc,
                cAccount: enrAcc,
                cEmail: enrEmail,
                cPassword: hash,
                cSex: 'M',
                cBirthDate: '',
                cAddress: '',
                cMobile: '',
              }
              console.log(JSON.stringify(newMember))

              fetch('http://localhost:6001/api/member/', {
                method: 'POST', // want to use PATCH
                body: JSON.stringify(newMember),
                headers: new Headers({
                  'Content-Type': 'application/json',
                }),
              })
                .then((res) => res.json())
                .catch((error) => console.error('Error:', error))
                .then((response) => {
                  setBSAlert(true)
                  setDoneEnroll(true)
                  console.log(
                    'Success:',
                    //送出時: 常常觸發sequelize內建檢查
                    response
                  )
                })
            }
          })
      })
    })
  }
  //驗證: 信箱重複? 確認後貼上CID送出
  return (
    <>
      <div className="col-sm-6 bg-secondary">
        <h1>註冊會員</h1>
        <Breadcrumb />
        {doneEnroll ? (
          <Alert id="warning_msg" variant="success" show={bsAlert}>
            註冊成功
          </Alert>
        ) : (
          <Alert id="warning_msg" variant="danger" show={bsAlert}>
            信箱已經被人使用
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicAccount">
            <Form.Label>帳號</Form.Label>
            <Form.Control
              type="text"
              value={enrAcc}
              onChange={(e) => setEnrAcc(e.target.value)}
              placeholder="請輸入帳號"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>信箱</Form.Label>
            <Form.Control
              type="email"
              value={enrEmail}
              onChange={(e) => setEnrEmail(e.target.value)}
              placeholder="請輸入郵箱"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>密碼</Form.Label>
            <Form.Control
              type="password"
              value={enrPwd}
              onChange={(e) => setEnrPwd(e.target.value)}
              placeholder="請輸入密碼"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicSecurePassword">
            <Form.Label>確認密碼:</Form.Label>
            <Form.Control type="password" placeholder="請確認密碼" />
          </Form.Group>

          <Button variant="primary" disabled={!validateForm()} type="submit">
            送出資料
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Enroll
