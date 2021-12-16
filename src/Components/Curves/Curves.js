import React, { useEffect, useRef } from 'react'

const Curves = () => {

    const canvas = useRef(null)

    useEffect(() => {

        const context = canvas.current.getContext("2d")

        let radian = Math.PI / 180
       
        // first Arc
        context.beginPath();
        context.strokeStyle='blue';
        context.lineWidth= 5;
        context.arc(75,75,50, 0 * radian , 180 * radian, false)
        context.stroke()

         // second Arc
         context.beginPath();
         context.strokeStyle='red';
         context.lineWidth= 5;
         context.arc(75,10,50, 45 * radian , 180 * radian, false)
         context.stroke()

    },[])

    return (
        <div className="w-100 h-100">
            <canvas className="w-100 border border-dark" ref = {canvas}></canvas>
        </div>
    )
}

export default Curves
