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
  couponValue,
  rewordPointValue,
  paymentMethodValue,
  invoiceValue
) => {
  return {
    type: STORE_PAYMENT_FORM,
    payload: {
      coupon: couponValue,
      rewordPoint: rewordPointValue,
      paymentMethod: paymentMethodValue,
      invoice: invoiceValue,
    },
  }
}
