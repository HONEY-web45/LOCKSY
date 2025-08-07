import React, { Children, useEffect } from 'react'
import Lenis from 'lenis'
const Leniss = ({children}) => {
  const lenis=new Lenis({lerp:.1})
  useEffect(() => {
    function raf(time){
lenis.raf(time)
requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  
  return (
    <div>
      {children}
    </div>
  )
}

export default Leniss
