import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductListItem from '../components/ProductList/productListItem'

import { connect } from 'react-redux'
import { getProductList } from '../actions/getProductList'

function ProductList(props) {
  const { products, getProductList } = props

  useEffect(() => {
    getProductList()
  }, [getProductList])

  console.log('products')
  console.log(products)
  if (products === undefined) {
    return (
      <>
        <div className="container">
          <h1>產品頁面</h1>

          <Link to="/product/123">123</Link>
          <br />
          <Link to="/product/12345">12345</Link>
        </div>
      </>
    )
  }

  const productList = products.map((product, i) => (
    <div key={i}>
      <ProductListItem>
        <h3>{product.ProductName}</h3>
        <p>id:{product.productID}</p>
      </ProductListItem>
    </div>
  ))

  return (
    <>
      <div className="container">
        <h1>產品頁面</h1>
        {productList}
        <Link to="/product/123">123</Link>
        <br />
        <Link to="/product/12345">12345</Link>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return { products: state.ProductListReducer.items.ProductList }
}

export default connect(mapStateToProps, { getProductList })(ProductList)
