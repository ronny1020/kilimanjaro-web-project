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
import { getMemberInfo } from '../actions/getMemberInfo'

function Cart(props) {
  let history = useHistory()
  const memberID = getMemberID()

  if (memberID == null) {
    localStorage.setItem('siteBeforeLogin', window.location.pathname)
    window.location.replace('./login/entrance')
  }

  const {
    Cart,
    getCart,
    removeProductFromCart,
    updateProductNumToCart,
    getMemberInfo,
    Member,
  } = props

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
    async function start() {
      await getCart(memberID)
      await getMemberInfo(memberID)
    }
    start()
  }, [getCart, getMemberInfo, memberID])

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
          <div className="row">
            <div className="col-md-auto">
              {' '}
              <img
                alt=""
                src={'../images/products/' + product.productID + '/0.jpg'}
                className="productListImage"
                onError={(event) =>
                  (event.target.src = '../images/products/default.jpg')
                }
              />
            </div>

            <div className="col-md-auto p-3">
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
                  onChange={(event) => {
                    event.target.value = Math.round(event.target.value)
                    if (event.target.value < 1) event.target.value = 1
                    if (event.target.value > product.UnitsInStock)
                      event.target.value = product.UnitsInStock
                  }}
                />
                <button
                  className="btn btn-success m-1"
                  onClick={(e) => {
                    e.preventDefault()
                    async function update() {
                      const num = document.getElementById(product.productID)
                        .value
                      await updateProductNumToCart(
                        product.productID,
                        memberID,
                        num
                      )
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
            </div>
          </div>
        </ProductListItem>
      </Link>
    </div>
  ))

  return (
    <>
      <div className="topSpace"></div>
      <div className="container p-0">
        <p>親愛的會員 {Member.cName} 您好：</p>
        <PurchaseStepper activeStep={1} />
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
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
          }}
        >
          NEXT
        </button>
      </div>
      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">重要訊息</h4>
        </div>
      </div>
      <CardSecondary>
        <ul>
          <li>選擇『7-11取貨』，單次實際付款金額未滿350元加收20元處理費</li>
          <li>
            選擇『宅配到府』，單次實際付款金額未滿490元加收65元處理費，490～999元加收50元處理費；滿1,000元免處理費。
          </li>
          <li>商品體積較大或多於15項，可能不適用『7-11取貨』。</li>
          <li>無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
          <li>結帳選項若無出現「海外店取」，可能是購買商品不適用此服務。</li>
          <li>海外郵資運費計算。</li>
        </ul>
      </CardSecondary>
      <hr className="my-5" />
      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">推薦商品</h4>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    Cart: state.CartReducer.items.cart,
    Member: state.MemberInfoReducer.member,
  }
}

export default connect(mapStateToProps, {
  getCart,
  removeProductFromCart,
  updateProductNumToCart,
  getMemberInfo,
})(Cart)
