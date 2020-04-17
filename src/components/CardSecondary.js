import React from 'react'

function CardSecondary(props) {
  return (
    <>
      <div className="card bg-secondary m-3 p-3 container mx-auto">
        {props.children}
      </div>
    </>
  )
}

export default CardSecondary
