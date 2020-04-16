import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Sellers from './pages/Sellers'
import OnSale from './pages/OnSale'
import About from './pages/About'

import Product from './pages/Product'

import Login from './pages/member/Login'
import Lobby from './pages/member/logged/Lobby'
import NotFoundPage from './pages/NotFoundPage'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/productList">
              <ProductList />
            </Route>
            <Route path="/sellers">
              <Sellers />
            </Route>
            <Route path="/onSale">
              <OnSale />
            </Route>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/product/:id?">
              <Product />
            </Route>

            <Route path="/login">
              <Redirect from="/login" to="/login/entrance"></Redirect>
              <Login />
            </Route>
            <Route path="/lobby">
              <Lobby />
            </Route>

            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>

          <Footer />
        </>
      </Router>
    </>
  )
}

export default App
