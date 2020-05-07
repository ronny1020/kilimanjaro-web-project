import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Question from '../components/seller/Question'

import LobbyTitle from '../components/member/LobbyTitle'
import '../styles/my.scss'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'
import img002 from '../img/disc/about-image.jpg'
import img004 from '../img/disc/heart-icon.png'

/* 聯絡我們:客服表單 import */

import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import LoginValidate from '../components/LoginValidate'
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

  const inputArray = {
    title: '常見問題',
    網站定位: {
      link: '/lobby/edit',
    },

    新手教學: {
      link: '/lobby/coupon',
    },
    折扣活動: {
      link: '/lobby/history',
    },
    購物車上限: {
      link: '/lobby/favorite',
    },
  }
  // let jsonInput = {
  //   title: '網站定位',
  //   content:
  //     '本店致力於發揚咖啡文化及推廣咖啡相關知識，使一班大眾能夠輕易地找到適合自己的咖啡。且作為一個平台，能夠媒合對咖啡有興趣的民眾及想推廣咖啡及相關器具的店家，使雙方達到最大的利益。',
  //   color: 'primary',
  //   id: 'seller01',
  // }
  return (
    <>
      <div className="all-page-title page-breadcrumb">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 " align="center">
              {/* <h1>賣家介紹</h1> */}
              <p className="text-white">~關於我們網站，與常見的問題~</p>
            </div>
          </div>
          <LobbyTitle string={'關於我們'} />

          <div className="container bg-secondary">
            <br />

            <div className="row">
              <div className="col-4 qweqwe" align="center">
                <Sidebar input={inputArray} />

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
                <Breadcrumb />
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
                          咖啡愛好者即便處在一個陌生的城市裡，聞到咖啡香，心便感覺安定；走進咖啡店無數次，盯著價目表許久，最後還是會決定點那杯每天都在喝的咖啡。他們迷戀香氣，絲毫不厭倦。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {/* <img
                      className="d-block h-40 w-100 "
                      src={img004}
                      alt="slide 004"
                    /> */}

                      <div
                        class="team-thumb wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <img src={img002} alt="slide 004" />
                        <div class="team-hover">
                          <div class="team-item text-white">
                            <h4>您好，我是創辦人</h4>
                          </div>
                        </div>
                      </div>
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

                    <div className="back">
                      <p>
                        本站致力於發揚咖啡文化及推廣咖啡相關知識，使一班大眾能夠輕易地找到適合自己的咖啡。且作為一個平台，能夠媒合對咖啡有興趣的民眾及想推廣咖啡及相關器具的店家，使彼此的需求接得到滿足。
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
