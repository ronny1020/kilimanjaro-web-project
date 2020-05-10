import React from 'react'
import { Image } from 'react-bootstrap'
import srcSVG from '../img/disc/cup.svg'

function Notice(props) {
  return (
    <>
      <div align="center" style={{ marginBottom: '15px' }}>
        <Image src={srcSVG} style={{ width: '100%' }}></Image>
        <h1>{props.message}</h1>
      </div>
    </>
  )
}

export default Notice
