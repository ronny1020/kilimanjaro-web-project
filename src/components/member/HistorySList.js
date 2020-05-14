import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// JS日期格式轉換
import DateStyle from '../../components/DateStyle'
import Notice from '../Notice'

function HistorySList(props) {
  const isNull = (currentValue) => currentValue === null
  //已寄送之訂單: shipdate != null && vaild = 1
  //   console.log(props.input)
  const historyArray = props.input
  const listItems = historyArray.Orders.map((item) =>
    item.ShippedDate !== null && item.valid === 1 ? (
      <ListGroup.Item
        action
        key={item.OrderID.toString()}
        style={{ textAlign: 'center' }}
      >
        <Row>
          <Col onClick={showDetails} id={item.OrderID.toString()}>
            {item.OrderID.toString()}
          </Col>
          <Col onClick={showDetails} id={item.OrderID.toString()}>
            {item.RecipientName}
          </Col>
          <Col onClick={showDetails} id={item.OrderID.toString()}>
            {DateStyle(new Date(item.OrderDate).toString())}
          </Col>
          <Col onClick={showDetails} id={item.OrderID.toString()}>
            {DateStyle(new Date(item.ShippedDate).toString())}
          </Col>
        </Row>

        {/* 訂單詳細內容: map中有map */}
        <ListGroup
          id={'detail' + item.OrderID.toString()}
          style={{ display: 'none' }}
          variant="flush"
        >
          <hr />
          <ListGroup.Item style={{ textAlign: 'center', fontWeight: 'bolder' }}>
            <Row>
              <Col>品名</Col>
              <Col>數量</Col>
              <Col>單價</Col>
            </Row>
          </ListGroup.Item>
          {item.products.map((pitem) => (
            <ListGroup.Item
              style={{ textAlign: 'center', fontWeight: 'bolder' }}
            >
              <Row>
                <Col>
                  <Link to={'/product/' + pitem.productID}>
                    {pitem.ProductName}
                  </Link>
                </Col>

                <Col>{pitem.Quantity}</Col>
                <Col>{pitem.OrderPrice}</Col>
                {/* <Col>總價：{pitem.Quantity * pitem.OrderPrice}</Col> */}
              </Row>
            </ListGroup.Item>
          ))}
          <ListGroup.Item style={{ textAlign: 'right' }}>
            <Row>
              <Col>
                紅利點數折抵
                {item.rewardsPoints === null ? 0 : item.rewardsPoints}
                元，折扣券折抵
                {item.minus === null ? 0 : item.minus}
                元，總計：{item.totalPrice}元整
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </ListGroup.Item>
    ) : null
  )

  //點擊顯示訂單詳細內容
  function showDetails(props) {
    console.log(props.target.id)
    var targetList = document.getElementById('detail' + props.target.id)
    targetList.style.display === 'none'
      ? (targetList.style.display = '')
      : (targetList.style.display = 'none')
  }

  return (
    <>
      <ListGroup style={{ marginBottom: '15px' }} variant="flush">
        {listItems.every(isNull) === true ? (
          <Notice message={'沒有可顯示的清單。'} />
        ) : (
          <ListGroup.Item style={{ textAlign: 'center', fontWeight: 'bolder' }}>
            <Row>
              {/* <Col xs lg="2">
                圖示
              </Col> */}
              <Col>訂單編號：</Col>
              <Col>收件人：</Col>
              <Col>結帳日期：</Col>
              <Col>出貨日期：</Col>
            </Row>
          </ListGroup.Item>
        )}
        {listItems}
      </ListGroup>
    </>
  )
}

export default HistorySList
