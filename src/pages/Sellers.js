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
import { FaWikipediaW } from 'react-icons/fa'

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
            <div className="row mt-3">
              <div className="col-12" align="center">
                <div class="container bg-white pt-3 m-6 ">
                  <h1>賣家故事</h1>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-4">
                <div class="container bg-white pt-3 m-6 ">
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
              <div class="col-8">
                <div class="container bg-white pt-3 m-6 ">
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
            <div class="row mt-3">
              <div class="col-4">
                <div class="container bg-white pt-3 m-6 ">
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
              <div class="col-8">
                <div class="container bg-white pt-3 m-6 ">
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
                <div class="container bg-white pt-3 m-6 ">
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
                <button type="button" class="btn btn-primary">
                  想看更多
                </button>
              </div>
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
