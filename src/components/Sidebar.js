import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar(props) {
  var content = []
  console.log(props)

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
      <nav className="navbar sidebar">
        <ul className="navbar-nav">
          <li>
            <div className=" bg-primary banner">
              <p className="text-secondary">{props.input.title}</p>
            </div>
          </li>
          {content}
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
