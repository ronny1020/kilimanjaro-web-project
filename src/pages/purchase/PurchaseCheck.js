import React from 'react'
import { connect } from 'react-redux'
import PurchaseStepper from '../../components/purchase/PurchaseStepper'
import { useHistory } from 'react-router-dom'
import ProductListItem from '../../components/ProductList/productListItem'
import { getMemberID } from '../../actions/getMemberID'
import CardSecondary from '../../components/CardSecondary'

import { createOrder } from '../../actions/purchaseFormStorage'
import { getCartNum } from '../../actions/CartAction'

function PurchaseCheck(props) {
  const memberID = getMemberID()
  if (memberID == null) {
    localStorage.setItem('siteBeforeLogin', './cart')
    window.location.replace('./login/entrance')
  }

  let history = useHistory()
  const { Cart, ShipmentInfo, createOrder, Member, getCartNum } = props

  Cart || window.location.replace('./Cart')
  Cart.length || window.location.replace('./Cart')
  ShipmentInfo || window.location.replace('./Cart')

  let totalPrice = Cart
    ? Cart.reduce((a, product) => {
        let price =
          product.UnitPrice - product.discount >= 0
            ? product.UnitPrice - product.discount
            : 0
        return a + price * product.num
      }, 0)
    : 0
  // totalPrice = new Intl.NumberFormat('en-IN').format(totalPrice)

  const productList = Cart.map((product, i) => (
    <div key={i}>
      <ProductListItem>
        <div className="row">
          <div className="col-md-3">
            <img
              alt=""
              src={'../images/products/' + product.productID + '/0.jpg'}
              className="productListImage"
              onError={(event) =>
                (event.target.src = '../images/products/default.jpg')
              }
            />
          </div>
          <div className="col-md-9 p-3">
            <h3>{product.ProductName}</h3>
            <div className="row">
              <div className="col-4">
                {product.discount !== null ? (
                  <>
                    <p>
                      原價:
                      <span className="originalPrice">
                        {' ' + product.UnitPrice}
                      </span>
                    </p>
                    <p>
                      特價:
                      <span className="specialPrice">
                        {' ' + product.finalPrice}
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <p>售價：</p>
                    <p>{product.UnitPrice}</p>
                  </>
                )}
              </div>

              <div className="col-4">
                <p>數量：</p>
                <p>{product.num}</p>
              </div>
              <div className="col-4">
                <p>總價：</p>
                <p>
                  {new Intl.NumberFormat('en-IN').format(
                    product.finalPrice !== '0'
                      ? product.finalPrice * product.num
                      : product.UnitPrice * product.num
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ProductListItem>
    </div>
  ))

  return (
    <>
      <div className="container p-0">
        <p>親愛的會員 {Member.cName} 您好：</p>
        <PurchaseStepper activeStep={4} />
        <div>{productList}</div>
      </div>
      <CardSecondary>
        <span>
          共 {Cart.length} 項商品，
          {ShipmentInfo.couponPrice
            ? '折扣券折抵 ' + ShipmentInfo.couponPrice + ' 元，'
            : ''}
          {Number(ShipmentInfo.rewardsPoints)
            ? '紅利折抵 ' + ShipmentInfo.rewardsPoints + ' 元，'
            : ''}
          總價
          {new Intl.NumberFormat('en-IN').format(
            totalPrice - ShipmentInfo.couponPrice - ShipmentInfo.rewardsPoints
          )}
          元
        </span>
      </CardSecondary>

      <div className="container p-0">
        <button
          className="btn btn-success mt-5 mr-3"
          onClick={(e) => {
            e.preventDefault()
            history.push('/payment')
          }}
        >
          上一步
        </button>
        <button
          className="btn btn-success mt-5"
          onClick={(e) => {
            e.preventDefault()
            async function order() {
              await createOrder(memberID, ShipmentInfo)
              await getCartNum(memberID)
            }
            order()
            history.push('/purchaseComplied')
          }}
        >
          下一步
        </button>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    Cart: state.CartReducer.items.cart,
    ShipmentInfo: state.PurchaseFormReducer.info,
    Member: state.MemberInfoReducer.member,
  }
}

export default connect(mapStateToProps, { createOrder, getCartNum })(
  PurchaseCheck
)
