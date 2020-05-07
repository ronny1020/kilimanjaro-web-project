import React from 'react'
import { ListGroup, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CancelIcon from '@material-ui/icons/Cancel'

function HistoryList(props) {
  //未寄送之訂單: shipdate = null && vaild = 1
  //   console.log(props.input)
  const historyArray = props.input
  const listItems = historyArray.Orders.map((item) =>
    item.ShippedDate === null && item.valid === 1 ? (
      <ListGroup.Item action key={item.OrderID.toString()}>
        <Row>
          <Col onClick={showDetails} id={item.OrderID.toString()}>
            訂單編號：{item.OrderID.toString()}
            <br />
            收件人：{item.RecipientName}
            <br />
            下單日期：{item.OrderDate}
          </Col>
          <Col sm={2}>
            {/* 按鈕內的元件點擊時會讀不到按鈕id值 */}
            <Button
              id={'cancel' + item.OrderID.toString()}
              style={{ width: '100%' }}
              variant="danger"
              onClick={handleCancel}
            >
              <CancelIcon
                style={{ zIndex: '-1' }}
                id={'cancel' + item.OrderID.toString()}
              />
              <span
                style={{ fontWeight: 'bold', zIndex: '-1' }}
                id={'cancel' + item.OrderID.toString()}
              >
                取消
              </span>
            </Button>
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
        </ListGroup>
      </ListGroup.Item>
    ) : null
  )

  //取消訂單
  function handleCancel(props) {
    let target_id = props.target.id.replace('cancel', '')
    const url_put = 'http://localhost:6001/ordersapi/'
    let cancelJson = { orderID: target_id }
    // console.log(props)
    fetch(url_put, {
      method: 'PUT',
      body: JSON.stringify(cancelJson),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        alert('已取消訂單!')
        window.location.replace('/lobby/history')
        console.log('Success:', response)
      })
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
