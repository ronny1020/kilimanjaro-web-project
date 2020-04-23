import React, { useState } from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
import Sidebar from '../../../components/Sidebar'
import Breadcrumb from '../../../components/Breadcrumb'

import { Button, Form } from 'react-bootstrap'
import jwt from 'jsonwebtoken'

function Favorite() {
  const [productID, setProductID] = useState('')
  function handleSubmit(event) {
    event.preventDefault()
    const cID = jwt.verify(localStorage.getItem('token'), 'himitsu').user_id
    // console.log(cID)

    const fav_data = {
      customerID: cID,
      productID: productID,
    }
    console.log(fav_data)
    fetch('http://localhost:6001/api/favourite/', {
      method: 'POST', // want to use PATCH
      body: JSON.stringify(fav_data),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => console.log('Success:', response))
  }

  const inputArray = {
    title: '會員中心',
    個人資料修改: {
      link: '/lobby/edit',
    },

    折扣券: {
      link: '/lobby/coupon',
    },
    交易紀錄: {
      link: '/lobby/history',
    },
    喜好清單: {
      link: '/lobby/favorite',
    },
  }
  return (
    <>
      <LobbyTitle string={'喜好清單'} />
      <div className="container bg-secondary">
        <div className="row">
          <div className="col-3">
            <Sidebar input={inputArray} />
          </div>
          <div className="col-9">
            <Breadcrumb />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicAccount">
                <Form.Label>productID</Form.Label>
                <Form.Control
                  type="text"
                  value={productID}
                  onChange={(e) => setProductID(e.target.value)}
                  placeholder="productID"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                送出資料
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorite
