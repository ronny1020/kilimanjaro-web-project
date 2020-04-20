import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, withRouter, Redirect } from 'react-router-dom'

// import bcrypt from 'bcrypt'

function Entrance(props) {
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
          <Form
            onSubmit={() => {
              localStorage.setItem('LoginValidate', true)
              // props.setIsAuth(true)
              props.history.push('/lobby')
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>帳號</Form.Label>
              <Form.Control type="text" placeholder="請輸入帳號" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>密碼</Form.Label>
              <Form.Control type="password" placeholder="請輸入密碼" required />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="記得我" />
            </Form.Group>

            <Link to="/login/enroll">註冊新會員</Link>
            <Link to="/login/forget_pwd">忘記密碼?</Link>

            <Button variant="primary" type="submit">
              登入
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default withRouter(Entrance)
