import { GET_PRODUCT_LIST } from './actionTypes'

export const getProductList = (payload) => {
  return async function getProductListFetch(dispatch) {
    const response = await fetch('http://localhost:6001/ProductListApi')
    const list = await response.json()
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: list,
    })
  }
}
