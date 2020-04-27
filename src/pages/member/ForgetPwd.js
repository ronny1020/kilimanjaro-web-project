import React, { useState } from 'react'
import { Form, Button, Col, Row, Alert } from 'react-bootstrap'
import Breadcrumb from '../../components/Breadcrumb'

import jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs'
function ForgetPwd() {
  const [mail, setMail] = useState('')
  const [validMail, setValidMail] = useState(false)
  const [bsAlert, setBSAlert] = useState(false)
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

  //倒數計時
  function Countdown(max) {
    setInterval(() => {
      if (max <= 0) {
        setTime('驗證碼已失效,請重新取得驗證碼。')
        setButtonPhase('GET')
        setBSAlert(false)
        setVcode('')
        setAnswer('')
        // window.location.reload()
      } else {
        max -= 1
        setTime('驗證碼有效期限:剩餘' + max + '秒')
      }
    }, 1000)
  }

  //驗證信箱是否存在
  function mailValidate() {
    let url = 'http://localhost:6001/api/member/'

    return new Promise((resolve) => {
      fetch(url)
        .then((res) => {
          return res.json()
        })
        .then((allMemList) => {
          for (let i = 0; i < allMemList.length; i++) {
            // console.log(allMemList[i].cEmail)
            if (mail === allMemList[i].cEmail) {
              resolve(true)
            }
          }
          resolve(false)
          // console.log(allMemList[1].cEmail)
        })
    })
  }

  //寄出含有驗證碼的信
  async function getMail() {
    if ((await mailValidate()) === true) {
      console.log(mailValidate())
      setBSAlert(true)
      setValidMail(true)
      let url_mail = 'http://localhost:6001/api/mail/verify'

      //設置答案
      let answer = randMaker(8)
      setAnswer(
        jwt.sign({ answer: answer }, 'himitsu', {
          expiresIn: 60,
        })
      )
      //倒計時開始: 60秒(同jwt期限)
      Countdown(60)
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
    } else {
      console.log(mailValidate())
      setBSAlert(true)
      setValidMail(false)
    }
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
        {validMail ? (
          <Alert id="warning_msg" variant="success" show={bsAlert}>
            合適的信箱!
          </Alert>
        ) : (
          <Alert id="warning_msg" variant="danger" show={bsAlert}>
            無效或不存在之信箱
          </Alert>
        )}
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
