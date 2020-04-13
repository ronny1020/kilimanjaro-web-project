import React from 'react'

function Banner(props) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{props.pageName}</h1>
        </div>
      </div>
    </>
  )
}

export default Banner
