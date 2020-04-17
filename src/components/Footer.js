import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="footer navbar-fixed-bottom bg-dark">
        <br />
        <div className="row container-fluid footer_bg">
          <div className="row col-3">
            <div className="col footer_subtitle">聯絡我們</div>
            <div className="col">
              +44 345 678 903
              <br />
              adobexd@mail.com
              <br />
              客服專區
            </div>
          </div>
          <div className="row col-3">
            <div className="col footer_subtitle">服務項目</div>
            <div className="col">
              常見問題
              <br />
              付款流程
              <br />
              寄送方法
              <br />
              退換貨
              <br />
              購物車
            </div>
          </div>
          <div className="row col-3">
            <div className="col footer_subtitle">更多資訊</div>
            <div className="col">
              關於我們
              <br />
              線上徵才
              <br />
              服務條款
            </div>
          </div>
          <div className="row col-3 footer_icon">
            <div className="col footer_subtitle"></div>
            <div className="col">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <br />
              <br />© Kilimanjaro 2020
            </div>
          </div>
          {/* <p className="text-muted">版權所有</p> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
