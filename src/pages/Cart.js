import React, { useEffect } from 'react'

import ProductListItem from '../components/ProductList/productListItem'
import Loading from '../components/Loading'
import { Link, useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import { getCart } from '../actions/CartAction'
import { getMemberID } from '../actions/getMemberID'

import PurchaseStepper from '../components/purchase/PurchaseStepper'

import {
  removeProductFromCart,
  updateProductNumToCart,
} from '../actions/CartAction'
import CardSecondary from '../components/CardSecondary'

function Cart(props) {
  let history = useHistory()
  const memberID = getMemberID()

  if (memberID == null) {
    window.location.replace('http://localhost:3000/login/entrance')
  }

  const { Cart, getCart, removeProductFromCart, updateProductNumToCart } = props

  let totalPrice = Cart
    ? Cart.reduce((a, product) => {
        let price =
          product.UnitPrice - product.discount >= 0
            ? product.UnitPrice - product.discount
            : 0
        return a + price * product.num
      }, 0)
    : 0
  totalPrice = new Intl.NumberFormat('en-IN').format(totalPrice)

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
      <Link to={'../product/' + product.productID} className="linkNoUnderline">
        <ProductListItem>
          <h3>{product.ProductName}</h3>
          <p>id:{product.productID}</p>
          <p>價格：{product.UnitPrice}</p>
          {product.discount !== null ? (
            <p>special price:{product.UnitPrice - product.discount}</p>
          ) : (
            <p></p>
          )}
          <div className="form-inline">
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
                if (input_num.value < 1) input_num.value = 1
                if (input_num.value > product.UnitsInStock)
                  input_num.value = product.UnitsInStock
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
          </div>
        </ProductListItem>
      </Link>
    </div>
  ))

  return (
    <>
      <div className="topSpace"></div>
      <div className="container p-0">
        <p>親愛的會員您好：</p>
        <PurchaseStepper activeStep="1" />
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">購物車內商品</h4>
        </div>
      </div>
      <div className="container p-0">
        <div>{productList}</div>
      </div>
      <CardSecondary>
        <span>
          共 {Cart.length} 項商品，總價 {totalPrice} 元
        </span>
      </CardSecondary>
      <div className="container">
        <button
          className="btn btn-danger m-1"
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

        <button
          className="btn btn-success m-1"
          onClick={(e) => {
            e.preventDefault()
            localStorage.setItem('Cart', JSON.stringify(Cart))
            history.push('/shipment')
          }}
        >
          NEXT
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
