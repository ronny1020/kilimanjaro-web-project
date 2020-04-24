import React, { useState } from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
import Sidebar from '../../../components/Sidebar'
import Breadcrumb from '../../../components/Breadcrumb'
import { Redirect } from 'react-router-dom'

import FavList from '../../../components/member/FavList'

import { Button, Form } from 'react-bootstrap'

import LoginValidate from '../../../components/LoginValidate'

function Favorite() {
  const [favproductID, setFavProductID] = useState('')
  const [genList, setGenList] = useState(false)
  const [favlistInput, setfavlistInput] = useState({})

  if (LoginValidate() === false) {
    return (
      <>
        <Redirect to="/login" />
      </>
    )
  } else {
    var memberID = LoginValidate().userID
    // var valid = LoginValidate.isLogged
  }

  let isConfilcted = true

  function handleSubmit(event) {
    event.preventDefault()

    // console.log(memberID)

    const fav_data = {
      customerID: memberID,
      productID: favproductID,
    }
    console.log(fav_data)
    //資料庫結構問題? customerID productID皆非unique
    //寫入前須檢查productID否則會有重複問題
    //可能會連帶影響delete(刪除單筆-->多筆)
    // fetch('http://localhost:6001/api/favourite/' + memberID)
    //   .then(function (res) {
    //     return res.json()
    //   })
    //   .then(function (favList) {
    //     for (let i = 0; i < favList.length; i++) {
    //       // console.log(typeof favList[i].productID, favList[i].productID)
    //       // console.log(typeof parseInt(favproductID), parseInt(favproductID))
    //       if (favList[i].productID === parseInt(favproductID)) {
    //         // i = favList.length //中止迴圈
    //         return
    //       }
    //     }
    //     return (isConfilcted = false)
    //   })
    //   .then(function () {
    //     console.log(isConfilcted)
    //     if (isConfilcted === false) {
    //       fetch('http://localhost:6001/api/favourite/', {
    //         method: 'POST',
    //         body: JSON.stringify(fav_data),
    //         headers: new Headers({
    //           'Content-Type': 'application/json',
    //         }),
    //       })
    //         .then((res) => res.json())
    //         .catch((error) => console.error('Error:', error))
    //         .then((response) => {
    //           console.log('Success:', response)
    //           window.location.reload()
    //         })
    //     } else {
    //       alert('重複的產品!')
    //     }
    //   })
    //檢查&送出至此結束
  }

  //讀取頁面時載入FavList
  if (genList === false) {
    fetch('http://localhost:6001/api/favourite/' + memberID)
      .then((res) => {
        return res.json()
      })
      .then((favlist) => {
        setfavlistInput(favlist)
        setGenList(true)
        // console.log(favlistInput)
      })
  }

  //刪除全部favorite
  function DelAll() {
    alert('你真的要刪光?')
    var url_del = 'http://localhost:6001/api/favourite/' + memberID
    fetch(url_del, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        window.location.reload()
      })
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
  // const numbers = [1, 2, 3, 4, 5]
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
            {genList === true ? (
              <FavList input={favlistInput} id={memberID} />
            ) : null}
            <Button variant="primary" onClick={DelAll}>
              全部刪光
            </Button>
            {/* DEV-ONLY */}
            {/* <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicAccount">
                <Form.Label>productID(dev only)</Form.Label>
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
              
            </Form> */}
            {/* DEV-ONLY */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorite
