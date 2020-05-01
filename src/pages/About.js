import React from 'react'
// import Question from '../components/seller/Question'

import LobbyTitle from '../components/member/LobbyTitle'
import '../styles/my.scss'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'
import img002 from '../img/disc/about-image.jpg'
import img004 from '../img/disc/heart-icon.png'

function OnSale() {
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
              <p className="text-white">~常見的問題，老實的回答~</p>
            </div>
          </div>
          <LobbyTitle string={'關於我們'} />

          <div className="container bg-secondary">
            <br />

            <div className="row">
              <div className="col-8">
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
                        <img src={img002} alt="slide 004" />
                        <div class="team-hover">
                          <div class="team-item text-white">
                            <h4>您好，我是創辦人</h4>
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
                        <img src={img002} alt="slide 004" />
                        <div class="team-hover">
                          <div class="team-item text-white">
                            <h4>您好，我是副創辦人</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="qt-background mt-3">
                  <div className="text-white " align="center">
                    "常見問題"
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
                  <div className="flipper fourth-service" align="center">
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
                  <div className="flipper first-service" align="center">
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

                {/* <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} /> */}
              </div>

              <div className="col-4" align="center">
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
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default OnSale
