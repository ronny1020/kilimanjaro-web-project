import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import productList from './pages/ProductList'

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
              <productList />
            </Route>
          </Switch>

          <Footer />
        </>
      </Router>
    </>
  )
}

export default App
