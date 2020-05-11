import React from 'react'
import { ListGroup, Button, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
// import DeleteIcon from '@material-ui/icons/Delete'

function FavList(props) {
  // console.log(props)
  const favArray = props.input
  const listItems = favArray.map((item) => (
    <ListGroup.Item key={item.productID.toString()}>
      <Row>
        <Col xs lg="2" style={{ borderRight: '0.5px solid lightgrey' }}>
          <Image
            rounded
            className="w-100"
            src={'../../images/products/' + item.productID + '/0.jpg'}
            onError={(event) =>
              (event.target.src = '../../images/products/default.jpg')
            }
          ></Image>
        </Col>
        <Col>
          品名：
          <Link to={'/product/' + item.productID}>
            {item.product.ProductName}{' '}
          </Link>
          <br />
          售價：{item.product.UnitPrice}
          <br />
          庫存：
          {item.product.UnitsInStock === null
            ? '缺貨中'
            : item.product.UnitsInStock}
        </Col>

        <Col sm={2} style={{ borderLeft: '0.5px solid lightgrey' }}>
          <Button
            style={{ width: '100%', fontWeight: 'bolder' }}
            variant="danger"
            id={props.id + '/' + item.productID.toString()}
            onClick={delItem}
          >
            刪除
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
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
        swal({
          title: '提示訊息',
          text: '商品已從列表中刪除!',
          icon: 'success',
        }).then(() => window.location.reload())
      })
  }
  return (
    <>
      <ListGroup style={{ marginBottom: '15px' }} variant="flush">
        {listItems}
      </ListGroup>
    </>
  )
  //   const numbers = props.numbers
  //   const listItems = numbers.map((number) => (
  //     <li key={number.toString()}>{number}</li>
  //   ))
  //   return <ul>{listItems}</ul>
}

export default FavList
