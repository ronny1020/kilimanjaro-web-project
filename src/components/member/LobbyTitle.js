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
      <div className="container lobbytitle">
        <h1>{title}</h1>
        <Link to="/qna">常見問題</Link>
        <Link to="/login">登出頁面</Link>
      </div>
    </>
  )
}

export default withRouter(LobbyTitle)
