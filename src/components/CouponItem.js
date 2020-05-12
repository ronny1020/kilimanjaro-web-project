import React from 'react'
import swal from 'sweetalert'
import ProductListItem from './ProductList/productListItem'

import LoginValidate from './LoginValidate'
import { Row, Col, Image, Button, ListGroup } from 'react-bootstrap'
import srcImg from '../img/disc/coupon.jpg'

function CouponItem(props) {
  const couponArray = props.input
  //   console.log(couponArray)

  function handleCoupon() {
    if (LoginValidate() === false) {
      return swal({
        title: '提示訊息',
        text: '請登入會員帳號以領取!',
        icon: 'warning',
        button: 'OK',
      })
    } else {
      //   console.log(couponArray.couponName)
      //此處開始領取
      //後台驗證: pair-constraint(customerID, couponID), valid預設為0
      const memberID = LoginValidate().userID
      let newCoupon = { customerID: memberID, couponID: couponArray.couponID }
      //   console.log(JSON.stringify(newCoupon))
      const url_post = 'http://localhost:6001/api/coupon'
      fetch(url_post, {
        method: 'POST',
        body: JSON.stringify(newCoupon),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          //獲取錯誤訊息(重複領取) or 領取成功
          if (typeof response.message !== 'undefined') {
            swal({
              title: '提示訊息',
              text: '您已經領取過此折扣券!',
              icon: 'error',
              button: 'OK',
            })

            console.log(response)
          } else {
            swal({
              title: '提示訊息',
              text: '領取成功!',
              icon: 'success',
              button: 'OK',
            })
            console.log(response)
          }
        })
    }
  }
  return (
    <>
      <Col>
        <ProductListItem>
          {/* 傳入圖片參數以更改(圖片import於此檔案) */}
          <Image className="d-block h-40 w-100 " src={srcImg} rounded />

          {/* 顯示基本資訊(暫定) */}
          <ListGroup
            className="tyutyu"
            style={{
              color: 'info',
              position: 'absolute',
              top: '25%',
              left: '12%',
              fontWeight: 'bold',
            }}
          >
            <ListGroup.Item
              style={{
                backgroundColor: 'transparent',
                border: '0px',
                padding: '0',
              }}
            >
              <p6>折扣：{couponArray.couponName}</p6>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: 'transparent',
                border: '0px',
                padding: '0',
              }}
            >
              <p6>
                消費滿{couponArray.limitation}可折抵{couponArray.minus}元
              </p6>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: 'transparent',
                border: '0px',
                padding: '0',
              }}
            >
              <p6>有效期限至：{couponArray.cpendDate}</p6>
            </ListGroup.Item>
          </ListGroup>
        </ProductListItem>

        <Row>
          <Col align="center">
            <Button
              //   style={{ marginTop: '15px' }}
              className="btn btn-danger text-white"
              onClick={handleCoupon}
            >
              我要領取
            </Button>
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default CouponItem
