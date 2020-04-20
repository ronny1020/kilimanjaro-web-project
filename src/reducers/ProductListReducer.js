import { GET_PRODUCT_LIST } from '../actions/actionTypes'

const initialState = {
  items: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return state
  }
}
