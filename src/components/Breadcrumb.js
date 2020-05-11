import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Breadcrumb(props) {
  // console.log(props)
  //自動解析網址: 依網址字串創造breadcrumb
  const pathname = props.location.pathname

  let path = ''
  let breadcrumb_content = []
  let pathname_Array = pathname.split('/')
  // pathname_Array.shift()

  // console.log(pathname_Array)
  // i=1: 忽略陣列第一格(首頁)
  for (let i = 1; i < pathname_Array.length; i++) {
    switch (pathname_Array[i]) {
      // add your route here!
      case 'login':
        path = '登入'
        break
      case 'entrance':
        path = '登入入口'
        break
      case 'enroll':
        path = '會員註冊'
        break
      case 'forget_pwd':
        path = '忘記密碼'
        break
      case 'lobby':
        path = '會員中心'
        break
      case 'history':
        path = '交易紀錄'
        break
      case 'edit':
        path = '資料修改'
        break
      case 'coupon':
        path = '折扣券'
        break
      case 'favorite':
        path = '喜好清單'
        break
      case 'about':
        path = '關於我們'
        break
      case 'sellers':
        path = '店家介紹'
        break
      case 'onSale':
        path = '優惠專區'
        break
      //都不符合時回傳空值
      default:
        path = ''
        break
    }
    var url = ''
    for (let m = 1; m <= i; m++) {
      url += '/' + pathname_Array[m]
    }
    // console.log(url)

    var appendToContent = (
      <>
        <li className="breadcrumb-item active" aria-current="page">
          <Link to={url}>{path}</Link>
        </li>
      </>
    )

    breadcrumb_content.push(appendToContent)
  }

  return (
    <>
      <br />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="">首頁</Link>
          </li>
          {breadcrumb_content}
        </ol>
      </nav>
    </>
  )
}

// 高階元件的樣式
export default withRouter(Breadcrumb)
