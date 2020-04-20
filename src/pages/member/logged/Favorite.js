import React from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
import Sidebar from '../../../components/Sidebar'
import Breadcrumb from '../../../components/Breadcrumb'

function Favorite() {
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorite
