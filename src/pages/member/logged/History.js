import React from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
import Sidebar from '../../../components/Sidebar'
function History() {
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
      <Sidebar input={inputArray} />
    </>
  )
}

export default History
