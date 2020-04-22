import { GET_PRODUCT_DETAIL } from './actionTypes'

export const getProduct = (id) => {
  return async function getProductFetch(dispatch) {
    const url = 'http://localhost:6001/ProductApi/' + id
    const response = await fetch(url)
    const item = await response.json()
    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: item,
    })
  }
}
