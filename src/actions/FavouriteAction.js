export const AddProductToFavourite = (pid, cid) => {
  return async () => {
    if (cid == null) {
      localStorage.setItem('siteBeforeLogin', window.location.pathname)
      window.location.replace('http://localhost:3000/login/entrance')
    }
    const PostToFavourite = { productID: pid, customerID: cid }
    const request = new Request('http://localhost:6001/api/favourite/', {
      method: 'POST',
      body: JSON.stringify(PostToFavourite),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    await fetch(request).catch(console.error())
  }
}

export const removeProductFromFavourite = (pid, cid) => {
  return async () => {
    const request = new Request(
      'http://localhost:6001/api/favourite/' + cid + '/' + pid,
      {
        method: 'DELETE',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
    await fetch(request).catch(console.error())
  }
}
