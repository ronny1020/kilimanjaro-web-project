import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

import ProductListItem from '../components/ProductList/productListItem'
import LobbyTitle from '../components/member/LobbyTitle'
import { FaWikipediaW } from 'react-icons/fa'

import img001 from '../img/home/carousel/001.jpg'
import img002 from '../img/home/carousel/002.jpg'
import img003 from '../img/home/carousel/003.jpg'
import img004 from '../img/home/carousel/004.jpg'
import img005 from '../img/home/carousel/005.jpg'
import img006 from '../img/home/carousel/006.jpg'
import { array } from 'prop-types'

function Sellers() {
  const [origin, setOrigin] = useState('')
  fetch('http://localhost:6001/sellers_introListApi')
    .then(function (response) {
      return response.json()
    })
    .then(function (myJson) {
      setOrigin(myJson.MemberList[0].origin)
    })
  // const [total, setTotal] = useState([])

  // async function getTotalFromServer() {
  //   const request = new Request('http://localhost:6001/sellers_introListApi', {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'appliaction/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()
  //   //console.log(data)
  //   // 設定資料

  //   setTotal(data)
  // }

  // useEffect(() => {
  //   getTotalFromServer()
  // }, [])

  // var a = total.MemberList
  // console.log(a)

  // a !== undefined ?? console.log(a[0])

  return (
    <>
      <LobbyTitle string={'賣家介紹'} />
      <div className="container bg-secondary">
        <br />
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-12 " align="center">
                <div className="container bg-white pt-3 m-6 ">
                  <h1>小農咖啡園1</h1>

                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carouselImage"
                        src={img001}
                        alt="slide 001"
                      />
                      <Carousel.Caption>{/* text */}</Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carouselImage"
                        src={img002}
                        alt="slide 002"
                      />
                      <Carousel.Caption>{/* text */}</Carousel.Caption>
                    </Carousel.Item>{' '}
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carouselImage"
                        src={img003}
                        alt="slide 003"
                      />
                      <Carousel.Caption>{/* text */}</Carousel.Caption>
                    </Carousel.Item>{' '}
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carouselImage"
                        src={img004}
                        alt="slide 004"
                      />
                      <Carousel.Caption>{/* text */}</Carousel.Caption>
                    </Carousel.Item>{' '}
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carouselImage"
                        src={img005}
                        alt="slide 005"
                      />
                      <Carousel.Caption>{/* text */}</Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carouselImage"
                        src={img006}
                        alt="slide 006"
                      />
                      <Carousel.Caption>{/* text */}</Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="row mt-3 ">
              <div className="col-4">
                <img
                  className="d-block h-40 w-100 "
                  src={img004}
                  alt="slide 004"
                />
              </div>
              <div className="col-4 ">
                <img
                  className="d-block h-40 w-100 "
                  src={img004}
                  alt="slide 004"
                />
              </div>
              <div className="col-4">
                <img
                  className="d-block h-40 w-100 "
                  src={img004}
                  alt="slide 004"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12" align="center">
                <div className="container bg-white pt-3 m-6 ">
                  <h1>簡介</h1>
                </div>
              </div>
            </div>

            <div className=" card-deck ">
              <ProductListItem>
                <p>產 區:</p>
                <p>{origin}</p>
              </ProductListItem>
              <ProductListItem>
                <p>海 拔</p>
                <p>1200-2300公尺</p>
              </ProductListItem>
              <ProductListItem>
                <p>品 種</p>
                <p>SL-28、SL-34</p>
              </ProductListItem>
            </div>
            <div className=" card-deck">
              <ProductListItem>
                <p>等 級 </p>
                <p>AA級以上</p>
              </ProductListItem>
              <ProductListItem>
                <p>處 理</p>
                <p>水洗法</p>
              </ProductListItem>
              <ProductListItem>
                <p>特 色</p>
                <p>蔗糖甜味帶出肯亞特有的烏梅酒香與黑醋栗般的尾韻。</p>
              </ProductListItem>
            </div>
            <div className="row mt-3">
              <div className="col-12" align="center">
                <div className="container bg-white pt-3 m-6 ">
                  <h1>賣家故事</h1>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4">
                <div className="container bg-white pt-3 m-6 ">
                  <h4>
                    <FaWikipediaW />
                    守護咖啡文化
                  </h4>
                  <br />
                  <p>
                    守護日漸被遺忘的咖啡文化， 懷舊又溫暖，但卻是過去未曾
                    有過的屬於大人的咖啡店。
                  </p>
                </div>
              </div>
              <div className="col-8">
                <div className="container bg-white pt-3 m-6 ">
                  <h4>
                    <FaWikipediaW />
                    人生就差一杯咖啡的溫度
                  </h4>
                  <br />
                  <p>
                    我們的目標是沖泡出讓客人能 輕鬆舒適地細細品嚐，連最後
                    一滴都香醇美味的咖啡。也就 是口感滑順，即使不馬上飲用
                    也不會變渾濁，反而更加香甜 的咖啡。請享受喉間感受到的
                    芳醇香氣與濃醇舒適的餘韻。
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4">
                <div className="container bg-white pt-3 m-6 ">
                  <h4>
                    <FaWikipediaW />
                    有機種植
                  </h4>
                  <br />
                  <p>
                    使用高品質阿拉比卡豆並秉持公平交易原則
                    與產區購買生豆，並以專業烘豆技術烘出高
                    品質價格平實的咖啡豆。 職人手感烘焙選用
                    較天然的原物料做出溫暖人心並兼顧視覺饗 宴的糕點。
                  </p>
                </div>
              </div>
              <div className="col-8">
                <div className="container bg-white pt-3 m-6 ">
                  <h4>
                    <FaWikipediaW />
                    烘培技術
                  </h4>
                  <br />
                  <p>
                    咖啡樹它是一種喜溫暖的植物，種植地一般
                    會選在光照比較充足的地塊，其次就是它的
                    生長不需要太多的水分，土壤肥力也不用太
                    充足，一般的閒散地、平原、山坡等排水性
                    較好的沙質土壤為宜，同時通透性也要夠好
                    ，同時透過有機栽種，咖啡不但更健康，同 時更美味。
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12" align="center">
                <div className="container bg-white pt-3 m-6 ">
                  <h1>特色商品</h1>
                </div>
              </div>
            </div>
            <div className=" card-deck ">
              <ProductListItem>
                <p>產 區:</p>
                <p>肯亞 涅里</p>
              </ProductListItem>
              <ProductListItem>
                <p>海 拔</p>
                <p>1200-2300公尺</p>
              </ProductListItem>
              <ProductListItem>
                <p>品 種</p>
                <p>SL-28、SL-34</p>
              </ProductListItem>
            </div>
            <div className="row mt-3">
              <div className="col-12" align="center">
                <button type="button" className="btn btn-danger text-white">
                  想看更多
                </button>
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
              <Link to="/sellers">小農咖啡園1</Link>
            </li>

            <li>
              <Link to="./sellers/sellers2.js">小農咖啡園2</Link>
            </li>
            <li>
              <Link to="/sellers/123">小農咖啡園3</Link>
            </li>
            <li>
              <Link to="/sellers/123">小農咖啡園4</Link>
            </li>
            <li>
              <Link to="/sellers/123">小農咖啡園5</Link>
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

export default Sellers
