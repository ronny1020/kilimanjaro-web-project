import { GET_COUPON } from './actionTypes'

export const getCoupon = (cid) => {
  return async (dispatch) => {
    const url = 'http://localhost:6001/api/coupon/' + cid
    const response = await fetch(url)
    const coupons = await response.json()
    dispatch({
      type: GET_COUPON,
      payload: coupons,
    })
  }
}
