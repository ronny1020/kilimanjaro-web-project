import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'

import { Button } from 'react-bootstrap'
import LobbyTitle from '../components/member/LobbyTitle'
import CouponItem from '../components/CouponItem'
import Typed from 'react-typed'
import SmoothScroll from 'smooth-scroll'
import { GoStar } from 'react-icons/go'
// import NewSidebar from '../components/NewSidebar'
import Breadcrumb from '../components/Breadcrumb'

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
  useEffect(() => {
    var scroll = new SmoothScroll('a[href*="#"]')
    console.log(scroll)
  }, [])
  // const inputArray = [
  //   { text: '小額優惠區', link: '#aa1', icon: <GoStar /> },
  //   { text: '中額優惠區', link: '#aa2', icon: <GoStar /> },
  //   { text: '高額優惠區', link: '#aa3', icon: <GoStar /> },
  //   { text: '特級優惠區', link: '#aa4', icon: <GoStar /> },
  // ]
  return (
    <>
      <div className="all-page-title page-breadcrumb">
        <div id="nn0"></div>
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
              <div className="col-md-4 col-xs-0 qweqwe" align="center">
                <div class=" sidebar2">
                  <div class=" side_title2 ">優惠專區</div>
                  <a data-scroll href="#aa1">
                    <br />
                    <GoStar />
                    小額優惠區
                  </a>
                  <a data-scroll href="#aa2">
                    <br />
                    <GoStar />
                    中額優惠區
                  </a>
                  <a data-scroll href="#aa3">
                    <br />
                    <GoStar />
                    高額優惠區
                  </a>
                  <a data-scroll href="#aa4">
                    <br />
                    <GoStar />
                    特級優惠區
                    <p />
                  </a>
                </div>
                {/* <NewSidebar title={'優惠專區'} input={inputArray} /> */}
                {/* <nav class="navbar sidebar">
                  <ul class="navbar-nav">
                    <div class=" bg-primary titleLabel">
                      <h4 class="text-secondary">常見問題</h4>
                    </div>
                    <li class="nav-item" onClick={() => {}}>
                      <a class="nav-link" data-scroll href="#aa1">
                        <p class="text-dark">&gt;小額優惠區</p>
                      </a>
                      <hr />
                    </li>
                    <li class="nav-item" onClick={() => {}}>
                      <a class="nav-link" data-scroll href="#aa2">
                        <p class="text-dark">&gt;中額優惠區</p>
                      </a>
                      <hr />
                    </li>
                    <li class="nav-item" onClick={() => {}}>
                      <a class="nav-link" data-scroll href="#aa3">
                        <p class="text-dark">&gt;高額優惠區</p>
                      </a>
                      <hr />
                    </li>
                    <li class="nav-item" onClick={() => {}}>
                      <a class="nav-link" data-scroll href="#aa4">
                        <p class="text-dark">&gt;特級優惠區</p>
                      </a>
                      <hr />
                    </li>
                  </ul>
                </nav> */}
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

                <div className="row ccccc ">
                  <div className="col-12 " align="center">
                    <div class="tyu2">
                      <Breadcrumb />
                    </div>
                    <div className="container bg-white pt-3 m-6 ">
                      <div class=" sidebar3">
                        <div class=" side_title3 ">優惠專區</div>
                        <a data-scroll href="#aa1">
                          <br />
                          <GoStar />
                          小額優惠區
                        </a>
                        <a data-scroll href="#aa2">
                          <br />
                          <GoStar />
                          中額優惠區
                        </a>
                        <a data-scroll href="#aa3">
                          <br />
                          <GoStar />
                          高額優惠區
                        </a>
                        <a data-scroll href="#aa4">
                          <br />
                          <GoStar />
                          特級優惠區
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
                {/* 傳值進入此: 於component內操作api (亦可以用迴圈產生)*/}
                {/* 確定值有進去才產生component*/}
                {genList ? (
                  <>
                    <div className="row mt-3">
                      <div className="col-lg-12">
                        <div className="heading-title text-center container bg-white pt-3 m-6 ">
                          <h3 className="m-b-20 ">
                            <div id="aa1"></div>
                            <strong>
                              <Typed
                                strings={['小額優惠區', '生活裡的小確幸']}
                                typeSpeed={60}
                                backSpeed={70}
                                loop
                              />
                              <br />
                            </strong>
                          </h3>

                          <p className="text-white">123</p>
                        </div>
                      </div>
                    </div>
                    <div class="work-box">
                      <div class="work-img">
                        <Row>
                          <CouponItem input={coupons[0]} />
                          <CouponItem input={coupons[1]} />
                        </Row>
                        <p className="text-white">123</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-12">
                        <div className="heading-title text-center container bg-white pt-3 m-6 ">
                          <h3 className="m-b-20 ">
                            <div id="aa2"></div>
                            <strong>
                              <Typed
                                strings={['中額優惠區', '喝咖啡很是可以很省']}
                                typeSpeed={60}
                                backSpeed={70}
                                loop
                              />
                              <br />
                            </strong>
                          </h3>

                          <p className="text-white">123</p>
                        </div>
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
                    <div className="row">
                      <div className="col-12" align="center">
                        <Button
                          className=" btn-success text-white"
                          variant="secondary"
                          data-scroll
                          href="#nn0"
                        >
                          謝了，我想回上面
                        </Button>
                      </div>
                      <p className="text-white">123</p>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-12">
                        <div className="heading-title text-center container bg-white pt-3 m-6 ">
                          <h3 className="m-b-20 ">
                            <div id="aa3"></div>
                            <strong>
                              <Typed
                                strings={['高額優惠區', '高貴不貴就在這裡']}
                                typeSpeed={60}
                                backSpeed={70}
                                loop
                              />
                              <br />
                            </strong>
                          </h3>

                          <p className="text-white">123</p>
                        </div>
                      </div>
                    </div>
                    <div class="work-box">
                      <div class="work-img">
                        <Row>
                          <CouponItem input={coupons[4]} />
                          <CouponItem input={coupons[5]} />
                        </Row>
                        <p className="text-white">123</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12" align="center">
                        <Button
                          className=" btn-success text-white"
                          variant="secondary"
                          data-scroll
                          href="#nn0"
                        >
                          謝了，我想回上面
                        </Button>
                      </div>
                      <p className="text-white">123</p>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-12">
                        <div className="heading-title text-center container bg-white pt-3 m-6 ">
                          <h3 className="m-b-20 ">
                            <div id="aa4"></div>
                            <strong>
                              <Typed
                                strings={['特級優惠區', '可遇不可求的優惠']}
                                typeSpeed={60}
                                backSpeed={70}
                                loop
                              />
                              <br />
                            </strong>
                          </h3>

                          <p className="text-white">123</p>
                        </div>
                      </div>
                    </div>
                    <div class="work-box">
                      <div class="work-img">
                        <Row>
                          <CouponItem input={coupons[6]} />
                          <CouponItem input={coupons[7]} />
                        </Row>

                        <p className="text-white">123</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12" align="center">
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
