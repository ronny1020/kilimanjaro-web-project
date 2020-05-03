import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

import ProductListItem from '../components/ProductList/productListItem'
import LobbyTitle from '../components/member/LobbyTitle'
import '../styles/my.scss'
// import { FaWikipediaW } from 'react-icons/fa'

import img001 from '../img/home/carousel/001.jpg'
import img002 from '../img/home/carousel/002.jpg'
import img003 from '../img/home/carousel/003.jpg'
import img004 from '../img/home/carousel/004.jpg'
import img005 from '../img/home/carousel/005.jpg'
import img006 from '../img/home/carousel/006.jpg'
import disc1 from '../img/disc/coffee2.jpg'

function Sellers() {
  const [sellerID, setsellerID] = useState('S001')
  const [sName, setsName] = useState('')
  // const [sName2, setsName2] = useState('')
  const [sPhone, setsPhone] = useState('')
  const [sMail, setsMail] = useState('')
  const [sAddress, setsAddress] = useState('')
  const [sCountry, setsCountry] = useState('')

  const [sellerList, setsellerList] = useState('')
  const [sellerList2, setsellerList2] = useState('')
  const [ProductName1, setProductName1] = useState('')
  const [ProductName2, setProductName2] = useState('')
  const [ProductName3, setProductName3] = useState('')
  const [i, seti] = useState(0)
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

  useEffect(() => {
    fetch('http://localhost:6001/sellersApi')
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        //記得在JSX中使用JS變數要用花括號包著
        // lists.push(<li>{arrLists[i]}</li>)

        setsellerID(myJson.MemberList[i].sellerID)
        setsName(myJson.MemberList[i].sName)

        setsPhone(myJson.MemberList[i].sPhone)
        setsMail(myJson.MemberList[i].sMail)
        setsAddress(myJson.MemberList[i].sAddress)
        setsCountry(myJson.MemberList[i].sCountry)

        const list = myJson.MemberList.map((j) => j.sName)
        setsellerList(list)
        const list2 = myJson.MemberList.map((k) => k.sellerID)
        setsellerList2(list2)
      })
  }, [i])

  useEffect(() => {
    fetch('http://localhost:6001/sellersApi/' + [sellerID])
      .then(function (response2) {
        return response2.json()
      })
      .then(function (myJson2) {
        //記得在JSX中使用JS變數要用花括號包著
        // lists.push(<li>{arrLists[i]}</li>)

        setProductName1(myJson2.MemberList[0].ProductName)
        setProductName2(myJson2.MemberList[1].ProductName)
        setProductName3(myJson2.MemberList[2].ProductName)
        console.log(myJson2)
      })
  }, [sellerID])

  console.log(sellerList)
  console.log(sellerList2)
  console.log(sellerID)
  console.log(ProductName1)
  console.log(ProductName2)
  console.log(ProductName3)

  var a = String(i)
  // var a = total.MemberList
  // console.log(a)

  // a !== undefined ?? console.log(a[0])

  return (
    <>
      {/* <div className="qt-background mt-3">
        <div className="text-white" align="center">
          "最好的體驗，最棒的香味，完美的午後時光"
        </div>
      </div> */}
      {/* <div className="all-page-title page-breadcrumb">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 " align="center">
              <h1>賣家介紹</h1>
              <p className="text-white">
                ~各式各樣的賣家，是來自世界各地的愛好者~
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="all-page-title page-breadcrumb">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 " align="center">
              {/* <h1>賣家介紹</h1> */}
              <p className="text-white">
                ~各式各樣的賣家，是來自世界各地的咖啡愛好者~
              </p>
            </div>
          </div>
          <LobbyTitle string={'賣家介紹'} />

          <div className="row"></div>

          <div className="container bg-secondary">
            <br />
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-12 " align="center">
                    <div className="container bg-white pt-3 m-6 ">
                      <h1>{sName}</h1>

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
                      <div className="qt-background mt-3">
                        <div className="text-white " align="center">
                          "賣家簡介"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 ">
                  {/* <div className="col-lg-4 col-md-6 special-grid drinks">
                    <div className="gallery-single fix">
                      <ProductListItem>
                        <img
                          className="d-block h-100 w-100 "
                          src={disc1}
                          alt="slide 004"
                        />
                      </ProductListItem>
                      <div className="why-text" align="center">
                        <p>深烘培咖啡粉</p>
                        <h5> 售價:NT.80</h5>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-4 col-md-6 special-grid drinks">
                    <div className="gallery-single fix">
                      <ProductListItem>
                        <img
                          className="d-block h-100 w-100 "
                          src={disc1}
                          alt="slide 004"
                        />
                      </ProductListItem>
                      <div className="why-text" align="center">
                        <p>深烘培咖啡粉</p>
                        <h5> 售價:NT.80</h5>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-4 col-md-6 special-grid drinks">
                    <div className="gallery-single fix">
                      <ProductListItem>
                        <img
                          className="d-block h-100 w-100 "
                          src={disc1}
                          alt="slide 004"
                        />
                      </ProductListItem>
                      <div className="why-text" align="center">
                        <p>深烘培咖啡粉</p>
                        <h5> 售價:NT.80</h5>
                      </div>
                    </div>
                  </div> */}

                  <div className="col-6 ">
                    {/* <img
                      className="d-block h-40 w-100 "
                      src={img004}
                      alt="slide 004"
                    /> */}
                    <div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                      <img
                        className="d-block h-100 w-100  "
                        src={require('../img/disc/seller_1' + a + '1.jpg')}
                        alt="slide 004"
                      />
                      <div class="team-hover">
                        <div class="team-item text-white">
                          <h4>最棒的咖啡</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    {/* <img
                      className="d-block h-40 w-100 "
                      src={img004}
                      alt="slide 004"
                    /> */}
                    <div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                      <img
                        className="d-block h-100 w-100 "
                        src={require('../img/disc/seller_1' + a + '2.jpg')}
                        alt="slide 004"
                      />
                      <div class="team-hover">
                        <div class="team-item text-white">
                          <h4>最佳的氣氛</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="row mt-3">
                  <div className="col-12" align="center">
                    <div className="container bg-white pt-3 m-6 ">
                      <h1>簡介</h1>
                    </div>
                  </div>
                </div> */}

                {/* <div className=" card-deck ">
                  <ProductListItem>
                    <p>編 號:</p>
                    <p>{selID}</p>
                  </ProductListItem>
                  <ProductListItem>
                    <p>名稱:</p>
                    <p>{sName}</p>
                  </ProductListItem>
                  <ProductListItem>
                    <p>地 址:</p>
                    <p>{sAddress}</p>
                  </ProductListItem>
                </div> */}
                <div className=" card-deck">
                  <ProductListItem>
                    <p>地 址:</p>
                    <p>{sAddress}</p>
                  </ProductListItem>
                  <ProductListItem>
                    <p>電 話: </p>
                    <p>{sPhone}</p>
                  </ProductListItem>
                </div>
                <div className=" card-deck">
                  <ProductListItem>
                    <p>信 箱:</p>
                    <p>{sMail}</p>
                  </ProductListItem>
                  <ProductListItem>
                    <p>國 家:</p>
                    <p>{sCountry}</p>
                  </ProductListItem>
                </div>
                {/* <div className="row mt-3">
                  <div className="col-12" align="center">
                    <div className="container bg-white pt-3 m-6 ">
                      <h1>賣家故事</h1>
                    </div>
                  </div>
                </div> */}
                {/* <div className="row mt-3">
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
                </div> */}
                {/* <div className="row mt-3">
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
                </div> */}
                <div className="qt-background mt-3">
                  <div className="text-white " align="center">
                    "特色商品"
                  </div>
                </div>
                {/* <div className="row mt-3">
                  <div className="col-12" align="center">
                    <div className="container bg-white pt-3 m-6 ">
                      <h1>特色商品</h1>
                    </div>
                  </div>
                </div> */}
                <div className="row mt-3 ">
                  <div className="col-lg-4 col-md-6 special-grid drinks">
                    <div className="gallery-single fix">
                      <ProductListItem>
                        <img
                          className="d-block h-100 w-100 "
                          src={disc1}
                          alt="slide 004"
                        />
                      </ProductListItem>
                      <div className="why-text" align="center">
                        <p>深烘培咖啡粉</p>
                        <h5> 售價:NT.80</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 special-grid drinks">
                    <div className="gallery-single fix">
                      <ProductListItem>
                        <img
                          className="d-block h-100 w-100 "
                          src={disc1}
                          alt="slide 004"
                        />
                      </ProductListItem>
                      <div className="why-text" align="center">
                        <p>深烘培咖啡粉</p>
                        <h5> 售價:NT.80</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 special-grid drinks">
                    <div className="gallery-single fix">
                      <ProductListItem>
                        <img
                          className="d-block h-100 w-100 "
                          src={disc1}
                          alt="slide 004"
                        />
                      </ProductListItem>
                      <div className="why-text" align="center">
                        <p>深烘培咖啡粉</p>
                        <h5> 售價:NT.80</h5>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-4">
                    <img
                      className="d-block h-40 w-100 "
                      src={img004}
                      alt="slide 004"
                    />
                  </div> */}
                  {/* <div className="col-4 ">
                    <img
                      className="d-block h-40 w-100 "
                      src={img004}
                      alt="slide 004"
                    />
                  </div> */}
                  {/* <div className="col-4">
                    <img
                      className="d-block h-40 w-100 "
                      src={img004}
                      alt="slide 004"
                    />
                  </div> */}
                </div>
                <div className="row mt-3">
                  <div className="col-12" align="center">
                    <button type="button" className="btn btn-danger text-white">
                      <Link className="text-white" to="/productList">
                        想看更多
                      </Link>
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

                <li
                  onClick={() => {
                    seti(1)
                  }}
                >
                  {sellerList[1]}
                </li>
                <li
                  onClick={() => {
                    seti(2)
                  }}
                >
                  {sellerList[2]}
                </li>
                <li
                  onClick={() => {
                    seti(3)
                  }}
                >
                  {sellerList[3]}
                </li>
                <li
                  onClick={() => {
                    seti(4)
                  }}
                >
                  {sellerList[4]}
                </li>
                <li
                  onClick={() => {
                    seti(5)
                  }}
                >
                  {sellerList[5]}
                </li>
                {/* <li>
                  <Link to="/sellers">{sellerList[1]}</Link>
                </li>
                <li>
                  <Link to="/sellers">{sellerList[2]}</Link>
                </li>
                <li>
                  <Link to="/sellers">{sellerList[3]}</Link>
                </li>
                <li>
                  <Link to="/sellers">{sellerList[4]}</Link>
                </li>
                <li>
                  <Link to="/sellers">{sellerList[5]}</Link>
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
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sellers
