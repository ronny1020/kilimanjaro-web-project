import React from 'react'
import { connect } from 'react-redux'
import { setCategory } from '../../actions/getProductList'

function ProductListSidebar(props) {
  const { setCategory, category } = props

  return (
    <nav className="navbar sidebar sidebarForProductList">
      <div className="side_title ">產品類別</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div
            className={category === 0 ? 'nav-link active' : 'nav-link'}
            onClick={() => {
              setCategory(0)
            }}
          >
            <p>全部</p>
          </div>
          <hr />
          <div
            className={
              category === 1
                ? 'nav-link productLink active'
                : 'nav-link productLink'
            }
            onClick={() => {
              setCategory(1)
            }}
          >
            <p>咖啡豆</p>
          </div>
          <hr />
          <div
            className={
              category === 2
                ? 'nav-link productLink active'
                : 'nav-link productLink'
            }
            onClick={() => {
              setCategory(2)
            }}
          >
            <p>即溶咖啡</p>
          </div>
          <hr />
          <div
            className={
              category === 3
                ? 'nav-link productLink active'
                : 'nav-link productLink'
            }
            onClick={() => {
              setCategory(3)
            }}
          >
            <p>咖啡膠囊</p>
          </div>
          <hr />
          <div
            className={
              category === 4
                ? 'nav-link productLink active'
                : 'nav-link productLink'
            }
            onClick={() => {
              setCategory(4)
            }}
          >
            <p>濾掛包</p>
          </div>
          <hr />
          <div
            className={
              category === 5
                ? 'nav-link productLink active'
                : 'nav-link productLink'
            }
            onClick={() => {
              setCategory(5)
            }}
          >
            <p>濾紙</p>
          </div>
          <hr />
          <div
            className={
              category === 6
                ? 'nav-link productLink active'
                : 'nav-link productLink'
            }
            onClick={() => {
              setCategory(6)
            }}
          >
            <p>烘培機</p>
          </div>
          <hr />
          <div
            className={
              category === 7
                ? 'nav-link productLink active'
                : 'nav-link productLink'
            }
            onClick={() => {
              setCategory(7)
            }}
          >
            <p>磨豆機</p>
          </div>
          <hr />
          <div
            className={
              category === 8
                ? 'nav-link productLink active'
                : 'nav-link productLink'
            }
            onClick={() => {
              setCategory(8)
            }}
          >
            <p>咖啡機</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    category: state.ProductListReducer.category,
  }
}

export default connect(mapStateToProps, {
  setCategory,
})(ProductListSidebar)
