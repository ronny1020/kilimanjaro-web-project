import { GET_POPULAR_PRODUCTS } from './actionTypes'

export const getPopularProducts = (cid) => {
  return async (dispatch) => {
    const url = `http://localhost:6001/ProductListApi/${cid}/10/1?column=ProductName&orderBy=visitedTimes DESC&`
    const response = await fetch(url)
    const list = await response.json()
    dispatch({
      type: GET_POPULAR_PRODUCTS,
      payload: list,
    })
  }
}
