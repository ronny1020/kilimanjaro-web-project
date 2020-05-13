import React from 'react'
import { Card } from 'react-bootstrap'

import img1 from '../../img/disc/rand1.svg'
import img2 from '../../img/disc/rand2.svg'
import img3 from '../../img/disc/rand3.svg'
import img4 from '../../img/disc/rand4.svg'
import img5 from '../../img/disc/rand5.svg'
// import Test from './Test'

function LeftDiv() {
  const text1 =
    '咖啡屬植物的果實大小類似櫻桃，咖啡豆即為其中的核果。將咖啡豆烘焙加工後再磨碎成咖啡粉，即可烹製咖啡。'
  const text2 =
    '咖啡沖泡時若水溫過低，咖啡豆中的風味不能充分提取出來，易出現令人厭惡的酸味；水溫過高，萃取過度，口味惡化而常常偏苦。'
  const text3 =
    '咖啡因是世界上最普遍被使用的精神藥品，因此也有一定的成癮性。在北美，90%成年人每天都會需要攝食咖啡因。'
  const text4 =
    '咖啡樹原產於非洲亞熱帶地區，以及南亞的一些島嶼。現在咖啡樹種植遍布超過70國，主要在美洲、東南亞、印度等赤道地區。'
  const text5 =
    '全球70%的咖啡豆是由規模較小的農園所栽種，然而買方卻掌握在大公司與數間大型咖啡公司間，以壓倒性的姿態掌握價格決定權。'

  const randomArray = [
    {
      text: text1,
      file: img1,
    },
    {
      text: text2,
      file: img2,
    },
    {
      text: text3,
      file: img3,
    },
    {
      text: text4,
      file: img4,
    },
    {
      text: text5,
      file: img5,
    },
  ]
  var result = randomArray[Math.floor(Math.random() * (randomArray.length - 1))]

  return (
    <>
      <div className="col-sm-6 bg-success" style={{ height: '80vh' }}>
        <Card
          style={{
            top: '8vh',
            backgroundColor: 'transparent',
            border: '0px',
            marginLeft: '5vw',
            marginRight: '5vw',
          }}
        >
          <Card.Title style={{ textAlign: 'center' }}>
            <h1>你知道嗎？</h1>
          </Card.Title>
          <Card.Img
            variant="top"
            src={result.file}
            style={{ height: '30vh' }}
          />
          <Card.Body>
            <Card.Text>
              <p>{result.text}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default LeftDiv
