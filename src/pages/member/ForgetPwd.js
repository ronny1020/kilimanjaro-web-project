import React, { useState } from 'react'
import { Form, Button, Col, Row, Alert, InputGroup } from 'react-bootstrap'
import Breadcrumb from '../../components/Breadcrumb'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
function ForgetPwd() {
  //比對信箱&抓之後要用的ID
  const [mail, setMail] = useState('')
  const [CID, setCID] = useState('')
  const [newPwd, setNewPwd] = useState('')
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

  //密碼可視化
  const [Visible, setVisible] = useState(false)
  function doVisible() {
    if (Visible === true) setVisible(false)
    if (Visible === false) setVisible(true)
  }

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
    let counter = setInterval(() => {
      if (max <= 0) {
        setTime('驗證碼已失效,請重新取得驗證碼。')
        setButtonPhase('GET')
        setBSAlert(false)
        setVcode('')
        setAnswer('')
        clearInterval(counter)
        // window.location.reload()
      } else {
        max -= 1
        setTime('驗證碼有效期限:剩餘' + max + '秒')
      }
    }, 1000)
    //若完成驗證則停下計時
    // if (isFinished === true) {
    //   clearInterval(counter)
    //   return
    // }
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
              setCID(allMemList[i].customerID)
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
      alert('驗證成功!')
      setIsFinished(true)
    } else {
      alert('錯誤的驗證碼!')
    }
  }

  //送出新密碼至資料庫
  function handleSubmit() {
    //要確認密碼欄位是否為空!
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(newPwd, salt, function (err, hash) {
        let pwd_json = {
          cPassword: hash,
        }

        //確定有此人後再丟
        if (CID !== '') {
          let url_submit = 'http://localhost:6001/api/member/' + CID
          fetch(url_submit, {
            method: 'PUT', // want to use PATCH
            body: JSON.stringify(pwd_json),
            headers: new Headers({
              'Content-Type': 'application/json',
            }),
          })
            .then((res) => res.json())
            .catch((error) => console.error('Error:', error))
            .then((response) => {
              alert('變更成功!')
              console.log('Success:', response)
              window.location.reload()
            })
        }
      })
    })
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
            <InputGroup>
              <Form.Control
                type={Visible === false ? 'password' : 'text'}
                value={newPwd}
                onChange={(e) => setNewPwd(e.target.value)}
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

          <Form.Group
            controlId="formBasicSecurePassword"
            style={isFinished === true ? {} : { display: 'none' }}
          >
            <Form.Label>確認新密碼:</Form.Label>
            <InputGroup>
              <Form.Control
                type={Visible === false ? 'password' : 'text'}
                placeholder="請確認密碼"
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
            type="button"
            style={isFinished === true ? {} : { display: 'none' }}
            onClick={handleSubmit}
          >
            更改密碼
          </Button>
        </Form>
      </div>
    </>
  )
}

export default ForgetPwd
