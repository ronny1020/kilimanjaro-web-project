import React from 'react'
// import Sidebar from '../../../components/Sidebar'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Edit from './Edit'
import Favorite from './Favorite'
import Coupon from './Coupon'
import History from './History'

import LobbyTitle from '../../../components/member/LobbyTitle'
import Login from '../Login'
import NotFoundPage from '../../NotFoundPage'

function Member() {
  return (
    <>
      <Router>
        <>
          <div className="container bg-secondary">
            <Switch>
              <Route exact path="/lobby">
                <LobbyTitle string={'會員中心'} />
              </Route>
              <Route exact path="/lobby/edit">
                <Edit />
              </Route>
              <Route exact path="/lobby/coupon">
                <Coupon />
              </Route>
              <Route exact path="/lobby/history">
                <History />
              </Route>
              <Route exact path="/lobby/favorite">
                <Favorite />
              </Route>
              <Route path="/login">
                <Redirect from="/login" to="/login/entrance"></Redirect>
                <Login />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    </>
  )
}

export default Member
