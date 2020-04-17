import React from 'react'
import Sidebar from '../../../components/Sidebar'

function Member() {
  const inputArray = {
    title: '會員中心',
    個人資料修改: {
      link: '/test1',
    },
    訂閱資訊管理: {
      link: '/test2',
    },
    折扣券: {
      link: '/test3',
    },
    交易紀錄: {
      link: '/test4',
    },
    喜好清單: {
      link: '/test5',
    },
    訂單相關: {
      link: '/test6',
    },
  }
  return (
    <>
      <div className="container bg-secondary">
        <h1>會員中心</h1>
        <Sidebar input={inputArray} />
      </div>
    </>
  )
}

export default Member
