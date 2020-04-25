import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { getMemberID } from '../actions/getMemberID'

import { connect } from 'react-redux'
import { recordVisit, getProduct } from '../actions/getProduct'
import {
  AddProductToCart,
  removeProductFromCart,
  updateProductNumToCart,
} from '../actions/CartAction'

import CardSecondary from '../components/CardSecondary'

function Product(props) {
  let { id } = useParams()

  const {
    product,
    recordVisit,
    getProduct,
    AddProductToCart,
    removeProductFromCart,
    updateProductNumToCart,
  } = props

  const memberID = getMemberID()

  useEffect(() => {
    async function start() {
      await recordVisit(id, memberID)
      await getProduct(id, memberID)
    }
    start()
  }, [getProduct, id, memberID, recordVisit])

  if (product.productID === undefined) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      </>
    )
  }

  if (product.productID === 'not found') {
    return (
      <>
        <div className="container m-5 p-5">
          <h4>對不起，找不到該項商品</h4>
        </div>
      </>
    )
  }

  const tagsLink = product.tags.map((tag, i) => (
    <Link className="mx-1" key={i} to="#">
      {tag}
    </Link>
  ))
  return (
    <>
      <div className="topSpace"></div>
      <CardSecondary>
        <h2>產品名稱：{product.ProductName}</h2>
        <p>價格：{product.UnitPrice}</p>
        <p>庫存：{product.UnitsInStock}</p>
        <p>人氣：{product.visitedTimes}</p>
        <p>Tags：{tagsLink}</p>

        <form className="form-inline">
          <label htmlFor="order_num" className="m-1">
            數量：
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Number"
            id="order_num"
            defaultValue={product.num}
            onChange={() => {
              const input_num = document.getElementById('order_num')
              input_num.value = Math.round(input_num.value)
              if (input_num.value < 1) {
                input_num.value = 1
              }
            }}
          />

          {product.num == null ? (
            <>
              <button
                className="btn btn-primary m-1"
                onClick={(e) => {
                  e.preventDefault()
                  const num = document.getElementById('order_num').value
                  async function add() {
                    await AddProductToCart(product.productID, memberID, num)
                    await getProduct(id, memberID)
                  }
                  add()
                }}
              >
                add
              </button>{' '}
            </>
          ) : (
            <>
              <button
                className="btn btn-success m-1"
                onClick={(e) => {
                  e.preventDefault()
                  async function update() {
                    const num = document.getElementById('order_num').value
                    await updateProductNumToCart(
                      product.productID,
                      memberID,
                      num
                    )
                    await getProduct(id, memberID)
                  }
                  update()
                }}
              >
                update
              </button>
              <button
                className="btn btn-danger m-1"
                onClick={(e) => {
                  e.preventDefault()
                  async function remove() {
                    await removeProductFromCart(product.productID, memberID)
                    await getProduct(id, memberID)
                  }
                  remove()
                }}
              >
                remove({product.num})
              </button>
            </>
          )}
        </form>
      </CardSecondary>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    product: state.ProductReducer.item,
  }
}

export default connect(mapStateToProps, {
  recordVisit,
  getProduct,
  AddProductToCart,
  removeProductFromCart,
  updateProductNumToCart,
})(Product)
