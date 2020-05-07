import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HistoryCList(props) {
  //已取消之訂單: vaild = 0
  //   console.log(props.input)
  const historyArray = props.input
  const listItems = historyArray.Orders.map((item) =>
    //三元表示式: 太神啦= =
    item.valid === 0 ? (
      <ListGroup.Item action key={item.OrderID.toString()}>
        <div onClick={showDetails} id={item.OrderID.toString()}>
          訂單編號：{item.OrderID.toString()}
          <br />
          收件人：{item.RecipientName}
          <br />
          下單日期：{item.OrderDate}
        </div>

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
        {listItems}
      </ListGroup>
    </>
  )
}

export default HistoryCList
