import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import Breadcrumb from '../../components/Breadcrumb'

import jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs'
function ForgetPwd() {
  const [mail, setMail] = useState('')
  //用戶輸入的答案
  const [Vcode, setVcode] = useState('')
  //實際上的答案
  const [Answer, setAnswer] = useState('')
  const [time, setTime] = useState('')
  const [ButtonPhase, setButtonPhase] = useState('GET')

  //是否完成驗證
  const [isFinished, setIsFinished] = useState(false)

  //產生隨機字串作為驗證碼
  function randMaker(length) {
    setButtonPhase('POST')
    var result = ''
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
  function Countdown(max) {
    setInterval(() => {
      if (max <= 0) {
        setTime('驗證碼已失效,請重新載入。')
        // window.location.reload()
      } else {
        max -= 1
        setTime('驗證碼有效期限:剩餘' + max + '秒')
      }
    }, 1000)
  }

  //寄出含有驗證碼的信
  function getMail() {
    let url_mail = 'http://localhost:6001/api/mail/verify'

    //設置答案
    let answer = randMaker(8)
    setAnswer(
      jwt.sign({ answer: answer }, 'himitsu', {
        expiresIn: 30,
      })
    )
    //倒計時開始
    Countdown(30)
    let mail_content = {
      mail: mail,
      content: answer,
    }
    answer = ''

    //寄出驗證信
    fetch(url_mail, {
      method: 'POST', // want to use PATCH
      body: JSON.stringify(mail_content),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => {
      return res.json()
    })
  }

  //對答案
  function doVerify() {
    try {
      jwt.verify(Answer, 'himitsu')
    } catch (err) {
      alert('驗證碼已過期!')
      window.location.reload()
    }

    if (jwt.verify(Answer, 'himitsu').answer === Vcode) {
      alert('success!')
      setIsFinished(true)
    } else {
      alert('wrong!')
    }
  }
  return (
    <>
      <div className="col-sm-6 bg-secondary">
        <h1>忘記密碼</h1>
        <Breadcrumb />
        <Form>
          {/* 寄信前應先檢查信箱存在與否 */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>信箱</Form.Label>
            <Form.Control
              type="email"
              value={mail}
              placeholder="請輸入郵箱"
              onChange={(e) => setMail(e.target.value)}
              required
              readOnly={isFinished === true ? true : false}
            />
          </Form.Group>

          <Form.Group
            style={isFinished === true ? { display: 'none' } : {}}
            controlId="formVerification"
          >
            <Row>
              <Col sm="4">
                <Form.Label>輸入驗證碼</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="請輸入驗證碼"
                  value={Vcode}
                  onChange={(e) => setVcode(e.target.value)}
                  // required
                />
              </Col>
              <Col sm="4">
                {ButtonPhase === 'GET' ? (
                  <Button onClick={getMail}>取得驗證碼</Button>
                ) : (
                  <Button onClick={doVerify}>送出驗證碼</Button>
                )}
              </Col>
              <Col sm="4">{time}</Col>
            </Row>
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            style={isFinished === true ? {} : { display: 'none' }}
          >
            <Form.Label>輸入新密碼</Form.Label>
            <Form.Control type="password" placeholder="請輸入密碼" required />
          </Form.Group>
          <Form.Group
            controlId="formBasicSecurePassword"
            style={isFinished === true ? {} : { display: 'none' }}
          >
            <Form.Label>確認新密碼:</Form.Label>
            <Form.Control type="password" placeholder="請確認密碼" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={isFinished === true ? {} : { display: 'none' }}
          >
            更改密碼
          </Button>
        </Form>
      </div>
    </>
  )
}

export default ForgetPwd
