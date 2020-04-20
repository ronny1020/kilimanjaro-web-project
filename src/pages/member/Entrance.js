import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

function Entrance(props) {
  const [password, setPassword] = useState('')
  const [account, setAccount] = useState('')

  function validateForm() {
    return account.length > 0 && password.length > 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    //do login validation here!

    localStorage.setItem('LoginValidate', true)
    props.history.push('/lobby')
  }

  var valid = localStorage.getItem('LoginValidate')
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
          <Alert id="warning_msg" variant="danger" show={0}>
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
