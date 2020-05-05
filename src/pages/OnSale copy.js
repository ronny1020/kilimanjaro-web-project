import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import LobbyTitle from '../components/member/LobbyTitle'
import ProductListItem from '../components/ProductList/productListItem'

import disc1 from '../img/disc/disc1.jpg'
import '../styles/my.scss'

function OnSale() {
  // const [Coupon, setCoupon] = useState('')
  const [couponID, setcouponID] = useState('')
  const [couponMapId, setcouponMapId] = useState('')
  const [customerID, setcustomerID] = useState('')
  const [valid, setvalid] = useState('')
  // const [customerID, setcustomerID] = useState('')

  // async function updateCartToLocalStorage(value) {
  //   // 開啟載入指示
  //   // const currentCart = JSON.parse(localStorage.getItem('cart')) || []
  //   // console.log('currentCart', currentCart)
  //   // 設定資料
  // }

  // async function addToServer(value) {
  //   const request = new Request('http://localhost:6001/OnSale', {
  //     method: 'POST',
  //     body: JSON.stringify(value),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   console.log(JSON.stringify(value))

  //   const response = await fetch(request)
  //   const data = await response.json()

  //   console.log('伺服器回傳的json資料', data)
  // }

  // useEffect(() => {
  //   getData()
  // }, [Coupon])

  // console.log(Coupon)

  useEffect(() => {
    let newMember = {
      couponID: couponID,
      couponMapId: couponMapId,
      customerID: customerID,
      valid: valid,
    }
    console.log(JSON.stringify(newMember))
    fetch('http://localhost:6001/OnSale', {
      method: 'POST', // want to use PATCH
      body: JSON.stringify(newMember),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
    console.log(newMember)
  }, [couponID, couponMapId, customerID, valid])

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
              <div className="col-8">
                <div className="row">
                  {/* <div className="col-12 " align="center">
                    <div className="container bg-white pt-3 m-6 ">
                      <Link to="/product/123">一月&nbsp;&nbsp;&nbsp;</Link>

                      <Link to="/product/123">二月&nbsp;&nbsp;&nbsp;</Link>

                      <Link to="/product/123">三月&nbsp;&nbsp;&nbsp;</Link>

                      <Link to="/product/123">四月&nbsp;&nbsp;&nbsp;</Link>

                      <Link to="/product/123">五月&nbsp;&nbsp;&nbsp;</Link>

                      <Link to="/product/123">六月&nbsp;&nbsp;&nbsp;</Link>

                      <Link to="/product/123">七月&nbsp;&nbsp;&nbsp;</Link>

                      <Link to="/product/123">八月&nbsp;&nbsp;&nbsp;</Link>

                      <Link to="/product/123">九月&nbsp;&nbsp;&nbsp;</Link>

                      <Link to="/product/123">十月&nbsp;&nbsp;&nbsp;</Link>

                      <Link to="/product/123">十一月&nbsp;&nbsp;&nbsp;</Link>

                      <Link to="/product/123">十二月&nbsp;&nbsp;&nbsp;</Link>
                    </div>
                  </div> */}
                </div>
                <div className="row mt-3 ">
                  <div className="col-6 ">
                    <ProductListItem>
                      <img
                        className="d-block h-40 w-100 "
                        src={disc1}
                        alt="slide 004"
                      />
                    </ProductListItem>

                    <div className="row mt-3">
                      <div className="col-12" align="center">
                        <button
                          type="button"
                          className="btn btn-danger text-white"
                          onClick={() => {
                            setcouponID(1)
                            setcouponMapId(1)
                            setcustomerID('C009')
                            setvalid(1)
                          }}
                        >
                          我要領取
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <ProductListItem>
                      <img
                        className="d-block h-40 w-100 "
                        src={disc1}
                        alt="slide 004"
                      />
                    </ProductListItem>
                    <div className="row mt-3">
                      <div className="col-12" align="center">
                        <button
                          type="button"
                          className="btn btn-danger text-white"
                        >
                          我要領取
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-4" align="center">
                <nav className="navbar sidebar">
                  <ul className="navbar-nav">
                    <li>
                      <div className=" bg-primary banner">
                        <p className="text-secondary">請選擇賣家</p>
                      </div>
                    </li>
                  </ul>
                </nav>

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
                </li>
                <li>
                  <Link to="/product/123">小農咖啡園1</Link>
                </li>
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
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default OnSale
