import React, { useState } from 'react'
import LobbyTitle from '../../../components/member/LobbyTitle'
// import Sidebar from '../../../components/Sidebar'
import { FaUserEdit, FaTicketAlt, FaHistory, FaHeart } from 'react-icons/fa'
import NewSidebar from '../../../components/NewSidebar'
import Breadcrumb from '../../../components/Breadcrumb'
import HistoryList from '../../../components/member/HistoryList'
import HistoryCList from '../../../components/member/HistoryCList'
import HistorySList from '../../../components/member/HistorySList'

// import Notice from '../../../components/Notice'

import LoginValidate from '../../../components/LoginValidate'
import { Redirect } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
function History() {
  //決定切換表單
  const [DisplayList, setDisplayList] = useState('not_send')
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

  const inputArray = [
    { text: '資料修改', link: '/lobby/edit', icon: <FaUserEdit /> },
    { text: '折扣票券', link: '/lobby/coupon', icon: <FaTicketAlt /> },
    {
      text: '交易紀錄',
      link: '/lobby/history',
      icon: <FaHistory />,
      focus: true,
    },
    { text: '喜好清單', link: '/lobby/favorite', icon: <FaHeart /> },
  ]

  function handleNav(props) {
    console.log(props.target.id)
    setDisplayList(props.target.id)
  }

  return (
    <>
      <LobbyTitle string={'交易紀錄'} />
      <div className="container bg-secondary" style={{ overflow: 'auto' }}>
        <div className="row" style={{ minHeight: '100vh' }}>
          <div className="col-3 lobbyR">
            <NewSidebar title={'會員中心'} input={inputArray} />
          </div>
          <div className="col-9 lobbyL">
            <Breadcrumb />

            {/* 已寄送: 有ShippedDate
            未寄送: 沒有ShippedDate
            已取消: Valid為0 */}
            <Nav variant="tabs" defaultActiveKey="not_send">
              <Nav.Item>
                <Nav.Link
                  eventKey="not_send"
                  id={'not_send'}
                  onClick={handleNav}
                >
                  未寄送
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="send" id={'send'} onClick={handleNav}>
                  已寄送
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="cancelled"
                  id={'cancelled'}
                  onClick={handleNav}
                >
                  已取消
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {genList && DisplayList === 'not_send' ? (
              <HistoryList input={orderDetails} />
            ) : null}
            {genList && DisplayList === 'send' ? (
              <HistorySList input={orderDetails} />
            ) : null}
            {genList && DisplayList === 'cancelled' ? (
              <HistoryCList input={orderDetails} />
            ) : null}
            {/* {Array.isArray(orderDetails.Orders) &&
            orderDetails.Orders.length ? null : (
              <Notice message={'沒有可顯示的交易紀錄。'} />
            )} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default History
