import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function LobbyTitle(props) {
  // console.log(props)
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
              <Link to="/about#mm1">常見問題</Link>
              <span>|</span>
              <Link
                to="#"
                onClick={() => {
                  async function logout() {
                    localStorage.clear()
                    window.location.replace('/login')
                  }
                  logout()
                }}
              >
                登出頁面
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(LobbyTitle)
