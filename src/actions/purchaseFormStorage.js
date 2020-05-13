import { STORE_SHIPMENT_FORM, STORE_PAYMENT_FORM } from './actionTypes'

export const shipmentInfoStorage = (
  RecipientNameValue,
  RecipientMobileValue,
  RecipientAddressValue,
  shippingMethodValue,
  FreightValue = 0
) => {
  return {
    type: STORE_SHIPMENT_FORM,
    payload: {
      RecipientName: RecipientNameValue,
      RecipientMobile: RecipientMobileValue,
      RecipientAddress: RecipientAddressValue,
      shippingMethod: shippingMethodValue,
      Freight: FreightValue,
    },
  }
}

export const paymentInfoStorage = (
  couponValue = null,
  couponPrice = 0,
  rewardPointValue = 0,
  paymentMethodValue,
  invoiceValue
) => {
  return {
    type: STORE_PAYMENT_FORM,
    payload: {
      coupon: couponValue,
      couponPrice: couponPrice,
      rewardsPoints: rewardPointValue,
      paymentMethod: paymentMethodValue,
      InvoiceMethod: invoiceValue,
    },
  }
}

export const createOrder = (CustomerID, ShipmentInfo) => {
  return async () => {
    console.log(ShipmentInfo)
    const order = {
      CustomerID: CustomerID,
      ...ShipmentInfo,
    }
    const request = new Request('http://localhost:6001/OrdersApi/', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    await fetch(request).catch(console.error())
  }
}
