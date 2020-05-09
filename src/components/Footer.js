import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import '../styles/my.scss'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <footer className="footer navbar-fixed-bottom bg-dark ">
        <br />
        <div className="row container-fluid footer_bg aaaaa">
          <div className="row col-3">
            <div className="col footer_subtitle">聯絡我們</div>
            <div className="col">
              +44 345 678 903
              <br />
              adobexd@mail.com
              <br />
              客服專區
            </div>
          </div>
          <div className="row col-3">
            <div className="col footer_subtitle">服務項目</div>
            <div className="col">
              常見問題
              <br />
              付款流程
              <br />
              寄送方法
              <br />
              退換貨
              <br />
              購物車
            </div>
          </div>
          <div className="row col-3">
            <div className="col footer_subtitle">更多資訊</div>
            <div className="col">
              關於我們
              <br />
              線上徵才
              <br />
              服務條款
            </div>
          </div>
          <div className="row col-3 footer_icon">
            <div className="col footer_subtitle"></div>
            <div className="col">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <br />
              <br />© Kilimanjaro 2020
            </div>
          </div>
          {/* <p className="text-muted">版權所有</p> */}
        </div>
        <br />
      </footer>

      <div className="row bbbbb">
        <div className=" bg-dark col-12 container-fluid ">
          <Accordion>
            <Card className=" bg-dark" align="center">
              <Card.Header align="center">
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className=" text-white"
                >
                  聯 絡 我 們
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className=" text-white">
                  {' '}
                  <div className="col">
                    +44 345 678 903
                    <br />
                    adobexd@mail.com
                    <br />
                    客服專區
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className=" bg-dark" align="center">
              <Card.Header align="center">
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="1"
                  className=" text-white"
                >
                  服 務 項 目
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className=" text-white">
                  {' '}
                  <div className="col">
                    常見問題
                    <br />
                    付款流程
                    <br />
                    寄送方法
                    <br />
                    退換貨
                    <br />
                    購物車
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className=" bg-dark" align="center">
              <Card.Header align="center">
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="2"
                  className=" text-white"
                >
                  更 多 資 訊
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className=" text-white">
                  {' '}
                  <div className="col">
                    關於我們
                    <br />
                    線上徵才
                    <br />
                    服務條款
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className=" bg-dark">
              <Card.Header align="center">
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="3"
                  className=" text-white"
                >
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className=" text-white"></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className=" bg-dark">
              <Card.Header align="center">
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="3"
                  className=" text-white"
                >
                  © Kilimanjaro 2020
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className=" text-white"></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          {/* <div className="row col-3">
            <div className="col footer_subtitle">聯絡我們</div>
            <div className="col">
              +44 345 678 903
              <br />
              adobexd@mail.com
              <br />
              客服專區
            </div>
          </div> */}
          {/* <div className="row col-3">
            <div className="col footer_subtitle">服務項目</div>
            <div className="col">
              常見問題
              <br />
              付款流程
              <br />
              寄送方法
              <br />
              退換貨
              <br />
              購物車
            </div>
          </div> */}
          {/* <div className="row col-3">
            <div className="col footer_subtitle">更多資訊</div>
            <div className="col">
              關於我們
              <br />
              線上徵才
              <br />
              服務條款
            </div>
          </div> */}
          {/* <div className="row col-3 footer_icon">
            <div className="col footer_subtitle"></div>
            <div className="col">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <br />
              <br />© Kilimanjaro 2020
            </div>
          </div> */}
          {/* <p className="text-muted">版權所有</p> */}
        </div>
      </div>
    </>
  )
}

export default Footer
