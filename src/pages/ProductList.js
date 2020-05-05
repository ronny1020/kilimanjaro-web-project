import React, { useEffect } from 'react'
import ProductListItem from '../components/ProductList/productListItem'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getProductList } from '../actions/getProductList'
import { getMemberID } from '../actions/getMemberID'

import { AddProductToCart, removeProductFromCart } from '../actions/CartAction'

import {
  AddProductToFavourite,
  removeProductFromFavourite,
} from '../actions/FavouriteAction'

import Pagination from 'react-bootstrap/Pagination'
import CardSecondary from '../components/CardSecondary'

function ProductList(props) {
  let { page } = useParams()
  page = page ? page : 1
  const {
    products,
    range,
    getProductList,
    AddProductToCart,
    removeProductFromCart,
    AddProductToFavourite,
    removeProductFromFavourite,
  } = props

  const memberID = getMemberID()

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
      <Link to={'../product/' + product.productID} className="linkNoUnderline">
        <ProductListItem>
          <h3>{product.ProductName}</h3>
          <p>price:{product.UnitPrice}</p>
          {product.discount !== null ? (
            <p>special price:{product.UnitPrice - product.discount}</p>
          ) : (
            <p></p>
          )}
          <div className="form-inline">
            {/* favourite button */}

            {product.favouriteID === null ? (
              <button
                className="btn btn-primary m-1"
                onClick={(e) => {
                  e.preventDefault()
                  async function add() {
                    await AddProductToFavourite(product.productID, memberID)
                    await getProductList(page, memberID)
                  }
                  add()
                }}
              >
                add to favourite
              </button>
            ) : (
              <button
                className="btn btn-danger  m-1"
                onClick={(e) => {
                  e.preventDefault()
                  async function remove() {
                    await removeProductFromFavourite(
                      product.productID,
                      memberID
                    )
                    await getProductList(page, memberID)
                  }
                  remove()
                }}
              >
                remove from favourite
              </button>
            )}
            {/* cart button */}
            {product.num == null ? (
              <button
                className="btn btn-primary  m-1"
                onClick={(e) => {
                  e.preventDefault()
                  async function add() {
                    await AddProductToCart(product.productID, memberID)
                    await getProductList(page, memberID)
                  }
                  add()
                }}
              >
                add to cart
              </button>
            ) : (
              <button
                className="btn btn-danger  m-1"
                onClick={(e) => {
                  e.preventDefault()
                  async function remove() {
                    await removeProductFromCart(product.productID, memberID)
                    await getProductList(page, memberID)
                  }
                  remove()
                }}
              >
                remove({product.num}) from cart
              </button>
            )}
          </div>
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
      ? row_start + range.perPage - 1
      : range.totalRows

  function search() {
    let query = ''
    let keyword = document.getElementById('keyword').value
    if (keyword) {
      query = query + 'keyword=' + keyword
    }
    getProductList(page, memberID, query)
  }

  return (
    <>
      <CardSecondary>
        <input
          type="text"
          className="form-control"
          onChange={search}
          id="keyword"
        ></input>
      </CardSecondary>
      <div className="topSpace"></div>
      <div className="container">
        <h1>產品頁面</h1>
        <p className="d-flex justify-content-end mb-5">
          第 {range.page} 頁( {row_start} - {row_end} )，共 {range.totalPages}{' '}
          頁{range.totalRows} 項
        </p>
        <div>{productList}</div>
        <Pagination className="justify-content-center mt-5">
          <Pagination.First href="../productList/1" />
          <Pagination.Prev
            href={'../productList/' + (range.page > 1 ? range.page - 1 : 1)}
          />
          {PageIndex}
          <Pagination.Next
            href={
              '../productList/' +
              (range.page < range.totalPages
                ? range.page + 1
                : range.totalPages)
            }
          />
          <Pagination.Last href={'../productList/' + range.totalPages} />
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
  AddProductToFavourite,
  removeProductFromFavourite,
})(ProductList)
