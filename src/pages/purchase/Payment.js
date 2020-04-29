import React from 'react'
import { connect } from 'react-redux'
import PurchaseStepper from '../../components/purchase/PurchaseStepper'
import { useHistory } from 'react-router-dom'

function Payment(props) {
  let history = useHistory()
  const { Cart } = props

  console.log(Cart)

  return (
    <>
      <PurchaseStepper activeStep="2" />
      <div className="container">
        <button
          className="btn btn-success m-1"
          onClick={(e) => {
            e.preventDefault()
            history.push('/purchaseCheck')
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

export default connect(mapStateToProps, {})(Payment)
