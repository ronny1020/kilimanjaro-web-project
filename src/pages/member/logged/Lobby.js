import React from 'react'
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
import Login from '../Login'
import Home from '../../Home'
import NotFoundPage from '../../NotFoundPage'

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
