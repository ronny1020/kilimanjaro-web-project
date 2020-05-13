import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PurchaseStepper from '../../components/purchase/PurchaseStepper'
import { useHistory } from 'react-router-dom'
import CardSecondary from '../../components/CardSecondary'
import Radio from '@material-ui/core/Radio'

import { paymentInfoStorage } from '../../actions/purchaseFormStorage'

import { getMemberID } from '../../actions/getMemberID'
import { getCoupon } from '../../actions/getCoupon'
import CreditCard from '../../components/purchase/CreditCard'

function Payment(props) {
  const memberID = getMemberID()
  if (memberID == null) {
    localStorage.setItem('siteBeforeLogin', './cart')
    window.location.replace('./login/entrance')
  }
  let history = useHistory()
  const {
    Cart,
    ShipmentInfo,
    paymentInfoStorage,
    Member,
    getCoupon,
    Coupons,
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

  Cart || window.location.replace('./Cart')
  Cart.length || window.location.replace('./Cart')
  ShipmentInfo || window.location.replace('./Cart')

  const [paymentMethodValue, setPaymentMethodValue] = React.useState('2')
  const paymentMethodVChange = (event) => {
    setPaymentMethodValue(event.target.value)
  }

  const [invoiceValue, setInvoiceValue] = React.useState('2')
  const invoiceChange = (event) => {
    setInvoiceValue(event.target.value)
  }

  useEffect(() => {
    getCoupon(memberID)
  }, [getCoupon, memberID])

  const couponOptions = Coupons.map((Coupon) =>
    Coupon.valid &&
    Date.parse(Coupon.coupon.cpendDate) > Date.now() &&
    totalPrice > Coupon.coupon.limitation ? (
      <option value={Coupon.couponMapId + '-' + Coupon.coupon.minus}>
        {Coupon.coupon.couponName}
      </option>
    ) : (
      <></>
    )
  )

  return (
    <>
      <div className="container p-0">
        <p>親愛的會員 {Member.cName} 您好：</p>
        <PurchaseStepper activeStep={3} />
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">折價券</h4>
        </div>
      </div>
      <CardSecondary>
        <label htmlFor="coupon" className="row m-3">
          <div className="col-md-3 d-flex align-items-center">選擇折價券</div>
          <div className="col-md-9 d-flex align-items-center">
            <select className="form-control" id="coupon">
              <option value="null">未選擇</option>
              {couponOptions}
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
        <div className="row ml-5">
          <div className="col-md-3 "></div>
          <div className="col-md-9 d-flex align-items-center">
            <p>您還可折抵 {Member.rewardsPoints} 點</p>
          </div>
        </div>
        <label htmlFor="rewardPoint" className="row m-3">
          <div className="col-md-3 d-flex align-items-center">點數折抵數量</div>
          <div className="col-md-9 d-flex align-items-center">
            <input
              type="number"
              className="form-control"
              id="rewardPoint"
              defaultValue="0"
              onChange={(event) => {
                if (event.target.value < 0) event.target.value = 0
                if (event.target.value > Member.rewardsPoints)
                  event.target.value = Member.rewardsPoints
                if (event.target.value > totalPrice)
                  event.target.value = totalPrice
                event.target.value = Math.round(event.target.value)
              }}
            />
          </div>
        </label>
      </CardSecondary>

      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">付款方式</h4>
        </div>
      </div>
      <CardSecondary>
        <label htmlFor="by711" className="row">
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
        <label htmlFor="byATM" className="row">
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
        <label htmlFor="byOnline" className="row">
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
        {paymentMethodValue === '3' ? (
          <div className="row">
            <div className="col-3 d-flex "></div>
            <div className="col-9 d-flex align-items-center">
              <CreditCard />
            </div>
          </div>
        ) : (
          <></>
        )}
      </CardSecondary>

      <div className="container p-0">
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">發票</h4>
        </div>
      </div>
      <CardSecondary>
        <label htmlFor="donate" className="row">
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
        <label htmlFor="duplicateUniform" className="row">
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
        <label htmlFor="triplicateUniform" className="row">
          <div className="col-3 d-flex justify-content-center">
            <Radio
              checked={invoiceValue === '3'}
              onChange={invoiceChange}
              value="3"
              color="primary"
              name="invoice"
              id="triplicateUniform"
              inputProps={{ 'aria-label': '3' }}
            />
          </div>
          <div className="col-9 d-flex align-items-center">三聯電子發票</div>
        </label>
        {invoiceValue === '3' ? (
          <label htmlFor="BusinessNumber" className="row">
            <div className="col-3 d-flex justify-content-center">
              <p>統一編號</p>
            </div>
            <div className="col-9 d-flex justify-content-start">
              <input type="text" id="BusinessNumber" className="form-control" />
            </div>
          </label>
        ) : null}
      </CardSecondary>

      <div className="container p-0">
        <button
          className="btn btn-success mt-5 mr-3"
          onClick={(e) => {
            e.preventDefault()
            history.push('/shipment')
          }}
        >
          上一步
        </button>
        <button
          className="btn btn-success mt-5"
          onClick={(e) => {
            e.preventDefault()
            paymentInfoStorage(
              document.getElementById('coupon').value.split('-')[0],
              document.getElementById('coupon').value.split('-')[1],
              document.getElementById('rewardPoint').value,
              paymentMethodValue,
              invoiceValue
            )
            history.push('/purchaseCheck')
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
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
    Coupons: state.CouponReducer.coupons,
  }
}

export default connect(mapStateToProps, { paymentInfoStorage, getCoupon })(
  Payment
)
