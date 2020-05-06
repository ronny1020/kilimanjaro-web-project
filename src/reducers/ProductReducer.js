import { GET_PRODUCT_DETAIL, SET_QUERY } from '../actions/actionTypes'

const initialState = {
  item: [],
  query: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        item: action.payload,
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
