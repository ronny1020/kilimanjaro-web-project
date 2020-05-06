import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

function Sidebar(props) {
  var content = []
  // console.log(props)

  const inputArray = props.input

  const arrayKey = Object.keys(inputArray)
  const arrayLink = Object.values(inputArray).map((item) => item.link)

  // console.log(arrayKey[1])
  for (var i = 1; i < arrayKey.length; i++) {
    var appendToContent = (
      <>
        <li className="nav-item">
          <Link className="nav-link" to={arrayLink[i]}>
            <p className="text-dark">>{arrayKey[i]}</p>
          </Link>
          <hr />
        </li>
      </>
    )
    content.push(appendToContent)
    // content += appendToContent
    // console.log(appendToContent)
  }

  return (
    <>
      <br />
      <nav className="navbar sidebar">
        <ul className="navbar-nav">
          <div className=" bg-primary titleLabel">
            <h4 className="text-secondary">{props.input.title}</h4>
          </div>
          {content}
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
