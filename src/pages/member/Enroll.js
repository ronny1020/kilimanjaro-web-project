import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
// import { withRouter, Redirect } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import bcrypt from 'bcryptjs'

import Breadcrumb from '../../components/Breadcrumb'

function Enroll(props) {
  // console.log(props)
  const [enrAcc, setEnrAcc] = useState('')
  const [enrEmail, setEnrEmail] = useState('')
  const [enrPwd, setEnrPwd] = useState('')
  const [bsAlert, setBSAlert] = useState(false)
  const [doneEnroll, setDoneEnroll] = useState(false)

  //密碼可視化
  const [Visible, setVisible] = useState(false)
  function doVisible() {
    if (Visible === true) setVisible(false)
    if (Visible === false) setVisible(true)
  }

  //確認密碼
  const [confirmedPWD, setConfirmedPWD] = useState(true)
  function doConfirm(event) {
    // setNewPwd(event.target.value)
    var CONFIRMpwd = document.getElementById('formPassword').value
    setEnrPwd(CONFIRMpwd)
    var re_CONFIRMpwd = document.getElementById('formSecurePassword').value
    if (CONFIRMpwd === re_CONFIRMpwd && CONFIRMpwd !== '') {
      setConfirmedPWD(true)
    } else {
      setConfirmedPWD(false)
    }
  }

  let newID = ''
  let isVerified = false

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
            newID = 'C' + (parseInt(id_max.split('C')[1]) + 1)
            //有時候會沒有ID! (移除hook後好像修復了)
            console.log(newID)

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
            // console.log(enrID)
            if (isVerified === true) {
              let newMember = {
                customerID: newID,
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
                  // props.history.push('/login')

                  //0422: TODO
                  //送完後轉跳! (可用swal)
                  //解決F5載入問題
                  console.log('Success:', response)
                  setTimeout(function () {
                    props.history.push('/login/entrance', {
                      acc: enrAcc,
                      pwd: enrPwd,
                    })
                    // return (
                    //   <>
                    //     <Redirect
                    //       to="/login/entrance"
                    //       acc={enrAcc}
                    //       pwd={enrPwd}
                    //     />
                    //   </>
                    // )
                  }, 2000)
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
        <div style={{ height: '8vh' }}></div>
        <h1>註冊會員</h1>
        <Breadcrumb />
        {doneEnroll ? (
          <Alert id="warning_msg" variant="success" show={bsAlert}>
            註冊成功, 2秒後跳轉
          </Alert>
        ) : (
          <Alert id="warning_msg" variant="danger" show={bsAlert}>
            重複的帳號或信箱
          </Alert>
        )}

        <Form onSubmit={handleSubmit} style={{ paddingBottom: '1vh' }}>
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

          <Form.Group controlId="formPassword">
            <Form.Label>密碼</Form.Label>
            <InputGroup>
              <Form.Control
                type={Visible === false ? 'password' : 'text'}
                style={confirmedPWD ? {} : { 'border-color': '#fab5b5' }}
                value={enrPwd}
                onChange={doConfirm}
                placeholder="請輸入密碼"
                required
              />
              <InputGroup.Append>
                <InputGroup.Text id="inputGroupAppend" onClick={doVisible}>
                  {Visible ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <Form.Control.Feedback
              type="invalid"
              style={confirmedPWD ? { display: 'none' } : { display: 'inline' }}
            >
              密碼為空或者與密碼確認不符
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formSecurePassword">
            <Form.Label>確認密碼:</Form.Label>

            <InputGroup>
              <Form.Control
                type={Visible === false ? 'password' : 'text'}
                placeholder="請確認密碼"
                onChange={doConfirm}
                required
              />
              <InputGroup.Append>
                <InputGroup.Text id="inputGroupAppend" onClick={doVisible}>
                  {Visible ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>

          <Button
            variant="primary"
            disabled={confirmedPWD ? false : true}
            type="submit"
          >
            送出資料
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Enroll
