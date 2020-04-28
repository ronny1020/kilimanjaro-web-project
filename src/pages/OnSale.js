import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import LobbyTitle from '../components/member/LobbyTitle'
import ProductListItem from '../components/ProductList/productListItem'

import disc1 from '../img/disc/disc1.jpg'

function OnSale() {
  const [Coupon, setCoupon] = useState('')
  const [Coupon2, setCoupon2] = useState('')

  function getData() {
    fetch('http://localhost:6001/OnSale')
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        setCoupon(myJson.MemberList)
      })
    // const [Mycart, setMycart] = useState([])
  }
  // async function updateCartToLocalStorage(value) {
  //   // 開啟載入指示
  //   // const currentCart = JSON.parse(localStorage.getItem('cart')) || []
  //   // console.log('currentCart', currentCart)
  //   // 設定資料
  // }

  async function addToServer(value) {
    const request = new Request('http://localhost:6001/OnSale', {
      method: 'POST',
      body: JSON.stringify(value),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(value))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <LobbyTitle string={'優惠專區'} />
      <div className="container bg-secondary">
        <br />
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-12 " align="center">
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
              </div>
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
                        addToServer({
                          couponMapId: 1,
                          couponID: 1,
                          customerID: 'C008',
                          valid: 1,
                        })
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
                    <button type="button" className="btn btn-danger text-white">
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
    </>
  )
}

export default OnSale
