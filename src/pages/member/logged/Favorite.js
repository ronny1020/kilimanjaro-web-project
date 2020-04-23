import React, { useState } from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
import Sidebar from '../../../components/Sidebar'
import Breadcrumb from '../../../components/Breadcrumb'

import { Button, Form } from 'react-bootstrap'
import jwt from 'jsonwebtoken'

function Favorite() {
  const [favproductID, setFavProductID] = useState('')
  let isConfilcted = true

  function handleSubmit(event) {
    event.preventDefault()
    const cID = jwt.verify(localStorage.getItem('token'), 'himitsu').user_id
    // console.log(cID)

    const fav_data = {
      customerID: cID,
      productID: favproductID,
    }
    console.log(fav_data)
    //資料庫結構問題? customerID productID皆非unique
    //寫入前須檢查productID否則會有重複問題
    //可能會連帶影響delete(刪除單筆-->多筆)
    fetch('http://localhost:6001/api/favourite/' + cID)
      .then(function (res) {
        return res.json()
      })
      .then(function (favList) {
        for (let i = 0; i < favList.length; i++) {
          // console.log(typeof favList[i].productID, favList[i].productID)
          // console.log(typeof parseInt(favproductID), parseInt(favproductID))
          if (favList[i].productID === parseInt(favproductID)) {
            // i = favList.length //中止迴圈
            return
          }
        }
        return (isConfilcted = false)
      })
      .then(function () {
        console.log(isConfilcted)
        if (isConfilcted === false) {
          fetch('http://localhost:6001/api/favourite/', {
            method: 'POST',
            body: JSON.stringify(fav_data),
            headers: new Headers({
              'Content-Type': 'application/json',
            }),
          })
            .then((res) => res.json())
            .catch((error) => console.error('Error:', error))
            .then((response) => {
              console.log('Success:', response)
              window.location.reload()
            })
        } else {
          alert('重複的產品!')
        }
      })
  }
  //檢查&送出至此結束

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
                  value={favproductID}
                  onChange={(e) => setFavProductID(e.target.value)}
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
