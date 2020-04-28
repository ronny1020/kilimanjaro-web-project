import React from 'react'

function Question(props) {
  console.log(props.input)
  return (
    <>
      <div className="row mt-3">
        <div className="col-12" align="center">
          <div
            className={
              'container bg-' + props.input.color + ' text-white pt-3 m-6'
            }
          >
            <h1>{props.input.title}</h1>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 " align="center">
          <div className="container bg-white  text-black pt-3 m-6 ">
            <p>{props.input.content}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
