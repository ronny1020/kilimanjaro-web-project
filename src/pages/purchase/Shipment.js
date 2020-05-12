import React, { useEffect } from 'react'
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
    window.location.replace('./login/entrance')
  }

  let history = useHistory()
  const { shipmentInfoStorage, Member, Cart } = props

  Cart || window.location.replace('./Cart')
  Cart.length || window.location.replace('./Cart')

  let totalPrice = Cart
    ? Cart.reduce((a, product) => {
        let price =
          product.UnitPrice - product.discount >= 0
            ? product.UnitPrice - product.discount
            : 0
        return a + price * product.num
      }, 0)
    : 0

  const [shippingMethodValue, setShippingMethodValue] = React.useState('1')

  const [Freight, setFreight] = React.useState('0')

  const [nameWritten, setNameWritten] = React.useState(true)
  const [mobileWritten, setMobileWritten] = React.useState(true)
  const [addressWritten, setAddressWritten] = React.useState(true)

  const shippingMethodVChange = (event) => {
    localStorage.setItem('siteBeforeLogin', './cart')
    setShippingMethodValue(event.target.value)
  }

  useEffect(() => {
    if (shippingMethodValue === '1') {
      if (totalPrice < 350) {
        setFreight(20)
      } else {
        setFreight(0)
      }
    } else {
      if (totalPrice < 490) {
        setFreight(65)
      } else if (totalPrice < 1000) {
        setFreight(50)
      } else {
        setFreight(0)
      }
    }
  }, [shippingMethodValue, totalPrice])

  return (
    <>
      <div className="container p-0">
        <p>親愛的會員 {Member.cName} 您好：</p>
        <PurchaseStepper activeStep={2} />
        <div className=" bg-primary titleLabel mt-5">
          <h4 className="text-secondary">訂購人資料</h4>
        </div>
      </div>
      <CardSecondary>
        <label htmlFor="sameAsCustomer" className="row">
          <div className="col-md-3 d-flex align-items-center">同會員資料</div>
          <div className="col-md-9 d-flex align-items-center">
            <Checkbox
              color="primary"
              id="sameAsCustomer"
              onChange={(event) => {
                const nameInput = document.getElementById('RecipientName')
                const mobileInput = document.getElementById('RecipientMobile')
                const addressInput = document.getElementById('RecipientAddress')
                if (event.target.checked) {
                  nameInput.value = Member.cName
                  mobileInput.value = Member.cMobile
                  addressInput.value = Member.cAddress
                } else {
                  nameInput.value = ''
                  mobileInput.value = ''
                  addressInput.value = ''
                }
              }}
            />
          </div>
        </label>

        <label htmlFor="RecipientName" className="row  my-3">
          <div className="col-md-3 d-flex align-items-center">訂購人姓名：</div>
          <div className="col-md-9 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              name="RecipientName"
              id="RecipientName"
              required
            />
          </div>
        </label>
        {nameWritten ? (
          <></>
        ) : (
          <>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-9">
                <div className="text-danger">姓名欄為必填</div>
              </div>
            </div>
          </>
        )}
        <label htmlFor="RecipientMobile" className="row  my-3">
          <div className="col-md-3 d-flex align-items-center">訂購人電話：</div>
          <div className="col-md-9 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="RecipientMobile"
              required
            />
          </div>
        </label>
        {mobileWritten ? (
          <></>
        ) : (
          <>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-9">
                <div className="text-danger">電話欄為必填</div>
              </div>
            </div>
          </>
        )}
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
        {addressWritten ? (
          <></>
        ) : (
          <>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-9">
                <div className="text-danger">住址欄為必填</div>
              </div>
            </div>
          </>
        )}
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
              // inputProps={{ 'aria-label': '1' }}
              selected
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
              // inputProps={{ 'aria-label': '1' }}
            />
          </div>
          <div className="col-9 d-flex align-items-center">宅配到府</div>
        </label>
      </CardSecondary>
      <CardSecondary>
        <div className="row">
          <div className="col-3 d-flex justify-content-center">運費小計</div>
          <div className="col-9 d-flex align-items-center">{Freight} 元</div>
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

            let check = true

            if (!document.getElementById('RecipientName').value) {
              check = false
              setNameWritten(false)
            } else {
              setNameWritten(true)
            }
            if (!document.getElementById('RecipientMobile').value) {
              check = false
              setMobileWritten(false)
            } else {
              setMobileWritten(true)
            }
            if (!document.getElementById('RecipientAddress').value) {
              check = false
              setAddressWritten(false)
            } else {
              setAddressWritten(true)
            }

            if (check) {
              shipmentInfoStorage(
                document.getElementById('RecipientName').value,
                document.getElementById('RecipientMobile').value,
                document.getElementById('RecipientAddress').value,
                shippingMethodValue,
                Freight
              )
              history.push('/payment')
            }
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
  }
}

export default connect(mapStateToProps, { shipmentInfoStorage })(Shipment)
