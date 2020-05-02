import React from 'react'
import { connect } from 'react-redux'
import PurchaseStepper from '../../components/purchase/PurchaseStepper'
import { useHistory } from 'react-router-dom'
import ProductListItem from '../../components/ProductList/productListItem'
import { getMemberID } from '../../actions/getMemberID'
import CardSecondary from '../../components/CardSecondary'

import { createOrder } from '../../actions/purchaseFormStorage'

function PurchaseCheck(props) {
  const memberID = getMemberID()
  if (memberID == null) {
    window.location.replace('./login/entrance')
  }

  let history = useHistory()
  const { Cart, ShipmentInfo, createOrder } = props

  Cart || window.location.replace('./Cart')
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
  totalPrice = new Intl.NumberFormat('en-IN').format(totalPrice)

  const productList = Cart.map((product, i) => (
    <div key={i}>
      <ProductListItem>
        <h3>{product.ProductName}</h3>
        <p>id:{product.productID}</p>
        <p>價格：{product.UnitPrice}</p>
        {product.discount !== null ? (
          <p>special price:{product.UnitPrice - product.discount}</p>
        ) : (
          <p></p>
        )}
      </ProductListItem>
    </div>
  ))

  return (
    <>
      <PurchaseStepper activeStep={4} />
      <div className="container p-0">
        <div>{productList}</div>
      </div>
      <CardSecondary>
        <span>
          共 {Cart.length} 項商品，總價 {totalPrice} 元
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
            createOrder(memberID, ShipmentInfo)
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
  }
}

export default connect(mapStateToProps, { createOrder })(PurchaseCheck)
