import React from 'react'
import { connect } from 'react-redux'
import { setCategory } from '../../actions/getProductList'

function ProductListSidebar(props) {
  const { setCategory } = props

  return (
    <nav className="navbar sidebar sidebarForProductList">
      <div className=" bg-primary titleLabel">
        <h4 className="text-secondary">產品類別</h4>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div
            className="nav-link "
            onClick={() => {
              setCategory(0)
            }}
          >
            <p className="text-dark">全部</p>
          </div>
          <hr />
          <div
            className="nav-link productLink"
            onClick={() => {
              setCategory(1)
            }}
          >
            <p className="text-dark">咖啡豆</p>
          </div>
          <hr />
          <div
            className="nav-link productLink"
            onClick={() => {
              setCategory(2)
            }}
          >
            <p className="text-dark">即溶咖啡</p>
          </div>
          <hr />
          <div
            className="nav-link productLink"
            onClick={() => {
              setCategory(3)
            }}
          >
            <p className="text-dark">咖啡膠囊</p>
          </div>
          <hr />
          <div
            className="nav-link productLink"
            onClick={() => {
              setCategory(4)
            }}
          >
            <p className="text-dark">濾掛包</p>
          </div>
          <hr />
          <div
            className="nav-link productLink"
            onClick={() => {
              setCategory(5)
            }}
          >
            <p className="text-dark">濾紙</p>
          </div>
          <hr />
          <div
            className="nav-link productLink"
            onClick={() => {
              setCategory(6)
            }}
          >
            <p className="text-dark">烘培機</p>
          </div>
          <hr />
          <div
            className="nav-link productLink"
            onClick={() => {
              setCategory(7)
            }}
          >
            <p className="text-dark">磨豆機</p>
          </div>
          <hr />
          <div
            className="nav-link productLink"
            onClick={() => {
              setCategory(8)
            }}
          >
            <p className="text-dark">咖啡機</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default connect(null, {
  setCategory,
})(ProductListSidebar)
