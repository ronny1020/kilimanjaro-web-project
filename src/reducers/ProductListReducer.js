import {
  GET_PRODUCT_LIST,
  SET_QUERY,
  SET_KEYWORD,
  SET_COLUMN,
  SET_CATEGORY,
  SET_FROMOTHERPAGES,
} from '../actions/actionTypes'

const initialState = {
  items: [],
  query: '',
  keyword: '',
  column: 'ProductName',
  category: 0,
  fromOtherPages: false,
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
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      }
    case SET_COLUMN:
      return {
        ...state,
        column: action.payload,
      }
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case SET_FROMOTHERPAGES:
      return {
        ...state,
        fromOtherPages: action.payload,
      }
    default:
      return state
  }
}
