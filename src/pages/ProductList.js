import React, { useEffect } from 'react'
import ProductListItem from '../components/ProductList/productListItem'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

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

import Zoom from '@material-ui/core/Zoom'

function ProductList(props) {
  const [page, setPage] = React.useState(1)
  const [pageListSelect, setPageListSelect] = React.useState([1])
  const [rowStart, setRowStart] = React.useState(1)
  const [rowEnd, setRowEnd] = React.useState(1)
  const [query, setQuery] = React.useState('')
  const [showZoom, setShowZoom] = React.useState(false)

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
    getProductList(page, memberID, query)
  }, [getProductList, page, memberID, query])

  useEffect(() => {
    let pageList = []
    if (range) {
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

      setPageListSelect(pageList)

      setRowStart(
        (range.page - 1) * range.perPage + 1 < range.totalRows
          ? (range.page - 1) * range.perPage + 1
          : range.totalRows
      )
      setRowEnd(
        range.page * range.perPage < range.totalRows
          ? range.page * range.perPage
          : range.totalRows
      )
    }
  }, [range])

  useEffect(() => {
    if (products) {
      setShowZoom(false)
      setShowZoom(true)
    }
  }, [products, query])

  if (products === undefined) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      </>
    )
  }

  const productList = products.map((product, i) => {
    return (
      <div key={i}>
        <Zoom
          in={showZoom}
          style={{
            transformOrigin: '0 0 0',
            transitionDelay: showZoom ? 300 * i + 'ms' : '0ms',
          }}
          {...(showZoom ? { timeout: 1000 } : {})}
        >
          <div>
            <Link
              to={'../product/' + product.productID}
              className="linkNoUnderline"
            >
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
                          await AddProductToFavourite(
                            product.productID,
                            memberID
                          )
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
                          await removeProductFromCart(
                            product.productID,
                            memberID
                          )
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
        </Zoom>
      </div>
    )
  })

  // page selection

  const PageIndex = pageListSelect.map((page, i) => {
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
          <Pagination.Item
            key={i}
            onClick={() => {
              setPage(page)
              document.documentElement.scrollTop = 0
            }}
          >
            {page}
          </Pagination.Item>
        )
    }
  })

  // calculate the date range

  function search() {
    let condition = ''
    let keyword = document.getElementById('keyword').value
    condition = condition + 'keyword=' + keyword
    if (keyword) {
      setQuery(condition)
    } else {
      setQuery('')
    }
    setPage(1)
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
          第 {range.page} 頁( {rowStart} - {rowEnd} )，共 {range.totalPages}頁
          {range.totalRows} 項
        </p>
        <div>{productList}</div>
        <Pagination className="justify-content-center mt-5">
          <Pagination.First
            onClick={() => {
              setPage(1)
              document.documentElement.scrollTop = 0
            }}
          />
          <Pagination.Prev
            onClick={() => {
              setPage(range.page > 1 ? range.page - 1 : 1)
              document.documentElement.scrollTop = 0
            }}
          />
          {PageIndex}
          <Pagination.Next
            onClick={() => {
              setPage(
                range.page < range.totalPages
                  ? range.page + 1
                  : range.totalPages
              )
              document.documentElement.scrollTop = 0
            }}
          />
          <Pagination.Last
            onClick={() => {
              setPage(range.totalPages)
              document.documentElement.scrollTop = 0
            }}
          />
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
