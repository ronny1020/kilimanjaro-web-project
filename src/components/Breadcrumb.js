import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Breadcrumb(props) {
  console.log(props)
  //自動解析網址: 依網址字串創造breadcrumb

  const breadcrumb_content = []

  let path = ''
  const pathname = props.location.pathname

  let pathname_Array = []
  pathname_Array = pathname.split('/')
  pathname_Array.shift()

  // console.log(pathname_Array)
  for (let i = 0; i < pathname_Array.length; i++) {
    switch (pathname_Array[i]) {
      // add your route here!
      case 'lobby':
        path = '會員中心'
        break
      case 'history':
        path = '交易紀錄'
        break
      case 'edit':
        path = '個人資料修改'
        break
      case 'coupon':
        path = '折扣券'
        break
      case 'favorite':
        path = '喜好清單'
        break
      default:
        path = ''
    }
    var url = ''
    for (let m = 0; m <= i; m++) {
      url += '/' + pathname_Array[m]
    }

    var appendToContent = (
      <li className="breadcrumb-item active" aria-current="page">
        <Link to={url}>{path}</Link>
      </li>
    )
    breadcrumb_content.push(appendToContent)
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          {breadcrumb_content}
        </ol>
      </nav>
    </>
  )
}

// 高階元件的樣式
export default withRouter(Breadcrumb)
