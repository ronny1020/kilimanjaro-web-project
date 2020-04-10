import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <>
          <Navbar />

          <Switch>
            {/* react-router v5之後的寫法 */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
          </Switch>

          <Footer />
        </>
      </Router>
    </>
  )
}

export default App
