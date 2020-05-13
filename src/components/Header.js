import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'

import { getMemberID } from '../actions/getMemberID'
import { getCartNum } from '../actions/CartAction'

import { connect } from 'react-redux'
import Badge from '@material-ui/core/Badge'
import Popover from '@material-ui/core/Popover'

import { setKeyword, setColumn } from '../actions/getProductList'
// http://lab.ejci.net/favico.js/
import Favico from 'favico.js'
var favicon = new Favico({
  animation: 'none',
  bgColor: '#fab5b5',
  textColor: '#000',
})

function Header(props) {
  let history = useHistory()
  const memberID = getMemberID()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const { cartNum, getCartNum, setKeyword, setColumn } = props

  useEffect(() => {
    getCartNum(memberID)
  }, [getCartNum, memberID])

  useEffect(() => {
    favicon.badge(cartNum)
    document.title = cartNum ? '(' + cartNum + ') Kilimanjaro' : 'Kilimanjaro'
  }, [cartNum])

  function login() {
    localStorage.setItem('siteBeforeLogin', window.location.pathname)
    window.location.replace('/login')
  }

  const handleSearch = () => {
    const headerSearchKeyword = document.getElementById('searchInputInHeader')
      .value
    setKeyword(headerSearchKeyword)
    setColumn('ProductName')

    let check = true
    let searchRecord = localStorage.getItem('searchRecord')
      ? JSON.parse(localStorage.getItem('searchRecord'))
      : []
    searchRecord.forEach((keyValue) => {
      if (keyValue.keyword === headerSearchKeyword) {
        check = false
      }
    })
    if (check) {
      localStorage.setItem(
        'searchRecord',
        JSON.stringify([...searchRecord, { keyword: headerSearchKeyword }])
      )
    }

    document.documentElement.scrollTop = 0
    history.push('/productList')
  }

  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <GiHamburgerMenu />
          </Navbar.Toggle>

          {/* Appear when max-width<=375px.(RWD) */}
          {/* <Navbar.Brand href="/" className="brand_mob">
            <img src="../images/logo.svg" alt="logo"></img>
          </Navbar.Brand> */}
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
          </Navbar.Collapse>

          {/* Appear when normal. */}
          <Navbar.Brand href="/" className="brand_web">
            <img src="../images/logo.svg" alt="logo"></img>
          </Navbar.Brand>
          <div className="iconGroup">
            <Nav.Link className="navicon_web" onClick={handleClick}>
              <img src="../images/search.svg" alt="search"></img>
            </Nav.Link>
            <Popover
              disableScrollLock
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div class="input-group p-2  bg-black">
                <input
                  type="text"
                  id="searchInputInHeader"
                  className="form-control"
                  placeholder="Search"
                  onKeyUp={(event) => {
                    if (event.keyCode === 13) {
                      handleSearch()
                    }
                  }}
                />
                <div className="input-group-append">
                  <button className="btn btn-success" onClick={handleSearch}>
                    搜尋
                  </button>
                </div>
              </div>
            </Popover>
            <Nav.Link className="navicon_web" onClick={login}>
              {memberID ? (
                <img src="../images/home.svg" alt="user"></img>
              ) : (
                <img src="../images/user.svg" alt="user"></img>
              )}
            </Nav.Link>
            <Nav.Link className="navicon_web" href="/cart">
              <Badge badgeContent={cartNum} color="error">
                <img src="../images/cart.svg" alt="cart"></img>
              </Badge>
            </Nav.Link>
          </div>
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
  }
}

export default connect(mapStateToProps, { getCartNum, setKeyword, setColumn })(
  Header
)
