import { GET_MEMBER_INFO } from './actionTypes'

export const getMemberInfo = (cid) => {
  return async (dispatch) => {
    const url = 'http://localhost:6001/Member/' + cid
    const response = await fetch(url)
    const info = await response.json()
    dispatch({
      type: GET_MEMBER_INFO,
      payload: info,
    })
  }
}
