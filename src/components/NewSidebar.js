import React from 'react'
// import { Row, Col } from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link'
//RWD: to Bottom
//Light when clicked
function NewSidebar(props) {
  const input = props.input
  let listItem = input.map((item) => (
    <Link key={item.link} to={item.link}>
      >{item.text}
    </Link>
  ))
  return (
    <>
      <br />
      <div className="sidebar" align="center">
        <div className="side_title">{props.title}</div>
        {listItem}
      </div>

      <div className="sidebar_m" align="center">
        {listItem}
      </div>
    </>
  )
}

export default NewSidebar
