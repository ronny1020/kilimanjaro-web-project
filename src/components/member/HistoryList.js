import React from 'react'
import { ListGroup, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HistoryList(props) {
  //   console.log(props.input)
  const historyArray = props.input
  const listItems = historyArray.Orders.map((item) => (
    <ListGroup.Item action key={item.OrderID.toString()}>
      <Link to="#" onClick={showDetails} id={item.OrderID.toString()}>
        訂單編號：{item.OrderID.toString()}
        <br />
        收件人：{item.RecipientName}
        <br />
        下單日期：{item.OrderDate}
      </Link>
      <Button
        style={{ float: 'right' }}
        variant="danger"
        onClick={handleCancel}
      >
        取消訂單
      </Button>

      {/* 訂單詳細內容: map中有map */}
      <ListGroup
        id={'detail' + item.OrderID.toString()}
        style={{ display: 'none' }}
        variant="flush"
      >
        <hr />
        <ListGroup.Item style={{ textAlign: 'center', fontWeight: 'bolder' }}>
          訂單明細：
        </ListGroup.Item>
        {item.products.map((pitem) => (
          <ListGroup.Item>
            <Row>
              <Link to={'/product/' + pitem.productID}>
                <Col>品名：{pitem.ProductName}</Col>
              </Link>
              <Col>數量：{pitem.Quantity}</Col>
              <Col>單價：{pitem.OrderPrice}</Col>
              <Col>總價：{pitem.Quantity * pitem.OrderPrice}</Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </ListGroup.Item>
  ))

  //取消訂單
  function handleCancel() {
    console.log('do cancel.')
  }

  //點擊顯示訂單詳細內容
  function showDetails(props) {
    // console.log(props.target.id)
    var targetList = document.getElementById('detail' + props.target.id)
    targetList.style.display === 'none'
      ? (targetList.style.display = '')
      : (targetList.style.display = 'none')
  }

  return (
    <>
      <ListGroup style={{ marginBottom: '15px' }} variant="flush">
        {listItems}
      </ListGroup>
    </>
  )
}

export default HistoryList
