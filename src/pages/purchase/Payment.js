import React from 'react'
import { connect } from 'react-redux'
import PurchaseStepper from '../../components/purchase/PurchaseStepper'
import { useHistory } from 'react-router-dom'
import CardSecondary from '../../components/CardSecondary'
import Radio from '@material-ui/core/Radio'

function Payment(props) {
  let history = useHistory()
  const { Cart } = props

  const [paymentMethodValue, setPaymentMethodValue] = React.useState('a')
  const paymentMethodVChange = (event) => {
    setPaymentMethodValue(event.target.value)
  }

  const [invoiceValue, setInvoiceValue] = React.useState('a')
  const invoiceChange = (event) => {
    setInvoiceValue(event.target.value)
  }

  console.log(Cart)

  return (
    <>
      <PurchaseStepper activeStep="3" />

      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">折價券</h4>
        </div>
      </div>
      <CardSecondary>
        <label for="coupon" class="row m-3">
          <div className="col-md-3 d-flex align-items-center">選擇折價券</div>
          <div className="col-md-9 d-flex align-items-center">
            <select class="form-control" id="coupon">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </label>
      </CardSecondary>

      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">點數折抵</h4>
        </div>
      </div>
      <CardSecondary>
        <label for="rewordPoint" class="row m-3">
          <div className="col-md-3 d-flex align-items-center">點數折抵數量</div>
          <div className="col-md-9 d-flex align-items-center">
            <input type="number" class="form-control" id="rewordPoint" />
          </div>
        </label>
      </CardSecondary>

      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">付款方式</h4>
        </div>
      </div>
      <CardSecondary>
        <label for="by711" class="row">
          <div className="col-3 d-flex justify-content-center">
            <Radio
              checked={paymentMethodValue === '1'}
              onChange={paymentMethodVChange}
              value="1"
              color="primary"
              name="paymentMethod"
              id="by711"
              inputProps={{ 'aria-label': '1' }}
            />
          </div>
          <div className="col-9 d-flex align-items-center">7-11取貨付款</div>
        </label>
        <label for="byATM" class="row">
          <div className="col-3 d-flex justify-content-center">
            <Radio
              checked={paymentMethodValue === '2'}
              onChange={paymentMethodVChange}
              value="2"
              color="primary"
              name="paymentMethod"
              id="byATM"
              inputProps={{ 'aria-label': '2' }}
            />
          </div>
          <div className="col-9 d-flex align-items-center">ATM付款</div>
        </label>
        <label for="byOnline" class="row">
          <div className="col-3 d-flex justify-content-center">
            <Radio
              checked={paymentMethodValue === '3'}
              onChange={paymentMethodVChange}
              value="3"
              color="primary"
              name="paymentMethod"
              id="byOnline"
              inputProps={{ 'aria-label': '3' }}
            />
          </div>
          <div className="col-9 d-flex align-items-center">線上刷卡</div>
        </label>
      </CardSecondary>

      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">發票</h4>
        </div>
      </div>
      <CardSecondary>
        <label for="donate" class="row">
          <div className="col-3 d-flex justify-content-center">
            <Radio
              checked={invoiceValue === '1'}
              onChange={invoiceChange}
              value="1"
              color="primary"
              name="invoice"
              id="donate"
              inputProps={{ 'aria-label': '1' }}
            />
          </div>
          <div className="col-9 d-flex align-items-center">捐贈發票</div>
        </label>
        <label for="duplicateUniform" class="row">
          <div className="col-3 d-flex justify-content-center">
            <Radio
              checked={invoiceValue === '2'}
              onChange={invoiceChange}
              value="2"
              color="primary"
              name="invoice"
              id="duplicateUniform"
              inputProps={{ 'aria-label': '2' }}
            />
          </div>
          <div className="col-9 d-flex align-items-center">二聯電子發票</div>
        </label>
        <label for="triplicateUniform" class="row">
          <div className="col-3 d-flex justify-content-center">
            <Radio
              checked={invoiceValue === '3'}
              onChange={invoiceChange}
              value="2"
              color="primary"
              name="invoice"
              id="triplicateUniform"
              inputProps={{ 'aria-label': '3' }}
            />
          </div>
          <div className="col-9 d-flex align-items-center">三聯電子發票</div>
        </label>
      </CardSecondary>

      <div className="container p-0">
        <button
          className="btn btn-success mt-5"
          onClick={(e) => {
            e.preventDefault()
            history.push('/purchaseCheck')
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

export default connect(mapStateToProps, {})(Payment)
