import React, { useEffect, useRef } from 'react'

const PacMan = () => {
    const canvas = useRef(null)
    useEffect(() => {
        const radian = Math.PI / 180;
        const context = canvas.current.getContext('2d')

        context.beginPath();
        context.strokeStyle='orange';
        context.lineWidth=10;
        context.moveTo(250, 250);
        context.lineTo(330, 310);
        context.arc(250, 250, 100, 37 * radian, 323 * radian, false)
        context.lineTo(250,250)
        context.fillStyle='orange';
        context.fill()
        context.stroke()

        // Eye
        context.beginPath();
        context.fillStyle = 'black';
        context.arc(250, 200, 10, radian * 0, radian * 360, false);
        context.stroke();
        context.fill();

        // Second way

        // Object 1
        context.beginPath();
        context.strokeStyle = 'orange'
        context.lineWidth= 10;
        context.fillStyle='orange';
        context.arc(600, 250, 100, 143 * radian, radian * 323, false);
        context.stroke();
        context.fill();
        

        // Object 2
        context.beginPath();
        context.strokeStyle = 'orange'
        context.lineWidth= 10;
        context.fillStyle='orange';
        context.arc(600, 250, 100, 37 * radian, radian * 217, false);
        context.stroke();
        context.fill();
        
              // Eye
              context.beginPath();
              context.fillStyle = 'black';
              context.arc(600, 200, 10, radian * 0, radian * 360, false);
              context.stroke();
              context.fill();
        
        

    },[])

    return (
        <div>
          <canvas width="900" height="600" className="border border-dark" ref={canvas}></canvas>
        </div>
    )
}

export default PacMan
