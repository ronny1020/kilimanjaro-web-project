import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

function Header() {
  return (
    <header>
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">kilimanjaro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">首頁</Nav.Link>
              <Nav.Link href="/about">關於我們</Nav.Link>
              <Nav.Link href="/productList">產品</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    </header>
  )
}

export default Header
