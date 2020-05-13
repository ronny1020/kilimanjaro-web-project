import React from 'react'
import { Carousel } from 'react-bootstrap'
import img001 from '../../img/home/carousel/001.jpg'
import img002 from '../../img/home/carousel/002.jpg'
import img003 from '../../img/home/carousel/003.jpg'
import img004 from '../../img/home/carousel/004.jpg'
import img005 from '../../img/home/carousel/005.jpg'
import img006 from '../../img/home/carousel/006.jpg'
import Typed from 'react-typed'

//測試gif & mp4
// import gif001 from '../../img/home/carousel/001.mp4'

import '../../styles/my.scss'

function HomeCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={img001}
            alt="slide 001"
          />
          <Carousel.Caption>
            <h4>
              {' '}
              <strong>
                <Typed
                  strings={[
                    '歡迎光臨吉利馬札羅咖啡店',
                    '希望您能有愉快的消費體驗',
                  ]}
                  typeSpeed={60}
                  backSpeed={70}
                  loop
                />
                <br />
              </strong>
            </h4>
          </Carousel.Caption>

          {/* <iframe
            title="null"
            className="d-block w-100 carouselImage"
            src={gif001}
          ></iframe> */}
          <Carousel.Caption> </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={img002}
            alt="slide 002"
          />
          <Carousel.Caption>
            <h4>
              {' '}
              <strong>
                <Typed
                  strings={[
                    '歡迎光臨吉利馬札羅咖啡店',
                    '希望您能有愉快的消費體驗',
                  ]}
                  typeSpeed={60}
                  backSpeed={70}
                  loop
                />
                <br />
              </strong>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>{' '}
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={img003}
            alt="slide 003"
          />
          <Carousel.Caption>
            <h4>
              {' '}
              <strong>
                <Typed
                  strings={[
                    '歡迎光臨吉利馬札羅咖啡店',
                    '希望您能有愉快的消費體驗',
                  ]}
                  typeSpeed={60}
                  backSpeed={70}
                  loop
                />
                <br />
              </strong>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>{' '}
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={img004}
            alt="slide 004"
          />
          <Carousel.Caption>
            <h1>
              {' '}
              <strong>
                <Typed
                  strings={[
                    '歡迎光臨吉利馬札羅咖啡店',
                    '希望您能有愉快的消費體驗',
                  ]}
                  typeSpeed={60}
                  backSpeed={70}
                  loop
                />
                <br />
              </strong>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>{' '}
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={img005}
            alt="slide 005"
          />
          <Carousel.Caption>
            <h4>
              {' '}
              <strong>
                <Typed
                  strings={[
                    '歡迎光臨吉利馬札羅咖啡店',
                    '希望您能有愉快的消費體驗',
                  ]}
                  typeSpeed={60}
                  backSpeed={70}
                  loop
                />
                <br />
              </strong>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={img006}
            alt="slide 006"
          />
          <Carousel.Caption>
            <h4>
              {' '}
              <strong>
                <Typed
                  strings={[
                    '歡迎光臨吉利馬札羅咖啡店',
                    '希望您能有愉快的消費體驗',
                  ]}
                  typeSpeed={60}
                  backSpeed={70}
                  loop
                />
                <br />
              </strong>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default HomeCarousel
