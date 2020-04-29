import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { FaUserEdit, FaCartArrowDown, FaCreditCard } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'
import { GiTicket } from 'react-icons/gi'

function LobbyCard(props) {
  let cardImg = <></>

  switch (props.img) {
    case 'FaUserEdit':
      cardImg = (
        <>
          <FaUserEdit className="LobbycardImg" />
        </>
      )
      break
    case 'FaCartArrowDown':
      cardImg = (
        <>
          <FaCartArrowDown className="LobbycardImg" />
        </>
      )
      break
    case 'FaCreditCard':
      cardImg = (
        <>
          <FaCreditCard className="LobbycardImg" />
        </>
      )
      break
    case 'MdFavorite':
      cardImg = (
        <>
          <MdFavorite className="LobbycardImg" />
        </>
      )
      break
    case 'IoMdMail':
      cardImg = (
        <>
          <IoMdMail className="LobbycardImg" />
        </>
      )
      break
    case 'GiTicket':
      cardImg = (
        <>
          <GiTicket className="LobbycardImg" />
        </>
      )
      break
    default:
      console.log('Unknown image.')
  }

  //svg加上指定class
  let cardSVG = document.getElementsByTagName('svg')
  for (let i = 0; i < cardSVG.length; i++) {
    cardSVG[i].classList.add('card-img-top')
    cardSVG[i].classList.add('LobbycardImg')
  }

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
