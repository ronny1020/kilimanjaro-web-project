import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <nav className="navbar bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Link 1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Link 2
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Link 3
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
