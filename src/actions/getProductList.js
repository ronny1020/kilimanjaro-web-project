import { GET_PRODUCT_LIST } from './actionTypes'

// export const getProductList = () => (dispatch) => {
//   fetch('http://localhost:6001/ProductListApi')
//     .then((res) => res.json())
//     .then((lists) => {
//       console.log(lists)
//       return dispatch({
//         type: GET_PRODUCT_LIST,
//         payload: lists,
//       })
//     })
// }

export const getProductList = (payload) => {
  return async function getTotalFromServer(dispatch) {
    const request = new Request('http://localhost:6001/ProductListApi', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const lists = await response.json()

    dispatch({
      type: GET_PRODUCT_LIST,
      payload: lists,
    })
  }
}
