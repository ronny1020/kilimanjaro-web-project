import React, { useState } from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
import Sidebar from '../../../components/Sidebar'
import Breadcrumb from '../../../components/Breadcrumb'
import { Redirect } from 'react-router-dom'

import FavList from '../../../components/member/FavList'

import { Button } from 'react-bootstrap'

import LoginValidate from '../../../components/LoginValidate'

function Favorite() {
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorite
