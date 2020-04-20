import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom'
import LobbyTitle from '../components/member/LobbyTitle'
import Breadcrumb from '../components/Breadcrumb'
import { FaUserEdit, FaCartArrowDown, FaCreditCard } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'
import { GiTicket } from 'react-icons/gi'

import { Carousel } from 'react-bootstrap'
import ProductListItem from '../components/ProductList/productListItem'
import img001 from '../img/home/carousel/001.jpg'
import img002 from '../img/home/carousel/002.jpg'
import img003 from '../img/home/carousel/003.jpg'
import img004 from '../img/home/carousel/004.jpg'
import img005 from '../img/home/carousel/005.jpg'
import img006 from '../img/home/carousel/006.jpg'

function Sellers() {
  return (
    <>
      <LobbyTitle string={'賣家介紹'} />
      <div className="container bg-secondary">
        <br />
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-12 " align="center">
                <div class="container bg-white pt-3 m-6 ">
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
                <div class="container bg-white pt-3 m-6 ">
                  <h1>簡介</h1>
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
          </div>

          <div className="col-4" align="center">
            <li>
              <a href="#" class="scroll-link" data-id="best-offer-section">
                小農咖啡園1
              </a>
            </li>
            <li>
              <a href="#" class="scroll-link" data-id="events-section">
                小農咖啡園1
              </a>
            </li>
            <li>
              <a href="#" class="scroll-link" data-id="testimonial-section">
                小農咖啡園1
              </a>
            </li>
            <li>
              <a href="#" class="scroll-link" data-id="services-section">
                小農咖啡園1
              </a>
            </li>
            <li>
              <a href="#" class="scroll-link" data-id="contact-section">
                小農咖啡園1
              </a>
            </li>
            <img src="../../images/ad1.png" alt="ad1" width="80%"></img>
            <br />
            <img src="../../images/ad2.png" alt="ad2" width="80%"></img>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

export default Sellers
