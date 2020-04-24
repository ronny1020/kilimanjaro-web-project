import React, { useEffect } from 'react'
import ProductListItem from '../components/ProductList/productListItem'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getProductList } from '../actions/getProductList'

import { AddProductToCart, removeProductFromCart } from '../actions/CartAction'

import Pagination from 'react-bootstrap/Pagination'

import jwt from 'jsonwebtoken'

function ProductList(props) {
  let { page } = useParams()
  page = page ? page : 1
  const {
    products,
    range,
    getProductList,
    AddProductToCart,
    removeProductFromCart,
  } = props

  var memberID = null
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    try {
      var decrypt = jwt.verify(token, 'himitsu')
    } catch (err) {
      localStorage.removeItem('token')
      window.location.reload()
    }

    if (jwt.verify(token, 'himitsu')) {
      decrypt = jwt.verify(token, 'himitsu')
      memberID = decrypt.user_id
    }
  }

  useEffect(() => {
    getProductList(page, memberID)
  }, [getProductList, page, memberID])

  if (products === undefined) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      </>
    )
  }

  const productList = products.map((product, i) => (
    <div key={i}>
      <Link to={'../product/' + product.productID}>
        <ProductListItem>
          <h3>{product.ProductName}</h3>
          <p>id:{product.productID}</p>
          {product.num == null ? (
            <button
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault()
                async function add() {
                  await AddProductToCart(product.productID, memberID)
                  await getProductList(page, memberID)
                }
                add()
              }}
            >
              add
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={(e) => {
                e.preventDefault()
                async function remove() {
                  await removeProductFromCart(product.productID, memberID)
                  await getProductList(page, memberID)
                }
                remove()
              }}
            >
              remove({product.num})
            </button>
          )}
        </ProductListItem>
      </Link>
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
        return <Pagination.Ellipsis disabled key={i} />
      default:
        return (
          <Pagination.Item key={i} href={'../productList/' + page}>
            {page}
          </Pagination.Item>
        )
    }
  })

  // calculate the date range
  const row_start = (range.page - 1) * range.perPage + 1
  const row_end =
    row_start + range.perPage < range.totalRows
      ? row_start + range.perPage
      : range.totalRows

  return (
    <>
      <div className="container">
        <h1>產品頁面</h1>
        <p className="d-flex justify-content-end mb-5">
          第 {range.page} 頁( {row_start} - {row_end} )，共 {range.totalPages}{' '}
          頁 {range.totalRows} 項
        </p>
        <div>{productList}</div>
        <Pagination className="justify-content-center mt-5">
          <Pagination.First href="1" />
          <Pagination.Prev href={(range.page > 1 ? range.page - 1 : 1) + ''} />
          {PageIndex}
          <Pagination.Next
            href={
              (range.page < range.totalPages
                ? range.page + 1
                : range.totalPages) + ''
            }
          />
          <Pagination.Last href={range.totalPages + ''} />
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

export default connect(mapStateToProps, {
  getProductList,
  AddProductToCart,
  removeProductFromCart,
})(ProductList)
