import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

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
        <Row className="lobbytitle">
          {/* <div style={{ backgroundColor: 'rgba(255,255,255, 0.1)' }}> */}
          <Col>
            <div className="title_link">
              <Link to="/about#mm1" className="LinkB">
                常見問題
              </Link>
            </div>
          </Col>
          <Col>
            <h1>{title}</h1>
          </Col>
          <Col>
            <div className="title_link">
              <Link to="/about#mm1" className="LinkA">
                常見問題
              </Link>
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
          </Col>
          {/* </div> */}
        </Row>
      </div>
    </>
  )
}

export default withRouter(LobbyTitle)
