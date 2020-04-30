import React from 'react'
import { connect } from 'react-redux'
import PurchaseStepper from '../../components/purchase/PurchaseStepper'
import { useHistory } from 'react-router-dom'
import CardSecondary from '../../components/CardSecondary'

import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'

function Shipment(props) {
  let history = useHistory()
  const { Cart } = props

  const [shippingMethodValue, setShippingMethodValue] = React.useState('a')
  const shippingMethodVChange = (event) => {
    setShippingMethodValue(event.target.value)
  }

  console.log(Cart)

  return (
    <>
      <PurchaseStepper activeStep="2" />

      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">訂購人資料</h4>
        </div>
      </div>
      <CardSecondary>
        <label for="sameAsCustomer" class="row">
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
        <label for="RecipientName" class="row  my-3">
          <div className="col-md-3 d-flex align-items-center">訂購人姓名：</div>
          <div className="col-md-9 d-flex align-items-center">
            <input
              type="text"
              class="form-control"
              id="RecipientName"
              required
            />
          </div>
        </label>
        <label for="RecipientMobile" class="row  my-3">
          <div className="col-md-3 d-flex align-items-center">訂購人電話：</div>
          <div className="col-md-9 d-flex align-items-center">
            <input
              type="number"
              class="form-control"
              id="RecipientMobile"
              required
            />
          </div>
        </label>
        <label for="RecipientAddress" class="row my-3">
          <div className="col-md-3 d-flex align-items-center">訂購人地址：</div>
          <div className="col-md-9 d-flex align-items-center">
            <input
              type="text"
              class="form-control"
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
        <label for="to711" class="row">
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
        <label for="toHome" class="row">
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
        <div class="row">
          <div className="col-3 d-flex justify-content-center">運費小計</div>
          <div className="col-9 d-flex align-items-center">0 元</div>
        </div>
      </CardSecondary>

      <div className="container p-0">
        <button
          className="btn btn-success mt-5"
          onClick={(e) => {
            e.preventDefault()
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
  }
}

export default connect(mapStateToProps, {})(Shipment)
