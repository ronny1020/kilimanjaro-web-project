import { STORE_SHIPMENT_FORM, STORE_PAYMENT_FORM } from '../actions/actionTypes'

const initialState = {
  info: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case STORE_SHIPMENT_FORM:
      return {
        ...state,
        info: { ...state.info, ...action.payload },
      }
    case STORE_PAYMENT_FORM:
      return {
        ...state,
        info: { ...state.info, ...action.payload },
      }
    default:
      return state
  }
}
