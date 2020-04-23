import { GET_CART } from '../actions/actionTypes'

const initialState = {
  items: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return state
  }
}
