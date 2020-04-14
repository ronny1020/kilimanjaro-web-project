import React from 'react'
import { Carousel } from 'react-bootstrap'
import img001 from '../../img/home/carousel/001.jpg'
import img002 from '../../img/home/carousel/002.jpg'
import img003 from '../../img/home/carousel/003.jpg'
import img004 from '../../img/home/carousel/004.jpg'
import img005 from '../../img/home/carousel/005.jpg'
import img006 from '../../img/home/carousel/006.jpg'

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
    </>
  )
}

export default HomeCarousel
