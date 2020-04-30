import React from 'react'
import Question from '../components/seller/Question'

import LobbyTitle from '../components/member/LobbyTitle'
import '../styles/my.scss'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'

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
  let jsonInput = {
    title: '網站定位',
    content:
      '本店致力於發揚咖啡文化及推廣咖啡相關知識，使一班大眾能夠輕易地找到適合自己的咖啡。且作為一個平台，能夠媒合對咖啡有興趣的民眾及想推廣咖啡及相關器具的店家，使雙方達到最大的利益。',
    color: 'primary',
    id: 'seller01',
  }
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
                <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} />
                <Question input={jsonInput} />
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
