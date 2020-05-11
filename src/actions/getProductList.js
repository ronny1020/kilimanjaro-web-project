import {
  GET_PRODUCT_LIST,
  SET_QUERY,
  SET_KEYWORD,
  SET_COLUMN,
  SET_CATEGORY,
} from './actionTypes'

export const getProductList = (page, cid, query = '') => {
  return async (dispatch) => {
    const url =
      'http://localhost:6001/ProductListApi/' +
      cid +
      '/20/' +
      page +
      '?' +
      query
    const response = await fetch(url)
    const list = await response.json()
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: list,
    })
  }
}

export const setQuery = (query) => {
  return {
    type: SET_QUERY,
    payload: query,
  }
}

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    payload: keyword,
  }
}

export const setColumn = (column) => {
  return {
    type: SET_COLUMN,
    payload: column,
  }
}

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  }
}
