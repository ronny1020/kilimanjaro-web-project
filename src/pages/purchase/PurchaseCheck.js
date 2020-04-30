import React from 'react'
import { connect } from 'react-redux'
import PurchaseStepper from '../../components/purchase/PurchaseStepper'
import { useHistory } from 'react-router-dom'

import { getMemberID } from '../../actions/getMemberID'

function PurchaseCheck(props) {
  const memberID = getMemberID()
  if (memberID == null) {
    window.location.replace('http://localhost:3000/login/entrance')
  }

  let history = useHistory()
  const { Cart } = props

  console.log(Cart)

  return (
    <>
      <PurchaseStepper activeStep={4} />

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
  }
}

export default connect(mapStateToProps, {})(PurchaseCheck)
