import React, { useState } from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
import Sidebar from '../../../components/Sidebar'
import Breadcrumb from '../../../components/Breadcrumb'
import HistoryList from '../../../components/member/HistoryList'

import LoginValidate from '../../../components/LoginValidate'
import { Redirect } from 'react-router-dom'
function History() {
  //獲取訂單資訊
  const [genList, setGenList] = useState(false)
  const [orderDetails, setOrderDetails] = useState({})
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

  if (genList === false) {
    fetch('http://localhost:6001/OrdersApi/' + memberID)
      .then((response) => response.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        setOrderDetails(response)
        setGenList(true)
        // console.log('Success:', response)
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
  return (
    <>
      <LobbyTitle string={'交易紀錄'} />
      <div className="container bg-secondary">
        <div className="row">
          <div className="col-3">
            <Sidebar input={inputArray} />
          </div>
          <div className="col-9">
            <Breadcrumb />
            {genList ? <HistoryList input={orderDetails} /> : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default History
