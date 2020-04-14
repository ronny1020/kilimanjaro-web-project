import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'
// import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          {/*  */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <GiHamburgerMenu />
          </Navbar.Toggle>

          {/* Appear when max-width<=375px.(RWD) */}
          <Navbar.Brand href="#home" className="brand_mob">
            <img src="../images/logo.svg" alt="logo"></img>
          </Navbar.Brand>
          <Nav.Link className="navicon_mob" href="/product">
            <img src="../images/user.svg" alt="user"></img>
          </Nav.Link>
          <Nav.Link className="navicon_mob" href="/product">
            <img src="../images/cart.svg" alt="cart"></img>
          </Nav.Link>
          {/* Appear when max-width<=375px.(RWD) */}

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">產品資訊</Nav.Link>
              <Nav.Link href="#" className="divider" disabled>
                |
              </Nav.Link>
              <Nav.Link href="/about">店家介紹</Nav.Link>
              <Nav.Link href="#" className="divider" disabled>
                |
              </Nav.Link>
              <Nav.Link href="/productList">優惠專區</Nav.Link>
              <Nav.Link href="#" className="divider" disabled>
                |
              </Nav.Link>
              <Nav.Link href="/productList">關於我們</Nav.Link>
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
          <Navbar.Brand href="#home" className="brand_web">
            <img src="../images/logo.svg" alt="logo"></img>
          </Navbar.Brand>
          <Nav.Link className="navicon_web" href="/product">
            <img src="../images/user.svg" alt="user"></img>
          </Nav.Link>
          <Nav.Link className="navicon_web" href="/product">
            <img src="../images/cart.svg" alt="cart"></img>
          </Nav.Link>
          {/* Appear when normal. */}
        </Navbar>
      </>
    </header>
  )
}

export default Header
