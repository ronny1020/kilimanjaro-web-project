import React, { useState, useEffect } from 'react'
// import $ from 'jquery'
import HomeCarousel from '../components/Home/HomeCarousel'
import HomeCarousel2 from '../components/Home/HomeCarousel2'
import { Button } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import JqueryComClass from '../components/seller/JqueryComClass'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'
import '../../node_modules/video-react/dist/video-react.css'
import FadeIn from 'react-fade-in'

// import { Player } from 'video-react'

// import img002 from '../img/home/carousel/002.jpg'
import ProductListItem from '../components/ProductList/productListItem'

// import disc1 from '../img/disc/coffee2.jpg'
import '../styles/my.scss'
import '../styles/animate.scss'

function Home() {
  const [i, seti] = useState(1)
  const [sName, setsName] = useState('新品上市')
  const [sCountry, setsCountry] = useState('深烘培咖啡豆')
  const [sAddress, setsAddress] = useState('售價:NT.80')
  const [sName2, setsName2] = useState('新品上市')
  const [sCountry2, setsCountry2] = useState('吉利馬札羅特調咖啡')
  const [sAddress2, setsAddress2] = useState('售價:NT.65')
  const [sName3, setsName3] = useState('新品上市')
  const [sCountry3, setsCountry3] = useState('三合一咖啡組')
  const [sAddress3, setsAddress3] = useState('售價:NT.45')

  useEffect(() => {
    fetch('http://localhost:6001/sellersApi')
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        //記得在JSX中使用JS變數要用花括號包著
        // lists.push(<li>{arrLists[i]}</li>)
      })
  }, [i])

  console.log(i)
  var a = String(i)

  return (
    <>
      <JqueryComClass />
      {/* <Player
        fluid={false}
        muted={true}
        autoPlay={true}
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      /> */}
      <FadeIn>
        <div class="cvb">
          <HomeCarousel />
        </div>
        <div class="cvb2">
          <HomeCarousel2 />
        </div>

        <div id="slides" className="cover-slides">
          <div className="text-center mt-3">
            <div className="container">
              <div className="row " align="center">
                <div className="col-md-4 mt-3">
                  <Card style={{ width: '24rem' }}>
                    <video
                      id="my-player"
                      class="video-js "
                      // controls
                      preload="auto"
                      loop
                      autoPlay
                      muted
                      poster="https://mixkit.imgix.net/videos/preview/mixkit-person-making-a-v60-pour-over-coffee-from-above-88005-0.jpg"
                      width="382"
                      height="300"
                      // width="375"
                      // height="300"
                      data-vscid="zk05vyzcr"
                    >
                      <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-person-making-a-v60-pour-over-coffee-from-above-88005-large.mp4"
                        type="video/mp4"
                      ></source>
                      <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-person-making-a-v60-pour-over-coffee-from-above-88005-large.webm"
                        type="video/webm"
                      ></source>
                      <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-person-making-a-v60-pour-over-coffee-from-above-88005-large.ogg"
                        type="video/ogg"
                      ></source>
                      <p class="vjs-no-js">
                        To view this video please enable JavaScript, and
                        consider upgrading to a web browser that
                        <a
                          href="http://videojs.com/html5-video-support/"
                          // target="_blank"
                        >
                          supports HTML5 video
                        </a>
                      </p>
                    </video>
                    {/* <Card.Img
                    variant="top"
                    src={require('../img/disc/coffeehome.jpg')}
                  /> */}

                    {/* <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body> */}
                  </Card>
                  {/* <img className="d-block h-100 w-100 " src={img002} alt="" /> */}
                </div>

                <div className="col-md-8 mt-3 bg-secondary">
                  <h1 className="m-b-20 ">
                    <p className="text-secondary">123</p>
                    <strong>
                      <Typed
                        strings={[
                          '各種現烘咖啡豆',
                          '各類沖泡咖啡粉',
                          '各式咖啡商品應有盡有',
                        ]}
                        typeSpeed={60}
                        backSpeed={70}
                        loop
                      />
                      <br />
                    </strong>
                  </h1>

                  <p className="m-b-40">
                    這裡是咖啡愛好者的販賣與購買平台，希望您能有好的用戶體驗{' '}
                    <br />
                    任何咖啡相關商品，都能在此尋找，希望有機會發現您的最愛
                  </p>

                  <Typed
                    strings={['尋找咖啡', '找尋樂趣', '尋找一個放鬆的好去處']}
                    typeSpeed={70}
                    backSpeed={80}
                    attr="placeholder"
                    loop
                  >
                    <input type="text" />
                  </Typed>
                  <p>
                    <Button className="mt-3">
                      {' '}
                      <Link className="text-white" to="/productList">
                        查看商品
                      </Link>
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="qt-box qt-background">
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-left">
                <p className="lead ">
                  " If you're not the one cooking, stay out of the way and
                  compliment the chef. "
                </p>
                <span className="lead">Michael Strahan</span>
              </div>
            </div>
          </div>
        </div> */}
          <div className="qt-background mt-3">
            <div className="text-white" align="center">
              <h3>"最好的體驗，最棒的香味，完美的午後時光"</h3>
            </div>
          </div>
          <div className="menu-box ">
            <div className="container mt-3">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-title text-center">
                    <h2>最新消息</h2>
                    <p>
                      關於商品或站方的最新資訊，您能在此快速了解所有最新消息
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="special-menu text-center">
                    {/* <button className="button-group filter-button-group">
                    123
                  </button> */}
                    {/* <button className="btn btn-lg btn-circle btn-outline-new-white">
                    123
                  </button> */}

                    <ButtonGroup aria-label="Basic example">
                      {/* <Button variant="secondary" href="#">
                      全部消息
                    </Button> */}
                      <Button
                        id="giri"
                        variant="secondary"
                        href="#"
                        onClick={() => {
                          seti(2)
                          setsName('客服招募')
                          setsCountry('本站正職客服人員')
                          setsAddress(
                            '現時誠摯招募客服人員，月薪28000元，意者請至1x4人力網站投履歷'
                          )
                          setsName2('消毒公告')
                          setsCountry2('肺炎防疫措施')
                          setsAddress2(
                            '為因應武漢肺炎擴散，本公司將進行每周全面消毒，以確保安全與衛生'
                          )
                          setsName3('維護公告')
                          setsCountry3('網站與資料庫維護')
                          setsAddress3(
                            '5月25日將進行網站維護與資料庫，將暫停網站運作一天'
                          )
                        }}
                      >
                        關於吉利馬札羅
                      </Button>
                      <Button
                        id="shop"
                        variant="secondary"
                        href="#"
                        onClick={() => {
                          seti(1)
                          setsName('新品上市')
                          setsCountry('深烘培咖啡豆')
                          setsAddress('售價:NT.80')
                          setsName2('新品上市')
                          setsCountry2('吉利馬札羅特調咖啡')
                          setsAddress2('售價:NT.65')
                          setsName3('新品上市')
                          setsCountry3('三合一咖啡組')
                          setsAddress3('售價:NT.45')
                        }}
                      >
                        關於商品
                      </Button>
                      <Button variant="secondary" id="nothank">
                        謝了，我不想知道
                      </Button>
                    </ButtonGroup>

                    {/* <div className="button-group filter-button-group">
                    <button className="active" data-filter="*">
                      All
                    </button>
                    <button data-filter=".drinks">Drinks</button>
                    <button data-filter=".lunch">Lunch</button>
                    <button data-filter=".dinner">Dinner</button>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="row special-list" id="nothank2">
                {/* <div className="col-4 ">
                <ProductListItem>
                  <img
                    className="d-block h-100 w-100 "
                    src={disc1}
                    alt="slide 004"
                  />
                </ProductListItem>

                <div className="why-text" align="center">
                  <h4>新產品上市</h4>
                  <p>深烘培咖啡粉</p>
                </div>
              </div> */}
                {/* <div className="col-4 ">
                <ProductListItem>
                  <img
                    className="d-block h-100 w-100 "
                    src={disc1}
                    alt="slide 004"
                  />
                </ProductListItem>
                <div className="why-text" align="center">
                  <h4>新產品上市</h4>
                  <p>深烘培咖啡粉</p>
                </div>
              </div> */}
                {/* <div className="col-4 ">
                <ProductListItem>
                  <img
                    className="d-block h-100 w-100 "
                    src={disc1}
                    alt="slide 004"
                  />
                </ProductListItem>
                <div className="why-text" align="center">
                  <h4>新產品上市</h4>
                  <p>深烘培咖啡粉</p>
                </div>
              </div> */}
                <div className="col-lg-4 col-md-6 special-grid drinks">
                  <div className="gallery-single fix">
                    <ProductListItem>
                      <img
                        className="d-block h-100 w-100 "
                        src={require('../img/disc/coffee_1' + a + '.jpg')}
                        alt="slide 004"
                      />
                    </ProductListItem>
                    <div className="why-text" align="center">
                      <p>{sCountry}</p>
                      <h5> {sAddress}</h5>
                    </div>
                  </div>
                  <div>
                    <h4 align="center">{sName}</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 special-grid drinks">
                  <div className="gallery-single fix">
                    <ProductListItem>
                      <img
                        className="d-block h-100 w-100 "
                        src={require('../img/disc/coffee_2' + a + '.jpg')}
                        alt="slide 004"
                      />
                    </ProductListItem>
                    <div className="why-text" align="center">
                      <p>{sCountry2}</p>
                      <h5> {sAddress2}</h5>
                    </div>
                  </div>
                  <div>
                    <h4 align="center">{sName2}</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 special-grid drinks">
                  <div className="gallery-single fix">
                    <ProductListItem>
                      <img
                        className="d-block h-100 w-100 "
                        src={require('../img/disc/coffee_3' + a + '.jpg')}
                        alt="slide 004"
                      />
                    </ProductListItem>
                    <div className="why-text" align="center">
                      <p>{sCountry3}</p>
                      <h5> {sAddress3}</h5>
                    </div>
                  </div>
                  <div>
                    <h4 align="center">{sName3}</h4>
                  </div>
                </div>

                {/* <div className="col-lg-4 col-md-6 special-grid drinks" id="qwe">
                <div className="gallery-single fix">
                  <img src={img002} className="img-fluid" alt="Image" />
                  <div className="why-text">
                    <h4>Special Drinks 2</h4>
                    <p>Sed id magna vitae eros sagittis euismod.</p>
                    <h5> $9.79</h5>
                  </div>
                </div>
              </div> */}
                {/* <div className="col-lg-4 col-md-6 special-grid lunch">
                <div className="gallery-single fix">
                  <img src={img002} className="img-fluid" alt="Image" />
                  <div className="why-text">
                    <h4>Special Drinks 3</h4>
                    <p>Sed id magna vitae eros sagittis euismod.</p>
                    <h5> $10.79</h5>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default Home
