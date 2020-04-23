import { GET_CART } from './actionTypes'

export const getCart = (id) => {
  return async (dispatch) => {
    const url = 'http://localhost:6001/CartApi/' + id
    const response = await fetch(url)
    const list = await response.json()
    dispatch({
      type: GET_CART,
      payload: list,
    })
  }
}
