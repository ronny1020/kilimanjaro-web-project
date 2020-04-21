import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductListItem from '../components/ProductList/productListItem'

import { connect } from 'react-redux'
import { getProductList } from '../actions/getProductList'

import Pagination from 'react-bootstrap/Pagination'

function ProductList(props) {
  const { products, range, getProductList } = props

  useEffect(() => {
    getProductList()
  }, [getProductList])

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

  // page selection
  let pageList = []

  for (let i = 1; i <= 3 && i <= range.totalPages; i++) {
    pageList.push(i)
  }

  if (range.page <= 6) {
    for (let i = 4; i <= range.page + 2 && i <= range.totalPages; i++) {
      pageList.push(i)
    }
  } else {
    pageList.push('ellipsis')

    for (
      let i = range.page - 2;
      i <= range.page + 2 && i <= range.totalPages;
      i++
    ) {
      pageList.push(i)
    }
  }

  if (range.totalPages - range.page <= 5) {
    for (let i = range.page + 3; i <= range.totalPages; i++) {
      pageList.push(i)
    }
  } else {
    pageList.push('ellipsis')
    for (let i = range.totalPages - 2; i <= range.totalPages; i++) {
      pageList.push(i)
    }
  }

  const PageIndex = pageList.map((page, i) => {
    switch (page) {
      case range.page:
        return (
          <Pagination.Item key={i} active>
            {page}
          </Pagination.Item>
        )
      case 'ellipsis':
        return <Pagination.Ellipsis key={i} />
      default:
        return <Pagination.Item key={i}>{page}</Pagination.Item>
    }
  })

  return (
    <>
      <div className="container">
        <h1>產品頁面</h1>
        {productList}

        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          {PageIndex}
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.ProductListReducer.items.ProductList,
    range: state.ProductListReducer.items.Range,
  }
}

export default connect(mapStateToProps, { getProductList })(ProductList)
