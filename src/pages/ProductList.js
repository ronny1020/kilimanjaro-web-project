import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductListItem from '../components/ProductList/productListItem'

import { connect } from 'react-redux'
import { getProductList } from '../actions/getProductList'

function ProductList(props) {
  const { products, getProductList } = props

  useEffect(() => {
    getProductList()
  }, [])

  const productList = products.map((product) => (
    <ProductListItem key={product.id}>
      <h3>{product.id}</h3>
      <p>{product.name}</p>
    </ProductListItem>
  ))

  return (
    <>
      <div className="container">
        <h1>產品頁面</h1>
        <div className=" card-deck">{productList}</div>
        <Link to="/product/123">123</Link>
        <br />
        <Link to="/product/12345">12345</Link>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  products: state.items,
})

export default connect(mapStateToProps, { getProductList })(ProductList)
