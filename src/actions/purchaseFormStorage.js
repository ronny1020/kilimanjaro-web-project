import { STORE_SHIPMENT_FORM } from './actionTypes'

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
