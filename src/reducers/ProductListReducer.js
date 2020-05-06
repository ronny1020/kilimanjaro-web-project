import { GET_PRODUCT_LIST, SET_QUERY } from '../actions/actionTypes'

const initialState = {
  items: [],
  query: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        items: action.payload,
      }
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      }
    default:
      return state
  }
}
