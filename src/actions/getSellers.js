import { GET_SELLERS_DETAIL } from './actionTypes'

export const getSellers = (id, cid) => {
  return async (dispatch) => {
    const url = 'http://localhost:6001/Sellers_introApi/' + id + '/' + cid
    const response = await fetch(url)
    const item = await response.json()
    dispatch({
      type: GET_SELLERS_DETAIL,
      payload: item,
    })
  }
}
