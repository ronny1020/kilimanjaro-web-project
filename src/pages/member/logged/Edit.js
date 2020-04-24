import React, { useState } from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
import Sidebar from '../../../components/Sidebar'
import Breadcrumb from '../../../components/Breadcrumb'

import { Form, Button } from 'react-bootstrap'
import bcrypt from 'bcryptjs'

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

  function handleSubmit(event) {
    //do POST here!(to node.js)
    event.preventDefault()
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
        .then((response) => console.log('Success:', response))
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
            .then((response) => console.log('Success:', response))
        })
      })
    }
  }

  const inputArray = {
    title: '會員中心',
    個人資料修改: {
      link: '/lobby/edit',
    },

    折扣券: {
      link: '/lobby/coupon',
    },
    交易紀錄: {
      link: '/lobby/history',
    },
    喜好清單: {
      link: '/lobby/favorite',
    },
  }
  return (
    <>
      <LobbyTitle string={'個人資料修改'} />
      <div className="container bg-secondary">
        <div className="row">
          <div className="col-3">
            <Sidebar input={inputArray} />
          </div>
          <div className="col-9">
            <Breadcrumb />
            <Form onSubmit={handleSubmit}>
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
              <Form.Group>
                <Form.Label>更改密碼</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={editpwd}
                  onChange={(e) => setEditPwd(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>確認密碼</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit
