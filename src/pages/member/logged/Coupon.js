import React, { useState } from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
// import Sidebar from '../../../components/Sidebar'
import Breadcrumb from '../../../components/Breadcrumb'

import CoupList from '../../../components/member/CoupList'
import Notice from '../../../components/Notice'

import LoginValidate from '../../../components/LoginValidate'
import { Redirect } from 'react-router-dom'
import { FaUserEdit, FaTicketAlt, FaHistory, FaHeart } from 'react-icons/fa'
import NewSidebar from '../../../components/NewSidebar'

function Coupon() {
  const [genList, setGenList] = useState(false)
  const [couplistInput, setcouplistInput] = useState({})

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
  // console.log(memberID)
  //讀取頁面時載入CoupList
  if (genList === false) {
    fetch('http://localhost:6001/api/coupon/' + memberID)
      .then((res) => {
        return res.json()
      })
      .then((couplist) => {
        // console.log(couplist)
        setcouplistInput(couplist)
        setGenList(true)
      })
  }

  const inputArray = [
    { text: '資料修改', link: '/lobby/edit', icon: <FaUserEdit /> },
    {
      text: '折扣票券',
      link: '/lobby/coupon',
      icon: <FaTicketAlt />,
      focus: true,
    },
    { text: '交易紀錄', link: '/lobby/history', icon: <FaHistory /> },
    { text: '喜好清單', link: '/lobby/favorite', icon: <FaHeart /> },
  ]

  return (
    <>
      <LobbyTitle string={'折扣券'} />
      <div className="container bg-secondary" style={{ overflow: 'auto' }}>
        <div className="row" style={{ minHeight: '100vh' }}>
          <div className="col-3 lobbyR">
            <NewSidebar title={'會員中心'} input={inputArray} />
            {/* <Sidebar input={inputArray} /> */}
          </div>
          <div className="col-9 lobbyL">
            <Breadcrumb />
            {genList === true ? (
              <CoupList input={couplistInput} id={memberID} />
            ) : null}
            {couplistInput.length !== 0 ? null : (
              <Notice message={'沒有可顯示的折價券。'} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Coupon
