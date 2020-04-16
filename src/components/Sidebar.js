import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <nav className="navbar sidebar">
        <ul className="navbar-nav">
          <div className="row banner">
            <div className="bg-dark banner_blackrim"></div>
            <div className="col bg-primary">
              <p className="text-secondary">預設字串</p>
            </div>
          </div>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <p className="text-dark">預設字串</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
