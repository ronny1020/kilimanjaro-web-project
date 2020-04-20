import React from 'react'
import { Link } from 'react-router-dom'

function Sellers() {
  return (
    <>
      <div class="row justify-content-center align-items-center">
        <div class="col-md-8 mt-3 ">
          <h3>
            賣家介紹
            <Link to="/product/123">123</Link>
          </h3>
        </div>
      </div>

      <div class="row justify-content-center align-items-center">
        <div class="col-md-8 ">
          <div class="container p-3 my-3 border ">
            <p>
              Resize the browser window to see that its width (max-width) will
              change at different breakpoints.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sellers
