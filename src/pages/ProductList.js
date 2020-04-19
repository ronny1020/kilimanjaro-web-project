import React from 'react'
import { Link } from 'react-router-dom'
import ProductListItem from '../components/ProductList/productListItem'

function ProductList() {
  return (
    <>
      <div className="container">
        <h1>產品頁面</h1>
        <div className=" card-deck">
          <ProductListItem>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </ProductListItem>
          <ProductListItem>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </ProductListItem>
          <ProductListItem>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </ProductListItem>
        </div>
        <Link to="/product/123">123</Link>
        <br />
        <Link to="/product/12345">12345</Link>
      </div>
    </>
  )
}

export default ProductList
