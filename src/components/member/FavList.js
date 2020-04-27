import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FavList(props) {
  //   console.log(props)
  const favArray = props.input
  const listItems = favArray.map((item) => (
    <Link to={'/product/' + item.productID}>
      <ListGroup.Item action key={item.productID.toString()}>
        產品名稱：{item.product.ProductName}
        <br />
        產品編號：{item.productID}
        <Button
          variant="danger"
          id={props.id + '/' + item.productID.toString()}
          size="sm"
          onClick={delItem}
        >
          刪除
        </Button>
      </ListGroup.Item>
    </Link>
  ))

  //按下刪除時刪除該列
  function delItem(props) {
    //react component onclick不能傳參數!
    // console.log(props.target.id)
    let cid = props.target.id.split('/')[0]
    let pid = props.target.id.split('/')[1]

    var url_del = 'http://localhost:6001/api/favourite/' + cid + '/' + pid
    // console.log(url_del)
    fetch(url_del, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        window.location.reload()
      })
  }
  return (
    <>
      <ListGroup variant="flush">{listItems}</ListGroup>
    </>
  )
  //   const numbers = props.numbers
  //   const listItems = numbers.map((number) => (
  //     <li key={number.toString()}>{number}</li>
  //   ))
  //   return <ul>{listItems}</ul>
}

export default FavList
