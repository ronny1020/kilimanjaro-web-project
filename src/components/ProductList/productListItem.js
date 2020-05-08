import React from 'react'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [
  -(-y + window.innerHeight / 2) / 250,
  (-x + window.innerWidth / 2) / 250,
  1.03,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function ProductListItem(props) {
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <animated.div
      className="card spring-card my-3"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: springProps.xys.interpolate(trans) }}
    >
      {props.children}
    </animated.div>
  )
}

export default ProductListItem
