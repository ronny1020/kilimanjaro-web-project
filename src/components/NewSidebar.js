import React from 'react'
// import { Row, Col } from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link'
//RWD: to Bottom
//Light when clicked
function NewSidebar() {
  return (
    <>
      <br />
      <div className="sidebar" align="center">
        <div className="side_title">會員中心</div>
        <Link to="#">>side_content</Link>
        <Link to="#">>side_content</Link>
        <Link to="#">>side_content</Link>
        <Link to="#">>side_content</Link>
      </div>

      <div className="sidebar_m" align="center">
        <Link to="#">>side_content</Link>
        <Link to="#">>side_content</Link>
        <Link to="#">>side_content</Link>
        <Link to="#">>side_content</Link>
      </div>
    </>
  )
}

export default NewSidebar
