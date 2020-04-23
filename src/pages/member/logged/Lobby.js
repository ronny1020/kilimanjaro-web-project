import React, { useState } from 'react'
// import Sidebar from '../../../components/Sidebar'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom'
import Breadcrumb from '../../../components/Breadcrumb'

import Edit from './Edit'
import Favorite from './Favorite'
import Coupon from './Coupon'
import History from './History'

import LobbyTitle from '../../../components/member/LobbyTitle'
import Login from '../Login'
import Home from '../../Home'
import NotFoundPage from '../../NotFoundPage'

import { FaUserEdit, FaCartArrowDown, FaCreditCard } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'
import { GiTicket } from 'react-icons/gi'

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
                    <div className="bg-white">你好, 會員{name}</div>
                    <div className="row">
                      <Link className="col-4 lobby_blocks" to="/lobby/edit">
                        <FaUserEdit />
                        <br />
                        修改會員資料
                        <br />
                        修改信箱、住址、姓名等註冊資料。
                      </Link>
                      <div className="col-4 lobby_blocks">
                        <IoMdMail />
                        <br />
                        同好會
                        <br />
                        查看您加入的同好會並 進行管理。
                      </div>
                      <Link className="col-4 lobby_blocks" to="/lobby/coupon">
                        <GiTicket />
                        <br />
                        折扣券
                        <br />
                        確認目前擁有可以使用的折扣。
                      </Link>
                    </div>

                    <div className="row">
                      <Link className="col-4 lobby_blocks" to="/lobby/history">
                        <FaCreditCard />
                        <br />
                        交易紀錄
                        <br />
                        觀看過去在吉利馬札羅的消費紀錄。
                      </Link>
                      <Link className="col-4 lobby_blocks" to="/lobby/favorite">
                        <MdFavorite />
                        <br />
                        喜好清單
                        <br />
                        過去引起您注目，並可 能進行購買的商品。
                      </Link>
                      <div className="col-4 lobby_blocks" to="/cart">
                        <FaCartArrowDown />
                        <br />
                        查看購物車
                        <br />
                        查看您準備購買的商品
                      </div>
                    </div>
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
