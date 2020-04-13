import React from 'react'
import Banner from '../components/Banner'
import { withRouter } from 'react-router-dom'

function NotFoundPage(props) {
  return (
    <>
      <Banner pageName="404 頁面不存在" />
      <p className="container">很抱歉，找不到您的網頁</p>
      <button
        onClick={() => {
          props.history.push('/')
        }}
      >
        回到首頁
      </button>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        返回上一頁
      </button>
    </>
  )
}

export default withRouter(NotFoundPage)
