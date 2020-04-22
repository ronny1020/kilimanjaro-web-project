import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import Breadcrumb from '../../components/Breadcrumb'

function Enroll() {
  //驗證: 信箱重複? 確認後貼上CID送出
  return (
    <>
      <div className="col-sm-6 bg-secondary">
        <h1>註冊會員</h1>
        <Breadcrumb />
        <Alert id="warning_msg" variant="danger">
          帳號或密碼錯誤!
        </Alert>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>帳號</Form.Label>
            <Form.Control
              type="text"
              // value={account}
              // onChange={(e) => setAccount(e.target.value)}
              placeholder="請輸入帳號"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>信箱</Form.Label>
            <Form.Control
              type="text"
              // value={account}
              // onChange={(e) => setAccount(e.target.value)}
              placeholder="請輸入郵箱"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>密碼</Form.Label>
            <Form.Control
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="請輸入密碼"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>確認密碼:</Form.Label>
            <Form.Control
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="請確認密碼"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            送出資料
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Enroll
