import React, { useState, useEffect } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Question from '../components/seller/Question'

import LobbyTitle from '../components/member/LobbyTitle'
import '../styles/my.scss'
import Breadcrumb from '../components/Breadcrumb'
// import Sidebar from '../components/Sidebar'
import img002 from '../img/disc/about-image.jpg'
import img004 from '../img/disc/heart-icon.png'
import ProductListItem from '../components/ProductList/productListItem'

/* 聯絡我們:客服表單 import */

import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import LoginValidate from '../components/LoginValidate'
import SmoothScroll from 'smooth-scroll'
import { GoStar } from 'react-icons/go'

/* 聯絡我們:客服表單 import */

function OnSale() {
  /* 聯絡我們:客服表單 */
  // 如果有登入:獲得用戶email
  const [Email, setEmail] = useState('')
  const [checked, setChecked] = useState(false)
  //送出用的資料:
  const [cramEmail, setCramEmail] = useState('')
  const [cramContent, setCramContent] = useState('')
  if (LoginValidate() === false) {
  } else {
    var memberID = LoginValidate().userID
    fetch('http://localhost:6001/api/member/' + memberID)
      .catch((error) => console.error('Error:', error))
      .then(function (response) {
        return response.json()
      })
      .then(function (memDetail) {
        // console.log(memDetail)
        setEmail(memDetail.cEmail)
        return
      })
  }
  //切換email模式
  function doEmail(props) {
    if (checked === true) {
      setCramEmail(cramEmail)
      setChecked(false)
    }

    if (checked === false) {
      setCramEmail(Email)
      setChecked(true)
    }
  }

  //送出客訴:
  function handleSubmit() {
    // alert(cramEmail + cramContent)
    //如果為外部訪客or更換email: customerID儲存其電子信箱
    const cramJson = {
      customerID: checked ? memberID : cramEmail,
      cramContent: cramContent,
    }
    const mailJson = {
      mail: cramEmail,
    }

    //寫入table: crams
    fetch('http://localhost:6001/api/cram', {
      method: 'POST',
      body: JSON.stringify(cramJson),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((res) => console.log('Success:', res))

    //寄出罐頭回覆 mail api:
    fetch('http://localhost:6001/api/mail/reply', {
      method: 'POST',
      body: JSON.stringify(mailJson),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((res) => console.log('Success:', res))
    // alert(JSON.stringify(cramJson))
  }
  /* 聯絡我們:客服表單 (END) */

  // const inputArray = {
  //   title: '常見問題',
  //   網站定位: {
  //     link: '/lobby/edit',
  //   },

  //   新手教學: {
  //     link: '/lobby/coupon',
  //   },
  //   折扣活動: {
  //     link: '/lobby/history',
  //   },
  //   購物車上限: {
  //     link: '/lobby/favorite',
  //   },
  // }
  // let jsonInput = {
  //   title: '網站定位',
  //   content:
  //     '本店致力於發揚咖啡文化及推廣咖啡相關知識，使一班大眾能夠輕易地找到適合自己的咖啡。且作為一個平台，能夠媒合對咖啡有興趣的民眾及想推廣咖啡及相關器具的店家，使雙方達到最大的利益。',
  //   color: 'primary',
  //   id: 'seller01',
  // }

  useEffect(() => {
    var scroll = new SmoothScroll('a[href*="#"]')
    console.log(scroll)
  }, [])

  return (
    <>
      <div className="all-page-title page-breadcrumb">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 " align="center">
              <div id="mm0"></div>
              {/* <h1>賣家介紹</h1> */}
              <p className="text-white">~關於我們網站，與常見的問題~</p>
            </div>
          </div>
          <LobbyTitle string={'關於我們'} />

          <div className="container bg-secondary">
            <br />

            <div className="row">
              <div className="col-md-4 col-xs-0 qweqwe" align="center">
                {/* <Sidebar input={inputArray} /> */}
                <div class=" sidebar2">
                  <div class=" side_title2 ">常見問題</div>
                  <a data-scroll href="#mm1">
                    <br />
                    <GoStar />
                    網站定位
                  </a>
                  <a data-scroll href="#mm2">
                    <br />
                    <GoStar />
                    賣家資訊
                  </a>
                  <a data-scroll href="#mm3">
                    <br />
                    <GoStar />
                    折扣活動
                  </a>
                  <a data-scroll href="#mm4">
                    <br />
                    <GoStar />
                    商品訊息
                  </a>
                  <a data-scroll href="#mm5">
                    <br />
                    <GoStar />
                    客戶服務
                    <p />
                  </a>
                </div>
                {/* <nav class="navbar sidebar">
                  <ul class="navbar-nav">
                    <div class=" bg-primary titleLabel">
                      <h4 class="text-secondary">常見問題</h4>
                    </div>
                    <li class="nav-item" onClick={() => {}}>
                      <a class="nav-link" data-scroll href="#mm1">
                        <p class="text-dark">&gt;網站定位</p>
                      </a>
                      <hr />
                    </li>
                    <li class="nav-item" onClick={() => {}}>
                      <a class="nav-link" data-scroll href="#mm2">
                        <p class="text-dark">&gt;賣家資訊</p>
                      </a>
                      <hr />
                    </li>
                    <li class="nav-item" onClick={() => {}}>
                      <a class="nav-link" data-scroll href="#mm3">
                        <p class="text-dark">&gt;折扣活動</p>
                      </a>
                      <hr />
                    </li>
                    <li class="nav-item" onClick={() => {}}>
                      <a class="nav-link" data-scroll href="#mm4">
                        <p class="text-dark">&gt;商品訊息</p>
                      </a>
                      <hr />
                    </li>
                    <li class="nav-item" onClick={() => {}}>
                      <a class="nav-link" data-scroll href="#mm5">
                        <p class="text-dark">&gt;客戶服務</p>
                      </a>
                      <hr />
                    </li>
                  </ul>
                </nav> */}

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
                <br />
                <img src="../../images/ad2.png" alt="ad2" width="80%"></img>

                <div className="row ccccc ">
                  <div className="col-12 " align="center">
                    <div class="tyu2">
                      <Breadcrumb />
                    </div>
                    <div className="container bg-white pt-3 m-6 ">
                      <div class=" sidebar3">
                        <div class=" side_title3 ">常見問題</div>
                        <a data-scroll href="#mm1">
                          <br />
                          <GoStar />
                          網站定位
                        </a>
                        <a data-scroll href="#mm2">
                          <br />
                          <GoStar />
                          賣家資訊
                        </a>
                        <a data-scroll href="#mm3">
                          <br />
                          <GoStar />
                          折扣活動
                        </a>
                        <a data-scroll href="#mm4">
                          <br />
                          <GoStar />
                          商品訊息
                        </a>
                        <a data-scroll href="#mm5">
                          <br />
                          <GoStar />
                          客戶服務
                          <p />
                        </a>
                      </div>
                      <p className="text-white">123</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-xs-12 asdasd">
                <div class="tyu">
                  <Breadcrumb />
                </div>
                <div className="row">
                  <div className="col-12">
                    {/* <img
                      className="d-block h-40 w-100 "
                      src={img004}
                      alt="slide 004"
                    /> */}

                    {/* <div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                      <img src={img002} alt="slide 004" />
                      <div class="team-hover">
                        <div class="team-item text-white">
                          <h4>實惠的價格</h4>
                        </div>
                      </div>
                    </div> */}
                    <div class="about-info">
                      <div
                        class="section-title wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <h4>我們的故事</h4>
                        <h2>~人生無法買到安全感，但可買到咖啡~</h2>
                      </div>

                      <div class="wow fadeInUp" data-wow-delay="0.4s">
                        <p>
                          吉利馬札羅，專業咖啡網站，為您挑選最適合的商品，以滿足所有咖啡愛好者的味蕾。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                      {/* <img
                      className="d-block h-40 w-100 "
                      src={img004}
                      alt="slide 004"
                    /> */}

                      <div
                        class="team-thumb wow fadeInUp rounded-circle"
                        data-wow-delay="0.2s"
                      >
                        <img
                          src={img002}
                          class="d-block w-100"
                          alt="slide 004"
                        />
                        <div class="team-hover">
                          <div class="team-item text-white">
                            <h4>您好，我是創辦人</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-3"></div>

                    <div className="col-12 mt-3">
                      <div class="about-info">
                        <div
                          class="section-title wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <h2>~喝一口的美好~</h2>
                        </div>

                        <div class="wow fadeInUp" data-wow-delay="0.4s">
                          <p>
                            咖啡愛好者即便處在一個陌生的城市裡，聞到咖啡香，心便感覺安定；走進咖啡店無數次，盯著價目表許久，最後還是會決定點那杯每天都在喝的咖啡。他們迷戀香氣，絲毫不厭倦。
                          </p>
                        </div>
                      </div>
                      <div className="row mt-3 ">
                        <div className="col-12 mt-3">
                          <h2>聯絡方式</h2>
                          <p>透過下列三種方式，能將您的寶貴意見傳達給我們。</p>
                        </div>
                        <div className="col-lg-4 col-md-6 special-grid drinks">
                          <div className="gallery-single fix">
                            <ProductListItem>
                              <img
                                className="d-block h-100 w-100 "
                                src={require('../img/disc/phone.jpg')}
                                alt="slide 004"
                              />
                            </ProductListItem>
                            <div>
                              <h4 align="center">電話</h4>
                            </div>
                            <div className="why-text" align="center">
                              <p>我們的客服專線</p>
                              <h4>+44 345 678 903</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 special-grid drinks">
                          <div className="gallery-single fix">
                            <ProductListItem>
                              <img
                                className="d-block h-100 w-100 "
                                src={require('../img/disc/mail.jpg')}
                                alt="slide 004"
                              />
                            </ProductListItem>
                            <div>
                              <h4 align="center">信箱</h4>
                            </div>
                            <div className="why-text" align="center">
                              <p>我們的客服信箱</p>
                              <h4> adobexd@mail.com</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 special-grid drinks">
                          <div className="gallery-single fix">
                            <ProductListItem>
                              <img
                                className="d-block h-100 w-100 "
                                src={require('../img/disc/web.jpg')}
                                alt="slide 004"
                              />
                            </ProductListItem>
                            <div>
                              <h4 align="center">網站</h4>
                            </div>
                            <div className="why-text" align="center">
                              <p>網站的客服專區</p>
                              <h4>
                                {' '}
                                透過下方的「客服專區」，亦能將您的寶貴意見傳達給我們
                              </h4>
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
                      {/* <div class="contact-imfo-box">
                        <div class="container">
                          <div class="row">
                            <div class="col-12">
                              <h4>聯絡方式</h4>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                              <div class="overflow-hidden">
                                <h4>電話</h4>
                                <p class="lead">+44 345 678 903</p>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="overflow-hidden">
                                <h4>信箱</h4>
                                <p class="lead">adobexd@mail.com</p>
                              </div>
                            </div>
                            <div class="col-md-2"></div>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    {/* <div className="col-6"> */}
                    {/* <img
                      className="d-block h-40 w-100 "
                      src={img004}
                      alt="slide 004"
                    /> */}

                    {/* <div
                        class="team-thumb wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <img src={img002} alt="slide 004" />
                        <div class="team-hover">
                          <div class="team-item text-white">
                            <h4>您好，我是副創辦人</h4>
                          </div>
                        </div>
                      </div> */}
                    {/* </div> */}
                  </div>
                </div>
                <div className="qt-background mt-3">
                  <div className="text-white " align="center">
                    <h3>"常見的問題，確實的回答"</h3>
                  </div>
                </div>

                <div
                  className="flip-container mt-3"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="flipper second-service" align="center">
                    <div className="front">
                      <div className="icon">
                        <img src={img004} alt=""></img>
                      </div>
                      <p>Q:吉利馬札羅是做甚麼的網站?</p>
                    </div>
                    <div id="mm1"></div>
                    <div className="back">
                      <p>
                        本站致力推廣咖啡與相關知識，使大眾能夠輕易地找到適合自己的咖啡。且作為一個平台，能夠媒合咖啡飲品及相關器具買賣方，使彼此的需求得到滿足。
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="flip-container mt-3"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="flipper third-service" align="center">
                    <div className="front">
                      <div className="icon">
                        <img src={img004} alt=""></img>
                      </div>
                      <p>Q:如何了解商品賣家的相關訊息?</p>
                    </div>
                    <div id="mm2"></div>
                    <div className="back">
                      <p>
                        請參閱本店網站首頁的「店家介紹」，裡面有賣家的基本介紹與聯絡方式。
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flip-container mt-3"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="flipper fourth-service" align="center">
                    <div className="front">
                      <div className="icon">
                        <img src={img004} alt=""></img>
                      </div>
                      <p>Q:貴站有折扣活動嗎?</p>
                    </div>
                    <div id="mm3"></div>
                    <div className="back">
                      <p>
                        對於本站會員，提供庫碰劵折扣，能為您欲買的商品提供不定的折數。
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flip-container mt-3"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="flipper first-service" align="center">
                    <div className="front">
                      <div className="icon">
                        <img src={img004} alt=""></img>
                      </div>
                      <p>Q: 如何取得更詳細的產品訊息??</p>
                    </div>
                    <div id="mm4"></div>
                    <div className="back">
                      <p>
                        點選我們的首頁中的產品資訊，裡面有產品列表，對有興趣的產品點進去就有更詳細的產品訊息。
                      </p>
                    </div>
                  </div>
                </div>

                {/* <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} /> */}

                {/* 聯絡我們:客服表單 */}
                <div id="mm5"></div>
                <div className="qt-background3 mt-3">
                  <div className="text-white " align="center">
                    <h3>"客戶服務，傳達您的意見"</h3>
                  </div>
                </div>
                <Card
                  className="cramCard"
                  id="contact"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <Card.Body>
                    <Card.Title>聯絡我們</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      您的寶貴意見是我們成長的動力!
                    </Card.Subtitle>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group as={Row} controlId="formEmail">
                        <Form.Label column sm="2">
                          電子信箱：
                        </Form.Label>
                        <Col sm="6">
                          <Form.Control
                            value={checked ? Email : cramEmail}
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setCramEmail(e.target.value)}
                            readOnly={checked ? true : false}
                            required
                          />
                        </Col>
                        <Col sm="4">
                          <FormControlLabel
                            control={
                              <Checkbox
                                color="primary"
                                inputProps={{
                                  'aria-label': 'secondary checkbox',
                                }}
                                className="cramFillEmail"
                                id={`default-checkbox`}
                                // label={`同會員Email`}
                                disabled={
                                  typeof memberID !== 'undefined' ? false : true
                                }
                                checked={checked}
                                onChange={doEmail}
                              />
                            }
                            label="同會員email"
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group controlId="formTextarea">
                        <Form.Label
                          style={{ float: 'left', marginLeft: '2.5px' }}
                        >
                          您的意見：
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="10"
                          required
                          value={cramContent}
                          onChange={(e) => setCramContent(e.target.value)}
                        />
                      </Form.Group>
                      <Button type="submit">送出意見</Button>
                      <Button
                        className=" btn-success text-white m-3"
                        variant="secondary"
                        data-scroll
                        href="#mm0"
                      >
                        謝了，我想回上面
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>

                {/* 聯絡我們:客服表單 */}
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
