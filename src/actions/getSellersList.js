import { GET_SELLERS_LIST } from './actionTypes'

export const getProductList = (page, cid) => {
  return async (dispatch) => {
    const url =
      'http://localhost:6001/Sellers_introListApi/' + cid + '/20/' + page
    const response = await fetch(url)
    const list = await response.json()
    dispatch({
      type: GET_SELLERS_LIST,
      payload: list,
    })
  }
}
