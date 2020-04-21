import React from 'react'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'

import jwt from 'jsonwebtoken'
// import { Link } from 'react-router-dom'

function Header(props) {
  var valid = false

  if (!localStorage.getItem('token')) {
    valid = false
  } else {
    const token = localStorage.getItem('token')
    const decrypt = jwt.verify(token, 'himitsu')
    valid = decrypt.isLogged
  }

  return (
    <header>
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          {/*  */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <GiHamburgerMenu />
          </Navbar.Toggle>

          {/* Appear when max-width<=375px.(RWD) */}
          <Navbar.Brand href="/" className="brand_mob">
            <img src="../images/logo.svg" alt="logo"></img>
          </Navbar.Brand>
          <Nav.Link className="navicon_mob" href="/login">
            {valid ? (
              <img src="../images/dummy.jpg" alt="user"></img>
            ) : (
              <img src="../images/user.svg" alt="user"></img>
            )}
          </Nav.Link>
          <Nav.Link className="navicon_mob" href="/product">
            <img src="../images/cart.svg" alt="cart"></img>
          </Nav.Link>
          {/* Appear when max-width<=375px.(RWD) */}

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"> 首　頁 </Nav.Link>
              <Nav.Link href="#" className="divider" disabled>
                |
              </Nav.Link>
              <Nav.Link href="/productList">產品資訊</Nav.Link>
              <Nav.Link href="#" className="divider" disabled>
                |
              </Nav.Link>
              <Nav.Link href="/sellers">店家介紹</Nav.Link>
              <Nav.Link href="#" className="divider" disabled>
                |
              </Nav.Link>
              <Nav.Link href="/onSale">優惠專區</Nav.Link>
              <Nav.Link href="#" className="divider" disabled>
                |
              </Nav.Link>
              <Nav.Link href="/about">關於我們</Nav.Link>
            </Nav>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Nav.Link className="search_icon">
                <img src="../images/search.svg" alt="search"></img>
              </Nav.Link>
            </Form>
          </Navbar.Collapse>

          {/* Appear when normal. */}
          <Navbar.Brand href="/" className="brand_web">
            <img src="../images/logo.svg" alt="logo"></img>
          </Navbar.Brand>

          <Nav.Link className="navicon_web" href="/login">
            {valid ? (
              <img src="../images/dummy.jpg" alt="user"></img>
            ) : (
              <img src="../images/user.svg" alt="user"></img>
            )}
          </Nav.Link>
          <Nav.Link className="navicon_web" href="/cart">
            <img src="../images/cart.svg" alt="cart"></img>
          </Nav.Link>
          {/* Appear when normal. */}
        </Navbar>
      </>
    </header>
  )
}

export default Header
