import React, { useEffect, useRef } from 'react'
import styles from './HelloWorls.module.css'
function Helloworls() {

  const canvas = useRef('')
    useEffect(() => {
      let context = canvas.current.getContext('2d')
      // Blue rectangle
      context.fillStyle = 'blue'
      context.fillRect(10,60,30,70)

      // yellow rectangle
      context.fillStyle = 'yellow'
      context.fillRect(40,60,70,30)

      // red re rectangle
      context.fillStyle = 'red'
      context.fillRect(110,10,30,70)
  
    }, [])

    return (
      
          <canvas className={styles.CanvasWrapper} ref = {canvas}>
            Your browser does not support the HTML canvas tag.
          </canvas>
        
    )
}

export default Helloworls
