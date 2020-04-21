import React from 'react'
import { useSpring, animated } from 'react-spring'

const items = ['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.']
const loadingAnimation = (i) => (r) =>
  `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

export default function Loading() {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })
  return items.map((a, i) => (
    <animated.div
      key={i}
      className="loading-block"
      style={{ transform: radians.interpolate(loadingAnimation(i)) }}
    >
      {a}
    </animated.div>
  ))
}
