import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// import pages on navbar
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Sellers from './pages/Sellers'
import OnSale from './pages/OnSale'
import About from './pages/About'

// others
import Product from './pages/Product'

// import member pages
import Login from './pages/member/Login'
import Lobby from './pages/member/logged/Lobby'

// import purchase pages
import Cart from './pages/Cart'
import Shipment from './pages/purchase/Shipment'
import Payment from './pages/purchase/Payment'
import PurchaseComplied from './pages/purchase/PurchaseComplied'
import Sellers2 from './pages/Sellers2'
// import not found
import NotFoundPage from './pages/NotFoundPage'

// import grid part
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // const [isAuth, setIsAuth] = useState(false)
  // let valid = localStorage.getItem('LoginValidate')
  // console.log(valid)
  return (
    <>
      <Router>
        <>
          <Header />

          <Switch>
            {/* navbar pages */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/productList/:page?">
              <ProductList />
            </Route>
            <Route path="/sellers">
              <Sellers />
            </Route>
            <Route path="/sellers2">
              <Sellers2 />
            </Route>

            <Route path="/onSale">
              <OnSale />
            </Route>
            <Route path="/about">
              <About />
            </Route>

            {/* others */}
            <Route path="/product/:id?">
              <Product />
            </Route>

            {/* member pages */}
            <Route path="/login">
              <Redirect from="/login" to="/login/entrance"></Redirect>
              <Login />
            </Route>

            <Route path="/lobby">
              <Lobby />
            </Route>

            {/* purchase pages */}
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/shipment">
              <Shipment />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/purchaseComplied">
              <PurchaseComplied />
            </Route>

            {/* not found */}
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
