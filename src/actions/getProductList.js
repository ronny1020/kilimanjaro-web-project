import { GET_PRODUCT_LIST, SET_QUERY } from './actionTypes'

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
