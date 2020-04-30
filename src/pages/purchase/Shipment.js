import React from 'react'
import { connect } from 'react-redux'
import PurchaseStepper from '../../components/purchase/PurchaseStepper'
import { useHistory } from 'react-router-dom'
import CardSecondary from '../../components/CardSecondary'

import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'
import { shipmentInfoStorage } from '../../actions/purchaseFormStorage'

import { getMemberID } from '../../actions/getMemberID'

function Shipment(props) {
  const memberID = getMemberID()
  if (memberID == null) {
    window.location.replace('http://localhost:3000/login/entrance')
  }

  let history = useHistory()
  const { shipmentInfoStorage } = props

  const [shippingMethodValue, setShippingMethodValue] = React.useState('a')
  const shippingMethodVChange = (event) => {
    setShippingMethodValue(event.target.value)
  }

  return (
    <>
      <PurchaseStepper activeStep={2} />

      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">訂購人資料</h4>
        </div>
      </div>
      <CardSecondary>
        <label htmlFor="sameAsCustomer" className="row">
          <div className="col-md-3 d-flex align-items-center">同會員資料</div>
          <div className="col-md-9 d-flex align-items-center">
            <Checkbox
              defaultChecked
              color="primary"
              id="sameAsCustomer"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </div>
        </label>
        <label htmlFor="RecipientName" className="row  my-3">
          <div className="col-md-3 d-flex align-items-center">訂購人姓名：</div>
          <div className="col-md-9 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="RecipientName"
              required
            />
          </div>
        </label>
        <label htmlFor="RecipientMobile" className="row  my-3">
          <div className="col-md-3 d-flex align-items-center">訂購人電話：</div>
          <div className="col-md-9 d-flex align-items-center">
            <input
              type="number"
              className="form-control"
              id="RecipientMobile"
              required
            />
          </div>
        </label>
        <label htmlFor="RecipientAddress" className="row my-3">
          <div className="col-md-3 d-flex align-items-center">訂購人地址：</div>
          <div className="col-md-9 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="RecipientAddress"
              required
            />
          </div>
        </label>
      </CardSecondary>

      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">配送方式</h4>
        </div>
      </div>
      <CardSecondary>
        <label htmlFor="to711" className="row">
          <div className="col-3 d-flex justify-content-center">
            <Radio
              checked={shippingMethodValue === '1'}
              onChange={shippingMethodVChange}
              value="1"
              color="primary"
              name="shippingMethod"
              id="to711"
              inputProps={{ 'aria-label': '1' }}
            />
          </div>
          <div className="col-9 d-flex align-items-center">7-11取貨</div>
        </label>
        <label htmlFor="toHome" className="row">
          <div className="col-3 d-flex justify-content-center">
            <Radio
              checked={shippingMethodValue === '2'}
              onChange={shippingMethodVChange}
              value="2"
              color="primary"
              name="shippingMethod"
              id="toHome"
              inputProps={{ 'aria-label': '1' }}
            />
          </div>
          <div className="col-9 d-flex align-items-center">宅配到府</div>
        </label>
      </CardSecondary>
      <CardSecondary>
        <div className="row">
          <div className="col-3 d-flex justify-content-center">運費小計</div>
          <div className="col-9 d-flex align-items-center">0 元</div>
        </div>
      </CardSecondary>

      <div className="container p-0">
        <button
          className="btn btn-success mt-5 mr-3"
          onClick={(e) => {
            e.preventDefault()
            history.push('/cart')
          }}
        >
          上一步
        </button>
        <button
          className="btn btn-success mt-5"
          onClick={(e) => {
            e.preventDefault()
            shipmentInfoStorage(
              document.getElementById('RecipientName').value,
              document.getElementById('RecipientMobile').value,
              document.getElementById('RecipientAddress').value,
              shippingMethodValue
            )
            history.push('/payment')
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

export default connect(mapStateToProps, { shipmentInfoStorage })(Shipment)
