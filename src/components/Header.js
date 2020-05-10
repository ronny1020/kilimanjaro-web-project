import React, { useEffect } from 'react'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'

import { getMemberID } from '../actions/getMemberID'
import { getCartNum } from '../actions/CartAction'

import { connect } from 'react-redux'

// http://lab.ejci.net/favico.js/
import Favico from 'favico.js'
var favicon = new Favico({
  animation: 'none',
  bgColor: '#fab5b5',
  textColor: '#000',
})

function Header(props) {
  const memberID = getMemberID()

  const { getCartNum, cartNum, product, products, Cart } = props

  useEffect(() => {
    if (window.location.pathname === '/cart') {
      if (Cart) getCartNum(memberID)
    } else {
      getCartNum(memberID)
    }
  }, [getCartNum, memberID, product, products, Cart])

  useEffect(() => {
    favicon.badge(cartNum)
    document.title = cartNum ? '(' + cartNum + ') Kilimanjaro' : 'Kilimanjaro'
  }, [cartNum])

  function login() {
    localStorage.setItem('siteBeforeLogin', window.location.pathname)
    window.location.replace('/login')
  }

  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <GiHamburgerMenu />
          </Navbar.Toggle>

          {/* Appear when max-width<=375px.(RWD) */}
          <Navbar.Brand href="/" className="brand_mob">
            <img src="../images/logo.svg" alt="logo"></img>
          </Navbar.Brand>
          <Nav.Link className="navicon_mob" onClick={login}>
            {memberID ? (
              <img src="../images/home.svg" alt="user"></img>
            ) : (
              <img src="../images/user.svg" alt="user"></img>
            )}
          </Nav.Link>
          <Nav.Link className="navicon_mob" href="/cart">
            <img src="../images/cart.svg" alt="cart"></img>
            {cartNum ? <div className="cartDot">{cartNum}</div> : ''}
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

          <Nav.Link className="navicon_web" onClick={login}>
            {memberID ? (
              <img src="../images/home.svg" alt="user"></img>
            ) : (
              <img src="../images/user.svg" alt="user"></img>
            )}
          </Nav.Link>
          <Nav.Link className="navicon_web" href="/cart">
            <img src="../images/cart.svg" alt="cart"></img>
            {cartNum ? <div className="cartDot">{cartNum}</div> : ''}
          </Nav.Link>
          {/* Appear when normal. */}
        </Navbar>
      </header>
      <div className="pushBody"></div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cartNum: state.CartNumReducer.cartNum,
    product: state.ProductReducer.item,
    products: state.ProductListReducer.items.ProductList,
    Cart: state.CartReducer.items.cart,
  }
}

export default connect(mapStateToProps, { getCartNum })(Header)
