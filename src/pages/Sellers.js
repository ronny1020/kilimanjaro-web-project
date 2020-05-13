/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import ProductListItem from '../components/ProductList/productListItem'
import LobbyTitle from '../components/member/LobbyTitle'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import JqueryComClass from '../components/seller/JqueryComClass'
import Typed from 'react-typed'
import SmoothScroll from 'smooth-scroll'
import Breadcrumb from '../components/Breadcrumb'
import FadeIn from 'react-fade-in'

// import Sidebar from '../components/Sidebar'
import '../styles/my.scss'
import '../styles/sidebar.scss'
// import { FaWikipediaW } from 'react-icons/fa'

import { GoStar } from 'react-icons/go'

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
  const [UnitPrice1, setUnitPrice1] = useState('')
  const [UnitPrice2, setUnitPrice2] = useState('')
  const [UnitPrice3, setUnitPrice3] = useState('')
  const [i, seti] = useState(0)

  const [show, setShow] = useState(false)
  // const [show2, setShow2] = useState(false)

  const handleClose = () => setShow(false)
  // const handleClose2 = () => setShow2(false)
  const handleShow = () => setShow(true)
  // const handleShow2 = () => setShow2(true)
  // const [total, setTotal] = useState([])

  //五個店家名稱存放於此
  const [storeNames, setStoreNames] = useState([])
  const [getList, setGetList] = useState(true)
  if (getList === true) {
    fetch('http://localhost:6001/sellersApi')
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        for (let i = 0; i < 5; i++) {
          setStoreNames(
            (storeNames) => storeNames.concat(myJson.MemberList[i].sName)
            // [...storeNames, myJson.MemberList[i].sName]
          )
        }
      })
      .then(() => setGetList(false))
  }
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
        setUnitPrice1(myJson2.MemberList[0].UnitPrice)
        setUnitPrice2(myJson2.MemberList[1].UnitPrice)
        setUnitPrice3(myJson2.MemberList[2].UnitPrice)
        console.log(myJson2)
      })
  }, [sellerID])

  console.log(sellerList)
  console.log(sellerList2)
  // console.log(sellerID)
  // console.log(ProductName1)
  // console.log(ProductName2)
  // console.log(ProductName3)
  // console.log(storeNames[1])

  var a = String(i)
  // var a = total.MemberList
  // console.log(a)

  // a !== undefined ?? console.log(a[0])
  useEffect(() => {
    var scroll = new SmoothScroll('a[href*="#"]')
    console.log(scroll)
  }, [])

  return (
    <>
      <JqueryComClass />
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
        {/* <div id="nn0"></div> */}
        <div className="container text-center ">
          <div className="row">
            <div className="col-lg-12 " align="center">
              {/* <h1>賣家介紹</h1> */}
              <p className="text-white">
                ~各式各樣的賣家，是來自世界各地的咖啡愛好者~
              </p>
            </div>
          </div>
          <FadeIn>
            <LobbyTitle string={'店家介紹'} />

            <div className="row"></div>

            <div className="container bg-secondary">
              <br />
              <div className="row ">
                <div className="col-md-4 col-xs-0 qweqwe" align="center">
                  {/* 改過的sidebar 只能這樣改了 :hover沒變箭頭可能要自己改一下*/}
                  <div class=" sidebar2">
                    <div class=" side_title2 ">請選擇賣家</div>
                    <a
                      class="nav-item"
                      onClick={() => {
                        seti(0)
                      }}
                    >
                      <br />
                      <GoStar />
                      {getList === true ? null : storeNames[0]}
                    </a>
                    <a
                      class="nav-item"
                      onClick={() => {
                        seti(1)
                      }}
                    >
                      <br />
                      <GoStar />
                      {getList === true ? null : storeNames[1]}
                    </a>
                    <a
                      class="nav-item"
                      onClick={() => {
                        seti(2)
                      }}
                    >
                      <br />
                      <GoStar />
                      {getList === true ? null : storeNames[2]}
                    </a>
                    <a
                      class="nav-item"
                      onClick={() => {
                        seti(3)
                      }}
                    >
                      <br />
                      <GoStar />
                      {getList === true ? null : storeNames[3]}
                    </a>
                    <a
                      class="nav-item"
                      onClick={() => {
                        seti(4)
                      }}
                    >
                      <br />
                      <GoStar />
                      {getList === true ? null : storeNames[4]}
                      <p />
                    </a>
                  </div>
                  {/* 改過的sidebar 只能這樣改了 (end) */}

                  <img src="../../images/ad1.png" alt="ad1" width="80%"></img>
                  <br />
                  <img src="../../images/ad2.png" alt="ad2" width="80%"></img>
                  <br />
                  <img src="../../images/ad1.png" alt="ad1" width="80%"></img>
                  <br />
                  <img src="../../images/ad2.png" alt="ad2" width="80%"></img>
                  <br />
                  <img src="../../images/ad1.png" alt="ad1" width="80%"></img>
                  <br />
                  <img src="../../images/ad2.png" alt="ad2" width="80%"></img>
                  <br />
                  <img src="../../images/ad1.png" alt="ad1" width="80%"></img>
                  <div className="row ccccc ">
                    <div className="col-12 " align="center">
                      <div class="tyu2">
                        <Breadcrumb />
                      </div>
                      <div className="container bg-white pt-3 m-6 ">
                        {' '}
                        <div class=" sidebar3 ">
                          <div class=" side_title3 ">請選擇賣家</div>
                          <a
                            class="nav-item"
                            onClick={() => {
                              seti(0)
                            }}
                          >
                            <br />
                            <GoStar />
                            {getList === true ? null : storeNames[0]}
                          </a>
                          <a
                            class="nav-item"
                            onClick={() => {
                              seti(1)
                            }}
                          >
                            <br />
                            <GoStar />
                            {getList === true ? null : storeNames[1]}
                          </a>
                          <a
                            class="nav-item"
                            onClick={() => {
                              seti(2)
                            }}
                          >
                            <br />
                            <GoStar />
                            {getList === true ? null : storeNames[2]}
                          </a>
                          <a
                            class="nav-item"
                            onClick={() => {
                              seti(3)
                            }}
                          >
                            <br />
                            <GoStar />
                            {getList === true ? null : storeNames[3]}
                          </a>
                          <a
                            class="nav-item"
                            onClick={() => {
                              seti(4)
                            }}
                          >
                            <br />
                            <GoStar />
                            {getList === true ? null : storeNames[4]}
                            <p />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-8 col-xs-12 asdasd">
                  <div class="tyu">
                    <Breadcrumb />
                  </div>
                  <div className="row">
                    <div className="col-12 " align="center">
                      <div className="container bg-white pt-3 m-6 ">
                        <h1>
                          <strong>{sName}</strong>
                        </h1>
                        <h3 className="m-b-20 ">
                          <strong>
                            <Typed
                              strings={[
                                '來自各國優質賣家',
                                '精心栽種的咖啡飲品',
                                '就為了喝下那一刻的幸福',
                              ]}
                              typeSpeed={60}
                              backSpeed={70}
                              loop
                            />
                            <br />
                          </strong>
                        </h3>

                        <Carousel>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 carouselImage"
                              src={require('../img/disc/seller_0' +
                                a +
                                '1.jpg')}
                              alt="slide 001"
                            />
                            <Carousel.Caption>{/* text */}</Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 carouselImage"
                              src={require('../img/disc/seller_0' +
                                a +
                                '2.jpg')}
                              alt="slide 002"
                            />
                            <Carousel.Caption>{/* text */}</Carousel.Caption>
                          </Carousel.Item>{' '}
                          <Carousel.Item>
                            <img
                              className="d-block w-100 carouselImage"
                              src={require('../img/disc/seller_0' +
                                a +
                                '3.jpg')}
                              alt="slide 003"
                            />
                            <Carousel.Caption>{/* text */}</Carousel.Caption>
                          </Carousel.Item>{' '}
                        </Carousel>
                      </div>
                      <div id="nn0"></div>
                      <div className="row mt-3">
                        <div className="col-lg-12">
                          <div className="heading-title text-center container bg-white pt-3 m-6 ">
                            <h2>賣家資訊</h2>
                            <p>
                              根據您的需求，能在此了解關於賣家的相關資訊，如基本資料與聯絡方式
                            </p>
                            <ButtonGroup aria-label="Basic example">
                              {/* <Button variant="secondary" href="#">
                      全部消息
                    </Button> */}
                              <Button id="photo" variant="secondary">
                                打開特色商品
                              </Button>
                              <Button id="shop2" variant="secondary">
                                打開聯絡方式與基本資訊
                              </Button>

                              <Button id="giri2" variant="secondary">
                                打開店家剪影
                              </Button>

                              <Button variant="secondary" id="nothank">
                                謝了，我不想知道
                              </Button>
                            </ButtonGroup>

                            <ButtonGroup
                              aria-label="Basic example"
                              className="mt-1"
                            >
                              {/* <Button variant="secondary" href="#">
                      全部消息
                    </Button> */}
                              <Button
                                variant="secondary"
                                data-scroll
                                href="#nn1"
                              >
                                跳轉特色商品
                              </Button>
                              <Button
                                variant="secondary"
                                data-scroll
                                href="#nn2"
                              >
                                跳轉聯絡方式與基本資訊
                              </Button>

                              <Button
                                variant="secondary"
                                data-scroll
                                href="#nn3"
                              >
                                跳轉店家剪影
                              </Button>
                              {/* 
                            <Button variant="secondary" data-scroll href="#nn0">
                              謝了，我想回上面
                            </Button> */}
                            </ButtonGroup>

                            <p className="text-white">123</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="nn3"></div>
                  <div className="row mt-3 " id="nothank3">
                    <div className="col-12 " align="center">
                      <div className="container bg-white pt-3 m-6 ">
                        <div className="qt-background mt-3" id="giri2">
                          <div className="text-white " align="center">
                            <h3>"店家剪影"</h3>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    <div className="col-12 container bg-white pt-3 m-6 ">
                      <div className="row">
                        <div className="col-6 ">
                          {/* <img
                      className="d-block h-40 w-100 "
                      src={img004}
                      alt="slide 004"
                    /> */}

                          <div
                            class="team-thumb wow fadeInUp"
                            data-wow-delay="0.2s"
                            id="shop2"
                          >
                            <img
                              className="d-block h-100 w-100  "
                              src={require('../img/disc/seller_1' +
                                a +
                                '1.jpg')}
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
                          <div
                            class="team-thumb wow fadeInUp"
                            data-wow-delay="0.2s"
                          >
                            <img
                              className="d-block h-100 w-100 "
                              src={require('../img/disc/seller_1' +
                                a +
                                '2.jpg')}
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
                  <div id="nn2"></div>
                  <div className="row mt-3 " id="nothank4">
                    <div className="col-12 " align="center">
                      <div className="container bg-white pt-3 m-6 ">
                        <div className=" card-deck">
                          <ProductListItem>
                            <p />

                            <div className="qt-background2 mt-3" id="giri2">
                              <div className="text-white " align="center">
                                <h3 onClick={handleShow}>
                                  <strong>"聯絡方式與基本資訊"</strong>
                                </h3>
                              </div>
                            </div>
                            <Accordion className="mt-3">
                              <Card>
                                <Card.Header>
                                  <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="0"
                                  >
                                    電 話
                                  </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>{sPhone}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                              <Card>
                                <Card.Header>
                                  <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="1"
                                  >
                                    信 箱
                                  </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                  <Card.Body>{sMail}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                              <Card>
                                <Card.Header>
                                  <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="2"
                                  >
                                    國 家
                                  </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                  <Card.Body>{sCountry}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                              <Card>
                                <Card.Header>
                                  <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="3"
                                  >
                                    地 址
                                  </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                  <Card.Body>{sAddress}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                            {/* <button
                      type="button"
                      className="btn btn-danger text-white"
                      onClick={handleShow}
                    >
                      想看更多
                    </button> */}

                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>{sName}</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <p>電 話:{sPhone}</p>
                                <p>信 箱:{sMail}</p>
                                <p>國 家:{sCountry}</p>
                                <p>地 址:{sAddress}</p>
                              </Modal.Body>
                              <Modal.Footer></Modal.Footer>
                            </Modal>
                          </ProductListItem>
                        </div>
                        {/* <div className=" card-deck">
                        <ProductListItem>
                          <p />
                          <h3 onClick={handleShow2}>基 本 資 料 </h3>
                          <Accordion>
                            <Card>
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  Click me!
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card>
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="1"
                                >
                                  Click me!
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>

                          <Modal show={show2} onHide={handleClose2}>
                            <Modal.Header closeButton>
                              <Modal.Title>{sName}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <p>國 家:{sCountry}</p>
                              <p>地 址:{sAddress}</p>
                            </Modal.Body>
                            <Modal.Footer></Modal.Footer>
                          </Modal>
                        </ProductListItem>
                      </div> */}
                      </div>
                      <Button
                        className=" btn-success text-white m-3"
                        variant="secondary"
                        data-scroll
                        href="#nn0"
                      >
                        謝了，我想回上面
                      </Button>
                    </div>
                  </div>
                  {/* <div className=" card-deck">
                  <ProductListItem>
                    <p>國 家:</p>
                    <p>{sCountry}</p>
                  </ProductListItem>
                  <ProductListItem>
                    <p>地 址:</p>
                    <p>{sAddress}</p>
                  </ProductListItem>
                </div> */}
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
                  <div id="nn1"></div>
                  <div className="row mt-3 " id="nothank5">
                    <div className="col-12 " align="center">
                      <div className="container bg-white pt-3 m-6 ">
                        <div className="qt-background3 mt-3">
                          <div className="text-white " align="center">
                            <h3>"特色商品，了解商品相關資訊"</h3>
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
                                  src={require('../img/disc/p' + a + '1.jpg')}
                                  alt="slide 004"
                                />
                              </ProductListItem>
                              <div>
                                <h4 align="center">{ProductName1}</h4>
                              </div>
                              <div className="why-text" align="center">
                                <p>
                                  {sName}:<br />
                                  {ProductName1}
                                </p>
                                <h5> 售價:NT.{UnitPrice1}</h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 special-grid drinks">
                            <div className="gallery-single fix">
                              <ProductListItem>
                                <img
                                  className="d-block h-100 w-100 "
                                  src={require('../img/disc/p' + a + '2.jpg')}
                                  alt="slide 004"
                                />
                              </ProductListItem>
                              <div>
                                <h4 align="center">{ProductName2}</h4>
                              </div>
                              <div className="why-text" align="center">
                                <p>
                                  {sName}:<br />
                                  {ProductName2}
                                </p>
                                <h5> 售價:NT.{UnitPrice2}</h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 special-grid drinks">
                            <div className="gallery-single fix">
                              <ProductListItem>
                                <img
                                  className="d-block h-100 w-100 "
                                  src={require('../img/disc/p' + a + '3.jpg')}
                                  alt="slide 004"
                                />
                              </ProductListItem>
                              <div>
                                <h4 align="center">{ProductName3}</h4>
                              </div>
                              <div className="why-text" align="center">
                                <p>
                                  {sName}:<br />
                                  {ProductName3}
                                </p>
                                <h5> 售價:NT.{UnitPrice3}</h5>
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
                            <button
                              type="button"
                              className="btn btn-danger text-white"
                            >
                              <Link className="text-white" to="/productList">
                                想看更多
                              </Link>
                            </button>
                            <Button
                              className=" btn-success text-white m-3"
                              variant="secondary"
                              data-scroll
                              href="#nn0"
                            >
                              謝了，我想回上面
                            </Button>
                          </div>
                          <p className="text-white">123</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  )
}

export default Sellers
