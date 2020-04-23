import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Breadcrumb from '../../components/Breadcrumb'
function ForgetPwd() {
  return (
    <>
      <div className="col-sm-6 bg-secondary">
        <h1>忘記密碼</h1>
        <Breadcrumb />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>信箱</Form.Label>
            <Form.Control type="email" placeholder="請輸入郵箱" required />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>輸入驗證碼</Form.Label>
            <Form.Control type="email" placeholder="請輸入驗證碼" required />
          </Form.Group>

          {/* <Form.Group controlId="formBasicPassword" show={false}>
            <Form.Label>輸入新密碼</Form.Label>
            <Form.Control type="password" placeholder="請輸入密碼" required />
          </Form.Group>
          <Form.Group controlId="formBasicSecurePassword" show={false}>
            <Form.Label>確認新密碼:</Form.Label>
            <Form.Control type="password" placeholder="請確認密碼" />
          </Form.Group> */}

          <Button variant="primary" type="submit">
            取得信件
          </Button>
          {/* <Button variant="primary" type="submit">
            送出
          </Button> */}
        </Form>
      </div>
    </>
  )
}

export default ForgetPwd
