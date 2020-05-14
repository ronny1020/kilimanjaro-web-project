import React, { useState } from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
// import Sidebar from '../../../components/Sidebar'
import { FaUserEdit, FaTicketAlt, FaHistory, FaHeart } from 'react-icons/fa'
import NewSidebar from '../../../components/NewSidebar'
import Breadcrumb from '../../../components/Breadcrumb'

import { Form, Button, Card, Accordion, InputGroup } from 'react-bootstrap'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import bcrypt from 'bcryptjs'
import swal from 'sweetalert'

import LoginValidate from '../../../components/LoginValidate'
import { Redirect } from 'react-router-dom'

function Edit() {
  const [editname, setEditName] = useState('')
  const [editaccount, setEditAccount] = useState('')
  const [editmail, setEditMail] = useState('')
  const [editbirth, setEditBirth] = useState('')
  const [editAddr, setEditAddr] = useState('')
  const [editmobile, setEditMobile] = useState('')
  const [editsex, setEditSex] = useState('')
  const [editpwd, setEditPwd] = useState('')

  const [oldpwd, setOldPwd] = useState('')
  //密碼可視化
  const [Visible, setVisible] = useState(false)
  function doVisible() {
    if (Visible === true) setVisible(false)
    if (Visible === false) setVisible(true)
  }
  //確認密碼
  const [confirmedPWD, setConfirmedPWD] = useState(true)
  function doConfirm(event) {
    var CONFIRMpwd = document.getElementById('formPassword').value
    setEditPwd(CONFIRMpwd)
    var re_CONFIRMpwd = document.getElementById('formSecurePassword').value
    if (CONFIRMpwd === re_CONFIRMpwd && CONFIRMpwd !== '') {
      setConfirmedPWD(true)
    } else {
      setConfirmedPWD(false)
    }
  }

  //若打開/關閉collapse(編輯密碼) 則啟用/取消required
  const [PWDreq, setPWDreq] = useState(false)
  function doRequire() {
    if (PWDreq === true) {
      //清空欄位+取消require
      setOldPwd('')
      setEditPwd('')
      document.getElementById('formSecurePassword').value = ''
      setPWDreq(false)
    }
    if (PWDreq === false) setPWDreq(true)
  }

  if (LoginValidate() === false) {
    return (
      <>
        <Redirect to="/login" />
      </>
    )
  } else {
    var memberID = LoginValidate().userID
    // var valid = LoginValidate.isLogged
  }

  var url = 'http://localhost:6001/Member/' + memberID
  var url_edit = 'http://localhost:6001/api/member/' + memberID
  // console.log(url_edit)

  //初次載入時fetch 重整會reset至最新
  if (editsex === '') {
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (userdata) {
        // console.log(userdata)
        setEditName(userdata.cName)
        setEditAccount(userdata.cAccount)
        setEditMail(userdata.cEmail)

        //處理時差問題:
        //伺服器端儲存 UTC 本地端為UTC - 時差
        var tz = new Date()
        tz = tz.getTimezoneOffset() / 60
        var date = new Date(userdata.cBirthDate)
        date.setHours(date.getHours() - parseInt(tz))
        date = date.toISOString().split('T')[0]
        // console.log(date)

        setEditBirth(date)
        setEditAddr(userdata.cAddress)
        setEditMobile(userdata.cMobile)
        setEditSex(userdata.cSex)
      })
  }

  //舊密碼驗證:
  function PasswordValidate(event) {
    event.preventDefault()
    fetch('http://localhost:6001/Member/' + memberID)
      .then((res) => res.json())
      .then((details) => {
        if (bcrypt.compareSync(oldpwd, details.cPassword) === true)
          handleSubmit()
        else
          swal({
            title: '提示訊息',
            text: '舊密碼與原密碼不符!',
            icon: 'warning',
          })
      })
  }

  function handleSubmit(event) {
    //do POST here!(to node.js)
    try {
      event.preventDefault()
    } catch (error) {}

    if (editpwd === '') {
      // 沒密碼: 直接送出
      // Store hash in your password DB.
      let editResult = {
        // customerID: decrypt.user_id,
        cName: editname,
        cAccount: editaccount,
        cEmail: editmail,
        cSex: editsex,
        cBirthDate: editbirth,
        cAddress: editAddr,
        cMobile: editmobile,
      }
      console.log(JSON.stringify(editResult))

      fetch(url_edit, {
        method: 'PUT', // want to use PATCH
        body: JSON.stringify(editResult),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
        .then((res) => res.json())
        .catch((error) => console.error('Error:', error))
        .then((response) => {
          swal({
            title: '提示訊息',
            text: '會員資料已更新!',
            icon: 'success',
          }).then(() => window.location.reload())
          console.log('Success:', response)
        })
    } else {
      //有密碼: 則加密後送出
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(editpwd, salt, function (err, hash) {
          // Store hash in your password DB.
          let editResult = {
            // customerID: decrypt.user_id,
            cName: editname,
            cAccount: editaccount,
            cEmail: editmail,
            cPassword: hash,
            cSex: editsex,
            cBirthDate: editbirth,
            cAddress: editAddr,
            cMobile: editmobile,
          }
          console.log(JSON.stringify(editResult))

          fetch(url_edit, {
            method: 'PUT', // want to use PATCH
            body: JSON.stringify(editResult),
            headers: new Headers({
              'Content-Type': 'application/json',
            }),
          })
            .then((res) => res.json())
            .catch((error) => console.error('Error:', error))
            .then((response) => {
              swal({
                title: '提示訊息',
                text: '會員資料已更新!',
                icon: 'success',
              }).then(() => window.location.reload())
              console.log('Success:', response)
            })
        })
      })
    }
  }

  const inputArray = [
    {
      text: '資料修改',
      link: '/lobby/edit',
      icon: <FaUserEdit />,
      focus: true,
    },
    { text: '折扣票券', link: '/lobby/coupon', icon: <FaTicketAlt /> },
    { text: '交易紀錄', link: '/lobby/history', icon: <FaHistory /> },
    { text: '喜好清單', link: '/lobby/favorite', icon: <FaHeart /> },
  ]
  return (
    <>
      <LobbyTitle string={'資料修改'} />
      <div className="container bg-secondary" style={{ overflow: 'auto' }}>
        <div className="row" style={{ minHeight: '100vh' }}>
          <div className="col-3 lobbyR">
            <NewSidebar title={'會員中心'} input={inputArray} />
          </div>
          <div className="col-9 lobbyL">
            <Breadcrumb />
            <Form onSubmit={PWDreq ? PasswordValidate : handleSubmit}>
              <Form.Group controlId="edit_name">
                <Form.Label>用戶姓名</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={editname}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>帳號名稱</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Account"
                  value={editaccount}
                  onChange={(e) => setEditAccount(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>電子信箱</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={editmail}
                  onChange={(e) => setEditMail(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>生年月日</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter birthdate"
                  value={editbirth}
                  onChange={(e) => setEditBirth(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>用戶住址</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  value={editAddr}
                  onChange={(e) => setEditAddr(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>行動電話</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter mobile"
                  value={editmobile}
                  onChange={(e) => setEditMobile(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>用戶性別</Form.Label>
                <Form.Control
                  as="select"
                  value={editsex}
                  onChange={(e) => setEditSex(e.target.value)}
                >
                  <option value="M">男</option>
                  <option value="F">女</option>
                </Form.Control>
              </Form.Group>

              {/* 更改密碼: 輸入舊密碼-->輸入新密碼-->確認新密碼 */}
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    className="passwordTitle"
                    eventKey="changePWD"
                    onClick={doRequire}
                  >
                    {PWDreq ? (
                      <>
                        <IoIosArrowForward />
                        <span> 取消更改</span>
                      </>
                    ) : (
                      <>
                        <IoIosArrowDown />
                        <span> 更改密碼</span>
                      </>
                    )}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="changePWD">
                    <Card.Body className="passwordBody">
                      {/* 密碼驗證欄位 */}
                      {/* =====輸入舊密碼===== */}
                      <Form.Group>
                        <Form.Label>輸入舊密碼</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type={Visible === false ? 'password' : 'text'}
                            placeholder="Enter old Password"
                            value={oldpwd}
                            onChange={(e) => setOldPwd(e.target.value)}
                            required={PWDreq}
                          />
                          <InputGroup.Append>
                            <InputGroup.Text
                              id="inputGroupAppend"
                              onClick={doVisible}
                            >
                              {Visible ? <FaEyeSlash /> : <FaEye />}
                            </InputGroup.Text>
                          </InputGroup.Append>
                        </InputGroup>
                      </Form.Group>
                      {/* =====更改密碼===== */}
                      <Form.Group controlId="formPassword">
                        <Form.Label>更改密碼</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type={Visible === false ? 'password' : 'text'}
                            style={
                              confirmedPWD ? {} : { 'border-color': '#fab5b5' }
                            }
                            placeholder="Enter new Password"
                            value={editpwd}
                            onChange={doConfirm}
                            required={PWDreq}
                          />
                          <InputGroup.Append>
                            <InputGroup.Text
                              id="inputGroupAppend"
                              onClick={doVisible}
                            >
                              {Visible ? <FaEyeSlash /> : <FaEye />}
                            </InputGroup.Text>
                          </InputGroup.Append>
                        </InputGroup>
                        <Form.Control.Feedback
                          type="invalid"
                          style={
                            confirmedPWD
                              ? { display: 'none' }
                              : { display: 'inline' }
                          }
                        >
                          密碼為空或者與密碼確認不符
                        </Form.Control.Feedback>
                      </Form.Group>
                      {/* =====確認密碼===== */}
                      <Form.Group controlId="formSecurePassword">
                        <Form.Label>確認密碼</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type={Visible === false ? 'password' : 'text'}
                            placeholder="Ensure new Password"
                            onChange={doConfirm}
                            required={PWDreq}
                          />
                          <InputGroup.Append>
                            <InputGroup.Text
                              id="inputGroupAppend"
                              onClick={doVisible}
                            >
                              {Visible ? <FaEyeSlash /> : <FaEye />}
                            </InputGroup.Text>
                          </InputGroup.Append>
                        </InputGroup>
                      </Form.Group>
                      {/* 密碼驗證欄位 */}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

              <Button
                disabled={confirmedPWD ? false : true}
                type="submit"
                style={{
                  marginTop: '15px',
                  marginBottom: '15px',
                  width: '100%',
                }}
              >
                送出更改
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit
