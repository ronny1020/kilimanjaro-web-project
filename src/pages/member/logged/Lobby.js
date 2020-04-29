import React, { useState } from 'react'
// import Sidebar from '../../../components/Sidebar'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Breadcrumb from '../../../components/Breadcrumb'

import Edit from './Edit'
import Favorite from './Favorite'
import Coupon from './Coupon'
import History from './History'

import LobbyTitle from '../../../components/member/LobbyTitle'
import LobbyCard from '../../../components/member/LobbyCard'
import Login from '../Login'
import Home from '../../Home'
import Product from '../../Product'
import NotFoundPage from '../../NotFoundPage'

import { CardGroup, Row, Col, Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { FaEdit } from 'react-icons/fa'

import LoginValidate from '../../../components/LoginValidate'

function Member(props) {
  const [name, setName] = useState('')
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
  // console.log(url)
  fetch(url)
    .then(function (resopnse) {
      return resopnse.json()
    })
    .then(function (userdata) {
      setName(userdata.cName)
      // console.log(userdata.cName)
    })

  //上傳頭像:
  function handleSubmit() {
    alert('處理上傳')
  }

  return (
    <>
      <Router>
        <>
          <Switch>
            <Route exact path="/lobby">
              <LobbyTitle
                string={'會員中心'}
                isAuth={props.isAuth}
                setIsAuth={props.setIsAuth}
              />
              <div className="container bg-secondary">
                <div className="row">
                  <div className="col-8">
                    <Breadcrumb />
                    <Row style={{ marginBottom: '1em' }}>
                      <Col lg={8} className="pr-0">
                        <div
                          className="bg-white"
                          style={{
                            border: '0.5px solid lightgrey',
                            borderRight: 0,
                          }}
                        >
                          <h2>您好, 會員{name}</h2>
                        </div>
                      </Col>
                      <Col lg={4} className="pl-0">
                        <div
                          className="bg-white"
                          style={{
                            border: '0.5px solid lightgrey',
                            borderLeft: 0,
                          }}
                        >
                          <Form>
                            <div class="container">
                              <Image
                                className="profile"
                                src="../../images/dummy.jpg"
                                roundedCircle
                                width="70%"
                                onClick={handleSubmit}
                              />
                              <FaEdit
                                className="profileEdit"
                                onClick={handleSubmit}
                              />
                            </div>
                          </Form>
                        </div>
                      </Col>
                    </Row>
                    <CardGroup>
                      <LobbyCard
                        title="修改會員資料"
                        content="修改信箱、住址、姓名等註冊資料。"
                        to="/lobby/edit"
                        img="FaUserEdit"
                      />
                      <LobbyCard
                        title="同好會"
                        content="查看您加入的同好會並進行管理。"
                        to="#"
                        img="IoMdMail"
                      />
                      <LobbyCard
                        title="折扣券"
                        content="確認目前擁有可以使用的折扣。"
                        to="/lobby/coupon"
                        img="GiTicket"
                      />
                    </CardGroup>

                    <CardGroup>
                      <LobbyCard
                        title="交易紀錄"
                        content="觀看過去在吉利馬札羅的消費紀錄。"
                        to="/lobby/history"
                        img="FaCreditCard"
                      />
                      <LobbyCard
                        title="喜好清單"
                        content="過去引起您注目，並可能進行購買的商品。"
                        to="/lobby/favorite"
                        img="MdFavorite"
                      />
                      <LobbyCard
                        title="查看購物車"
                        content="查看您準備購買的商品。"
                        to="/cart"
                        img="FaCartArrowDown"
                      />
                    </CardGroup>
                  </div>
                  <div className="col-4" align="center">
                    <br />
                    <img src="../../images/ad1.png" alt="ad1" width="80%"></img>
                    <br />
                    <img src="../../images/ad2.png" alt="ad2" width="80%"></img>
                  </div>
                </div>
                <br />
              </div>
            </Route>

            <Route path="/lobby/edit">
              <Edit />
            </Route>
            <Route path="/lobby/coupon">
              <Coupon />
            </Route>
            <Route path="/lobby/history">
              <History />
            </Route>
            <Route path="/lobby/favorite">
              <Favorite />
            </Route>

            {/* 原有的路由(想合併) */}
            <Route path="/login">
              <Redirect from="/login" to="/login/entrance"></Redirect>
              <Login />
            </Route>
            <Route path="/product/:id?">
              <Product />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  )
}

export default Member
