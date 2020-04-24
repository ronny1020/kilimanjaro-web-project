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

export const AddProductToCart = (pid, cid, number = 1) => {
  return async () => {
    if (cid == null) {
      window.location.replace('http://localhost:3000/login/entrance')
    }
    const PostToCart = { productID: pid, customerID: cid, num: number }
    const request = new Request('http://localhost:6001/CartApi/', {
      method: 'POST',
      body: JSON.stringify(PostToCart),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    await fetch(request).catch(console.error())
  }
}

export const updateProductNumToCart = (pid, cid, number = 1) => {
  return async () => {
    if (cid == null) {
      window.location.replace('http://localhost:3000/login/entrance')
    }
    const PostToCart = { productID: pid, customerID: cid, num: number }
    const request = new Request('http://localhost:6001/CartApi/', {
      method: 'put',
      body: JSON.stringify(PostToCart),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    await fetch(request).catch(console.error())
  }
}

export const removeProductFromCart = (pid, cid) => {
  return async () => {
    const deleteFromCart = { productID: pid, customerID: cid }
    const request = new Request('http://localhost:6001/CartApi/', {
      method: 'DELETE',
      body: JSON.stringify(deleteFromCart),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    await fetch(request).catch(console.error())
  }
}
