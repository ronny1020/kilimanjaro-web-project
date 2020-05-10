import React, { useState } from 'react'
// import { Row, Col } from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link'
//RWD: to Bottom
//Light when clicked
function NewSidebar(props) {
  const [oldOne, setOldOne] = useState('')
  const hoverStyle = {
    backgroundColor: '#6e8080',
    color: 'white',
  }
  const input = props.input
  let listItem = input.map((item) => (
    <Link
      key={item.link}
      id={item.link}
      //直接從傳入之json判斷是否套樣式
      style={item.focus ? hoverStyle : null}
      to={item.link}
      onClick={item.focus ? null : setFocus}
    >
      {item.icon ? item.icon : null}
      {item.text}
    </Link>
  ))

  //點擊時清掉舊的樣式+套上新樣式
  function setFocus(props) {
    // console.log(props.target.id)
    if (oldOne !== '') {
      var clearOld = document.getElementById(oldOne)
      clearOld.style['color'] = 'black'
      clearOld.style['background-color'] = 'transparent'
    }
    var target = document.getElementById(props.target.id)
    target.style['background-color'] = '#6e8080'
    target.style['color'] = 'white'
    setOldOne(props.target.id)
  }

  return (
    <>
      <br />
      <div className="sidebar" align="center">
        <div className="side_title">
          <h4>{props.title}</h4>
        </div>
        {listItem}
      </div>

      <div className="sidebar_m" align="center">
        {listItem}
      </div>
    </>
  )
}

export default NewSidebar
