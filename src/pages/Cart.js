import React, { useEffect } from 'react'
import ProductListItem from '../components/ProductList/productListItem'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getCart } from '../actions/CartAction'
import { getMemberID } from '../actions/getMemberID'

import {
  removeProductFromCart,
  updateProductNumToCart,
} from '../actions/CartAction'

function Cart(props) {
  const memberID = getMemberID()

  if (memberID == null) {
    window.location.replace('http://localhost:3000/login/entrance')
  }

  const { Cart, getCart, removeProductFromCart, updateProductNumToCart } = props

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

          <form className="form-inline">
            <label htmlFor={product.productID} className="m-1">
              數量：
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Number"
              id={product.productID}
              defaultValue={product.num}
              onClick={(e) => {
                e.preventDefault()
              }}
              onChange={() => {
                const input_num = document.getElementById(product.productID)
                input_num.value = Math.round(input_num.value)
                if (input_num.value < 1) {
                  input_num.value = 1
                }
              }}
            />
            <button
              className="btn btn-success m-1"
              onClick={(e) => {
                e.preventDefault()
                async function update() {
                  const num = document.getElementById(product.productID).value
                  await updateProductNumToCart(product.productID, memberID, num)
                  await getCart(memberID)
                }
                update()
              }}
            >
              update
            </button>
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
          </form>
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

export default connect(mapStateToProps, {
  getCart,
  removeProductFromCart,
  updateProductNumToCart,
})(Cart)
