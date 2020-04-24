import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { recordVisit, getProduct } from '../actions/getProduct'
import { AddProductToCart, removeProductFromCart } from '../actions/CartAction'

import CardSecondary from '../components/CardSecondary'

import jwt from 'jsonwebtoken'

function Product(props) {
  let { id } = useParams()

  const {
    product,
    recordVisit,
    getProduct,
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
      <CardSecondary>
        <h2>產品名稱：{product.ProductName}</h2>
        <p>價格：{product.UnitPrice}</p>
        <p>庫存：{product.UnitsInStock}</p>
        <p>人氣：{product.visitedTimes}</p>
        <p>Tags：{tagsLink}</p>
        {product.num == null ? (
          <button
            className="btn btn-success"
            onClick={() => {
              async function add() {
                await AddProductToCart(product.productID, memberID)
                await getProduct(id, memberID)
              }
              add()
            }}
          >
            add
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => {
              async function remove() {
                await removeProductFromCart(product.productID, memberID)
                await getProduct(id, memberID)
              }
              remove()
            }}
          >
            remove({product.num})
          </button>
        )}
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
})(Product)
