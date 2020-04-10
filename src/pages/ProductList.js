import React from 'react'
import { Link } from 'react-router-dom'

function ProductList() {
  return (
    <>
      <h1>產品頁面</h1>
      <Link to="/product/123">123</Link>
      <br />
      <Link to="/product/12345">12345</Link>
    </>
  )
}

export default ProductList
