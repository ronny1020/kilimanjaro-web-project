import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import App from '../../App'

function LobbyTitle(props) {
  console.log(props.string)
  var title = ''
  if (!props.string) {
    title = '預設字串'
  } else {
    title = props.string
  }
  return (
    <>
      <div className="container mt-auto title_bg">
        <div className="row lobbytitle">
          <div className="col-3"></div>
          <div className="col-6">
            <h1>{title}</h1>
          </div>
          <div className="col-3">
            <div className="title_link">
              <Link to="/qna">常見問題</Link>
              <span>|</span>
              <Link to="/login">登出頁面</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(LobbyTitle)
