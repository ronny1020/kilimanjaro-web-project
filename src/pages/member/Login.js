import React from 'react'
import LeftDiv from '../../components/member/LeftDiv'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

import Enroll from './Enroll'
import ForgetPwd from './ForgetPwd'
import Entrance from './Entrance'

function Login(props) {
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
      <div className="container">
        <div className="row">
          <LeftDiv />

          <Switch>
            <Route path="/login/enroll">
              <Enroll />
            </Route>
            <Route path="/login/forget_pwd">
              <ForgetPwd />
            </Route>
            <Route path="/login/entrance">
              <Entrance />
            </Route>
            <Route path="/login">
              <Redirect to="/login/entrance" />
              <Entrance />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  )
}

export default withRouter(Login)
