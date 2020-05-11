import React from 'react'
import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

// import { FaUserEdit,  FaCreditCard } from 'react-icons/fa'
// import { MdFavorite } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'
// import { GiTicket } from 'react-icons/gi'
import {
  FaUserEdit,
  FaTicketAlt,
  FaHistory,
  FaHeart,
  FaCartArrowDown,
} from 'react-icons/fa'

function LobbyCard(props) {
  let cardImg = <></>
  const svgStyle = {
    marginTop: '1em',
    color: '#fab5b5',
    fontSize: '2.5em',
  }

  switch (props.img) {
    case 'FaUserEdit':
      cardImg = (
        <>
          <FaUserEdit style={svgStyle} className="card-img-top" />
        </>
      )
      break
    case 'FaCartArrowDown':
      cardImg = (
        <>
          <FaCartArrowDown style={svgStyle} className="card-img-top" />
        </>
      )
      break
    case 'FaCreditCard':
      cardImg = (
        <>
          <FaHistory style={svgStyle} className="card-img-top" />
        </>
      )
      break
    case 'MdFavorite':
      cardImg = (
        <>
          <FaHeart style={svgStyle} className="card-img-top" />
        </>
      )
      break
    case 'IoMdMail':
      cardImg = (
        <>
          <IoMdMail style={svgStyle} className="card-img-top" />
        </>
      )
      break
    case 'GiTicket':
      cardImg = (
        <>
          <FaTicketAlt style={svgStyle} className="card-img-top" />
        </>
      )
      break
    default:
      console.log('Unknown image.')
  }

  //svg加上指定class
  //   let cardSVG = document.getElementsByTagName('svg')
  //   for (let i = 0; i < cardSVG.length; i++) {
  //     cardSVG[i].classList.add('card-img-top')
  //     cardSVG[i].classList.add('LobbycardImg')
  //   }

  return (
    <>
      <Card>
        <Link to={props.to}>
          {cardImg}
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.content}</Card.Text>
          </Card.Body>
        </Link>

        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </>
  )
}

export default LobbyCard
