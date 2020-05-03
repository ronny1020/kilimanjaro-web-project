import { GET_COUPON } from '../actions/actionTypes'

const initialState = {
  coupons: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COUPON:
      return {
        ...state,
        coupons: action.payload,
      }
    default:
      return state
  }
}
