import React from 'react'
import { ListGroup, Button, Accordion } from 'react-bootstrap'
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
      <hr />
      {/* 再加一個component於此 */}
      <ListGroup
        id={'detail' + item.OrderID.toString()}
        style={{ display: 'none' }}
      >
        {item.products.map((pitem) => (
          <ListGroup.Item>{pitem.ProductName}</ListGroup.Item>
        ))}
      </ListGroup>
    </ListGroup.Item>
  ))

  function handleCancel() {
    console.log('do cancel.')
  }
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
