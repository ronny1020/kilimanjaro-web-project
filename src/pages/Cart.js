import React, { useEffect } from 'react'
import ProductListItem from '../components/ProductList/productListItem'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getCart } from '../actions/CartAction'
import { removeProductFromCart } from '../actions/CartAction'

import jwt from 'jsonwebtoken'

function Cart(props) {
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
  if (memberID == null) {
    window.location.replace('http://localhost:3000/login/entrance')
  }

  const { Cart, getCart, removeProductFromCart } = props

  useEffect(() => {
    getCart(memberID)
  }, [getCart, memberID])

  if (Cart === undefined) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      </>
    )
  }

  const productList = Cart.map((product, i) => (
    <div key={i}>
      <Link to={'../product/' + product.productID}>
        <ProductListItem>
          <h3>{product.ProductName}</h3>
          <p>id:{product.productID}</p>

          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault()
              async function remove() {
                await removeProductFromCart(product.productID, memberID)
                await getCart(memberID)
              }
              remove()
            }}
          >
            remove({product.num})
          </button>
        </ProductListItem>
      </Link>
    </div>
  ))

  return (
    <>
      <div className="container">
        <h1>購物車</h1>

        <div>{productList}</div>

        <button
          className="btn btn-danger"
          onClick={(e) => {
            e.preventDefault()
            async function remove() {
              await removeProductFromCart('all', memberID)
              await getCart(memberID)
            }
            remove()
          }}
        >
          remove all
        </button>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    Cart: state.CartReducer.items.cart,
  }
}

export default connect(mapStateToProps, { getCart, removeProductFromCart })(
  Cart
)
