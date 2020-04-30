import { STORE_SHIPMENT_FORM } from '../actions/actionTypes'

const initialState = {
  info: {},
}

export default function (state = initialState, action) {
  console.log(action)
  console.log('action.payload')
  switch (action.type) {
    case STORE_SHIPMENT_FORM:
      return {
        ...state,
        info: action.payload,
      }
    default:
      return state
  }
}
