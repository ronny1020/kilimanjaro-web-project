import { GET_PRODUCT_LIST } from './actionTypes'

export const getProductList = (page) => {
  return async (dispatch) => {
    const url = 'http://localhost:6001/ProductListApi/20/' + page
    const response = await fetch(url)
    const list = await response.json()
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: list,
    })
  }
}
