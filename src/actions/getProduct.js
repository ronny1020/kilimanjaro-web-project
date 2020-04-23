import { GET_PRODUCT_DETAIL } from './actionTypes'

export const getProduct = (id) => {
  return async (dispatch) => {
    const url = 'http://localhost:6001/ProductApi/' + id
    const response = await fetch(url)
    const item = await response.json()
    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: item,
    })
  }
}

export const recordVisit = (ProductId, MemberId) => {
  return async () => {
    const record = { productId: ProductId, memberId: MemberId }
    console.log(record)
    const request = new Request('http://localhost:6001/RecordVisitApi/', {
      method: 'POST',
      body: JSON.stringify(record),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request).catch(console.error())
    console.log(response)
  }
}
