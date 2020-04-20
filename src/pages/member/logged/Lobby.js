import React from 'react'
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

function Member() {
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route exact path="/lobby">
              <LobbyTitle string={'會員中心'} />
              <div className="container bg-secondary">
                <br />
                <div className="row">
                  <div className="col-8">
                    <Breadcrumb />
                    <div className="bg-white">你好, 會員某某</div>
                    <div className="row">
                      <Link className="col-4 lobby_blocks" to="/lobby/edit">
                        <FaUserEdit />
                        修改會員資料
                      </Link>
                      <div className="col-4 lobby_blocks">
                        <IoMdMail />
                        同好會
                      </div>
                      <Link className="col-4 lobby_blocks" to="/lobby/coupon">
                        <GiTicket />
                        折扣券
                      </Link>
                    </div>

                    <div className="row">
                      <Link className="col-4 lobby_blocks" to="/lobby/history">
                        <FaCreditCard />
                        交易紀錄
                      </Link>
                      <Link className="col-4 lobby_blocks" to="/lobby/favorite">
                        <MdFavorite />
                        喜好清單
                      </Link>
                      <div className="col-4 lobby_blocks" to="/cart">
                        <FaCartArrowDown />
                        查看購物車
                      </div>
                    </div>
                  </div>
                  <div className="col-4" align="center">
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
