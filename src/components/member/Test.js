import React from 'react'
import jwt from 'jsonwebtoken'
const payload = {
  user_id: 'C001',
  isLogged: 'true',
}

const token = jwt.sign(payload, 'himitsu', { expiresIn: '1h' })
var decrypt = jwt.verify(token, 'himitsu')

function Test() {
  //   jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function (
  //     err,
  //     token
  //   ) {
  //     console.log(token)
  //   })
  return (
    <>
      <p>{token}</p>
    </>
  )
}

export default Test
