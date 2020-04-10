import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

function App() {
  return (
    <>
      <Router>
        <>
          <Link to="/">首頁</Link>
          <Link to="/about">關於我們</Link>
          <Link to="/product">產品</Link>

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
        </>
      </Router>
    </>
  )
}

export default App
