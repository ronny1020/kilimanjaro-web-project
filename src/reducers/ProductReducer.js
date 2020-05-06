import { GET_PRODUCT_DETAIL } from '../actions/actionTypes'

const initialState = {
  item: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        item: action.payload,
      }

    default:
      return state
  }
}
