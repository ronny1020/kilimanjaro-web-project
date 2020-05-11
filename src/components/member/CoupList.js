import React from 'react'
import { ListGroup, Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

function CoupList(props) {
  // console.log(props.input)
  const couArray = props.input
  const listItems = couArray.map((item) => (
    <ListGroup.Item
      action
      key={item.couponMapId.toString()}
      style={{ textAlign: 'center' }}
    >
      <Row>
        {/* <Col xs lg="2" style={{ borderRight: '0.5px solid lightgrey' }}></Col> */}
        <Col>{item.coupon.couponName}</Col>
        <Col>
          消費滿{item.coupon.limitation}可折抵{item.coupon.minus}元
        </Col>
        <Col>{item.coupon.cpendDate}</Col>
      </Row>
    </ListGroup.Item>
  ))
  return (
    <>
      <ListGroup style={{ marginBottom: '15px' }} variant="flush">
        {couArray.length === 0 ? null : (
          <ListGroup.Item style={{ textAlign: 'center', fontWeight: 'bolder' }}>
            <Row>
              {/* <Col xs lg="2">
                圖示
              </Col> */}
              <Col>名稱：</Col>
              <Col>內容：</Col>
              <Col>使用期限：</Col>
            </Row>
          </ListGroup.Item>
        )}

        {listItems}
      </ListGroup>
    </>
  )
}

export default CoupList
