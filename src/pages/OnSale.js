import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'

import LobbyTitle from '../components/member/LobbyTitle'
import CouponItem from '../components/CouponItem'

import '../styles/my.scss'

function OnSale() {
  //獲取所有coupon券基本資訊
  const [genList, setGenList] = useState(false)
  const [coupons, setCoupons] = useState({})

  if (genList === false) {
    const url_get = 'http://localhost:6001/api/coupon/'
    fetch(url_get)
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        setCoupons(response)
        setGenList(true)
        // console.log('Success:', response)
      })
  }

  return (
    <>
      <div className="all-page-title page-breadcrumb">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 " align="center">
              {/* <h1>賣家介紹</h1> */}
              <p className="text-white">~享受高貴的品質，無須享受高昂的價格~</p>
            </div>
          </div>
          <LobbyTitle string={'優惠專區'} />
          <div className="container bg-secondary">
            <br />
            <div className="row">
              <div className="col-4 qweqwe" align="center">
                {/* <nav className="navbar sidebar">
                  <ul className="navbar-nav">
                    <li>
                      <div className=" bg-primary banner">
                        <p className="text-secondary">請選擇賣家</p>
                      </div>
                    </li>
                  </ul>
                </nav> */}

                {/* <li>
                  <Link to="/product/123">小農咖啡園1</Link>
                </li>

                <li>
                  <Link to="/product/123">小農咖啡園1</Link>
                </li>
                <li>
                  <Link to="/product/123">小農咖啡園1</Link>
                </li>
                <li>
                  <Link to="/product/123">小農咖啡園1</Link>
                </li>
                <li>
                  <Link to="/product/123">小農咖啡園1</Link>
                </li> */}
                <img src="../../images/ad1.png" alt="ad1" width="80%"></img>
                <br />
                <img src="../../images/ad2.png" alt="ad2" width="80%"></img>
                <br />
                <img src="../../images/ad1.png" alt="ad1" width="80%"></img>
                <br />
                <img src="../../images/ad2.png" alt="ad2" width="80%"></img>
                <br />
                <img src="../../images/ad1.png" alt="ad1" width="80%"></img>
              </div>
              <div className="col-8 asdasd">
                {/* 傳值進入此: 於component內操作api (亦可以用迴圈產生)*/}
                {/* 確定值有進去才產生component*/}
                {genList ? (
                  <>
                    <div class="work-box">
                      <div class="work-img">
                        <Row>
                          <CouponItem input={coupons[0]} />
                          <CouponItem input={coupons[1]} />
                        </Row>
                        <p className="text-white">123</p>
                      </div>
                    </div>
                    <div class="work-box">
                      <div class="work-img">
                        <Row>
                          <CouponItem input={coupons[2]} />
                          <CouponItem input={coupons[3]} />
                        </Row>
                        <p className="text-white">123</p>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default OnSale
