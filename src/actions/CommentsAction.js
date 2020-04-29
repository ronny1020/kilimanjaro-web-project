export const AddComment = (pid, cid, rate = null, comment = null) => {
  return async () => {
    if (cid == null) {
      localStorage.setItem('siteBeforeLogin', window.location.pathname)
      window.location.replace('http://localhost:3000/login/entrance')
    }
    const postToComments = {
      productID: pid,
      customerID: cid,
      rate: rate,
      comment: comment,
    }
    const request = new Request('http://localhost:6001/CommentsApi/', {
      method: 'POST',
      body: JSON.stringify(postToComments),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    await fetch(request).catch(console.error())
  }
}

export const UpdateComment = (pid, cid, rate = null, comment = null) => {
  return async () => {
    const putToComments = {
      productID: pid,
      customerID: cid,
      rate: rate,
      comment: comment,
    }
    const request = new Request('http://localhost:6001/CommentsApi/', {
      method: 'PUT',
      body: JSON.stringify(putToComments),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    await fetch(request).catch(console.error())
  }
}

export const RemoveComment = (pid, cid) => {
  return async () => {
    const DeleteFromComments = {
      productID: pid,
      customerID: cid,
    }
    const request = new Request('http://localhost:6001/CommentsApi/', {
      method: 'DELETE',
      body: JSON.stringify(DeleteFromComments),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    await fetch(request).catch(console.error())
  }
}
