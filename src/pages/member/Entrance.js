import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Entrance(props) {
  return (
    <>
      <div className="col-sm-6 bg-secondary">
        <div className="col-sm-6 bg-secondary">
          <h1>會員登入</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>帳號</Form.Label>
              <Form.Control type="text" placeholder="請輸入帳號" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>密碼</Form.Label>
              <Form.Control type="password" placeholder="請輸入密碼" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="記得我" />
            </Form.Group>

            <Link
              onClick={() => {
                props.history.push('/login/enroll')
              }}
            >
              註冊新會員
            </Link>
            <Link
              onClick={() => {
                props.history.push('/login/forget_pwd')
              }}
            >
              忘記密碼?
            </Link>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Entrance
