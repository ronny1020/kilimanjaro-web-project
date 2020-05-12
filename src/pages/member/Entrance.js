import React, { useState } from 'react'
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
// var bcrypt = dcodeIO.bcrypt
import Breadcrumb from '../../components/Breadcrumb'
import LoginValidate from '../../components/LoginValidate'
import swal from 'sweetalert'

function Entrance(props) {
  // console.log(props)
  var default_acc = ''
  var default_pwd = ''
  try {
    default_pwd = props.location.state.pwd
  } catch (err) {}
  try {
    default_acc = props.location.state.acc
  } catch (err) {}

  const [password, setPassword] = useState(default_pwd)
  const [account, setAccount] = useState(default_acc)
  const [bsAlert, setBSAlert] = useState(false)

  //密碼可視化
  const [Visible, setVisible] = useState(false)
  function doVisible() {
    if (Visible === true) setVisible(false)
    if (Visible === false) setVisible(true)
  }

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
          setBSAlert(false)
          //登入時間:
          var today = new Date()
          var date =
            today.getFullYear() +
            '年' +
            (today.getMonth() + 1).toString().padStart(2, '0') +
            '月' +
            today.getDate().toString().padStart(2, '0') +
            '日  '
          var time =
            today.getHours().toString().padStart(2, '0') +
            '點' +
            today.getMinutes().toString().padStart(2, '0') +
            '分' +
            today.getSeconds().toString().padStart(2, '0') +
            '秒'
          var dateTime = date + time
          const Validation = {
            user_id: customerID,
            loginTime: dateTime,
            isLogged: true,
          }
          //登入有效期限:
          const token = jwt.sign(Validation, 'himitsu', { expiresIn: '3h' })
          localStorage.setItem('token', token)

          // localStorage.setItem('MemberId', customerID)
          // localStorage.setItem('LoginValidate', true)
          swal({
            title: '登入成功!',
            text: '即將前往會員中心',
            icon: 'success',
          }).then(() => window.location.reload('/lobby'))
        } else {
          //登入失敗
          setBSAlert(true)
          console.log(isLogged)
        }
      })
      // .then(function () {
      //   const url = localStorage.getItem('siteBeforeLogin')
      //     ? localStorage.getItem('siteBeforeLogin')
      //     : '/lobby'
      //   window.location.replace(url)
      // })
      // .then(function () {})
      .catch(function (error) {
        console.log('Cannot fetch member data. ', error.message)
      })
  }

  if (LoginValidate() !== false) {
    return (
      <>
        <Redirect to="/lobby" />
      </>
    )
  }

  return (
    <>
      <div className="col-sm-6 bg-secondary">
        <div style={{ height: '8vh' }}></div>
        <h1>會員登入</h1>
        <Breadcrumb />
        <Alert id="warning_msg" variant="danger" show={bsAlert}>
          帳號或密碼錯誤!
        </Alert>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>會員帳號：</Form.Label>
            <Form.Control
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="請輸入帳號"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>會員密碼：</Form.Label>
            <InputGroup>
              <Form.Control
                type={Visible === false ? 'password' : 'text'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="請輸入密碼"
                required
              />
              <InputGroup.Append>
                <InputGroup.Text id="inputGroupAppend" onClick={doVisible}>
                  {Visible ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Row align="center">
            <Col>
              <Link to="/login/enroll">
                <h5 className="loginLink">註冊新會員</h5>
              </Link>
            </Col>
            <Col>
              <Link to="/login/forget_pwd">
                <h5 className="loginLink">忘記密碼？</h5>
              </Link>
            </Col>
            <Col>
              <Button
                style={{ width: '100%' }}
                variant="primary"
                disabled={!validateForm()}
                type="submit"
              >
                登入
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  )
}

export default withRouter(Entrance)
