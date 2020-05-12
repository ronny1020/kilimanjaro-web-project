import { GET_POPULAR_PRODUCTS } from '../actions/actionTypes'

const initialState = {
  items: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POPULAR_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      }

    default:
      return state
  }
}
