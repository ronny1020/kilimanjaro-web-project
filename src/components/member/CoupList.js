import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CoupList(props) {
  //   console.log(props)
  const couArray = props.input
  const listItems = couArray.map((item) => (
    <Link to="#">
      <ListGroup.Item action key={item.couponMapId.toString()}>
        優惠券名稱：{item.coupon.couponName}
        <br />
        消費滿{item.coupon.limitation}可以使用
        <br />
        使用期限：至{item.coupon.cpendDate}
      </ListGroup.Item>
    </Link>
  ))
  return (
    <>
      <ListGroup variant="flush">{listItems}</ListGroup>
    </>
  )
}

export default CoupList
