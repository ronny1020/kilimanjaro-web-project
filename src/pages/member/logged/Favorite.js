import React, { useState } from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
import Sidebar from '../../../components/Sidebar'
import Breadcrumb from '../../../components/Breadcrumb'
import { Redirect } from 'react-router-dom'

import FavList from '../../../components/member/FavList'
import Notice from '../../../components/Notice'

import { Button } from 'react-bootstrap'
import swal from 'sweetalert'

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
        // console.log(favlist)
        setfavlistInput(favlist)
        setGenList(true)
        // console.log(favlistInput)
      })
  }

  //刪除全部favorite
  function DelAll() {
    swal({
      title: '您確定嗎？',
      text: '您即將刪除列表中的所有項目！',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        var url_del = 'http://localhost:6001/api/favourite/' + memberID
        fetch(url_del, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            swal({
              title: '提示訊息',
              text: '您已經成功刪除！',
              icon: 'success',
            }).then(() => window.location.reload())
          })
      }
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
            {favlistInput.length !== 0 ? (
              <Button
                variant="primary"
                onClick={DelAll}
                style={{ marginBottom: '15px' }}
              >
                全部刪除
              </Button>
            ) : (
              <Notice message={'沒有可顯示的喜好清單。'} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorite
