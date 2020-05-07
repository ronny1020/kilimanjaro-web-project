import React from 'react'
import LeftDiv from '../../components/member/LeftDiv'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

import Enroll from './Enroll'
import ForgetPwd from './ForgetPwd'
import Entrance from './Entrance'

function Login(props) {
  // window.location.reload()
  // console.log(props.isAuth)
  // props.setIsAuth(localStorage.getItem('LoginValidate'))
  // if (props.isAuth === true) {
  //   return (
  //     <>
  //       <Redirect to="/lobby"></Redirect>
  //     </>
  //   )
  // }
  return (
    <>
      <div className="all-page-title page-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 " align="center">
              {/* <h1>賣家介紹</h1> */}
              <p className="text-white">~所有人員，由此進入。~</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <LeftDiv />

              <Switch>
                <Route path="/login/enroll">
                  <Enroll history={props.history} />
                </Route>
                <Route path="/login/forget_pwd">
                  <ForgetPwd />
                </Route>
                <Route path="/login/entrance">
                  <Entrance />
                </Route>

                {/* 自動到入口 */}
                <Route exact path="/login">
                  <Redirect to="/login/entrance" />
                  <Entrance />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Login)
