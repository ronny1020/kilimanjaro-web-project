import { GET_PRODUCT_DETAIL } from './actionTypes'

export const getProduct = (id, cid) => {
  return async (dispatch) => {
    const url = 'http://localhost:6001/ProductApi/' + id + '/' + cid
    const response = await fetch(url)
    const item = await response.json()
    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: item,
    })
  }
}

export const recordVisit = (pid, cid) => {
  return async () => {
    const record = { productId: pid, memberId: cid }
    const request = new Request('http://localhost:6001/RecordVisitApi/', {
      method: 'POST',
      body: JSON.stringify(record),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    await fetch(request).catch(console.error())
  }
}
