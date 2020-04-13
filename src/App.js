import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
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
            {/* react-router v5之後的寫法 */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/productList">
              <ProductList />
            </Route>
            <Route path="/product/:id?">
              <Product />
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
