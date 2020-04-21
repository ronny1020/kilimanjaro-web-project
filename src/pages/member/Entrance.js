import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
// var bcrypt = dcodeIO.bcrypt

function Entrance(props) {
  const [password, setPassword] = useState('')
  const [account, setAccount] = useState('')
  const [bsAlert, setBSAlert] = useState(false)

  function validateForm() {
    return account.length > 0 && password.length > 0
  }

  function handleSubmit(event) {
    event.preventDefault()

    let isLogged = false

    let customerID = ''
    var inserted_acc = document.getElementById('formBasicEmail').value
    var inserted_pwd = document.getElementById('formBasicPassword').value
    setAccount(inserted_acc)
    setPassword(inserted_pwd)
    console.log(account, password)

    fetch('http://localhost:6001/MemberList')
      .then(function (response) {
        return response.json()
      })
      .then(function (allMemberList) {
        console.log(allMemberList)

        //Do validation here
        for (let i = 0; i < allMemberList.MemberList.length; i++) {
          if (account === allMemberList.MemberList[i].cAccount)
            if (
              bcrypt.compareSync(
                password,
                allMemberList.MemberList[i].cPassword
              )
            ) {
              return (
                (isLogged = true),
                (customerID = allMemberList.MemberList[i].customerID)
              )
            }
        }
        return (isLogged = false)
      })
      .then(function () {
        if (isLogged === true) {
          //登入成功 JWT
          // console.log(isLogged)
          const Validation = {
            user_id: customerID,
            isLogged: true,
          }
          const token = jwt.sign(Validation, 'himitsu', { expiresIn: '1h' })
          localStorage.setItem('token', token)

          // localStorage.setItem('MemberId', customerID)
          // localStorage.setItem('LoginValidate', true)
          props.history.push('/lobby')
        } else {
          //登入失敗
          setBSAlert(true)
          console.log(isLogged)
        }
      })
      .catch(function (error) {
        console.log('Cannot fetch member data. ', error.message)
      })
  }

  var valid = false

  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    if (jwt.verify(token, 'himitsu')) {
      const decrypt = jwt.verify(token, 'himitsu')
      valid = decrypt.isLogged
    }
  }
  if (valid === 'true') {
    return (
      <>
        <Redirect to="/lobby" />
      </>
    )
  }

  return (
    <>
      <div className="col-sm-6 bg-secondary">
        <div className="col-sm-6 bg-secondary">
          <h1>會員登入</h1>
          <Alert id="warning_msg" variant="danger" show={bsAlert}>
            帳號或密碼錯誤!
          </Alert>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>帳號</Form.Label>
              <Form.Control
                type="text"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                placeholder="請輸入帳號"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>密碼</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="請輸入密碼"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="記得我" />
            </Form.Group>

            <Link to="/login/enroll">註冊新會員</Link>
            <Link to="/login/forget_pwd">忘記密碼?</Link>

            <Button variant="primary" disabled={!validateForm()} type="submit">
              登入
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default withRouter(Entrance)
