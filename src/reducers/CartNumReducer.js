import { GET_CART_NUM } from '../actions/actionTypes'

const initialState = {
  cartNum: 0,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART_NUM:
      return {
        ...state,
        cartNum: action.payload,
      }
    default:
      return state
  }
}
