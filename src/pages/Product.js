import React from 'react'
import { useParams } from 'react-router-dom'

function Product(props) {
  let { id } = useParams()

  return (
    <>
      <h1>產品頁面</h1>
      <h2>目前的產品編號是(從網址得上得到)：{id}</h2>
    </>
  )
}

export default Product
