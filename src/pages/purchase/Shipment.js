import React from 'react'
import { connect } from 'react-redux'

function Shipment(props) {
  const { Cart } = props

  console.log(Cart)

  return (
    <>
      <h1>運送</h1>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    Cart: state.CartReducer.items.cart,
  }
}

export default connect(mapStateToProps, {})(Shipment)
