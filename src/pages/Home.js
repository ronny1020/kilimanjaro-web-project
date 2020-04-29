import React from 'react'
import HomeCarousel from '../components/Home/HomeCarousel'
import { Button } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'

import img002 from '../img/home/carousel/002.jpg'
import ProductListItem from '../components/ProductList/productListItem'

import disc1 from '../img/disc/disc1.jpg'

function Home() {
  return (
    <>
      <HomeCarousel />
      <div id="slides" className="cover-slides">
        <div className="text-center mt-3">
          <div className="container">
            <div className="row ">
              <div className="col-md-4 mt-3">
                <Card style={{ width: '24rem' }}>
                  <Card.Img variant="top" src={img002} />
                  {/* <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body> */}
                </Card>
                {/* <img className="d-block h-100 w-100 " src={img002} alt="" /> */}
              </div>

              <div className="col-md-8 mt-3 bg-secondary">
                <h1 className="m-b-20 ">
                  <strong>
                    歡迎光臨 <br /> 吉利馬札羅
                  </strong>
                </h1>
                <p className="m-b-40">
                  這裡是咖啡愛好者的販賣與購買平台，希望您能有好的用戶體驗{' '}
                  <br />
                  任何咖啡相關商品，都能在此尋找，希望有機會發現您的最愛
                </p>
                <p>
                  <Button>查看商品</Button>
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

        <div className="menu-box ">
          <div className="container mt-3">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2>最新消息</h2>
                  <p>關於商品或站方的最新資訊，您能在此快速了解所有最新消息</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="special-menu text-center">
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" href="#">
                      全部消息
                    </Button>
                    <Button variant="secondary" href="#">
                      關於吉利馬札羅
                    </Button>
                    <Button variant="secondary" href="#">
                      關於商品
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
            <div className="row special-list">
              <div className="col-4 ">
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
              </div>
              <div className="col-4 ">
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
              </div>
              <div className="col-4 ">
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
              </div>
              {/* <div className="col-lg-4 col-md-6 special-grid drinks">
                <div className="gallery-single fix">
                  <img src={img002} className="img-fluid" alt="Image" />
                  <div className="why-text">
                    <h4>新產品上市</h4>
                    <p>Sed id magna vitae eros sagittis euismod.</p>
                    <h5> $7.79</h5>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-4 col-md-6 special-grid drinks">
                <div className="gallery-single fix">
                  <img src={img002} className="img-fluid" alt="Image" />
                  <div className="why-text">
                    <h4>Special Drinks 2</h4>
                    <p>Sed id magna vitae eros sagittis euismod.</p>
                    <h5> $9.79</h5>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-4 col-md-6 special-grid drinks">
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
    </>
  )
}

export default Home
