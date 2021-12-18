import React, { useEffect, useRef } from 'react'

const Quadratic =() => {
    
    const canvas = useRef(null)

    // context.quadraticCurveTo(controlX, controlY, endX, endY);
    
    useEffect(() => {

        const context = canvas.current.getContext("2d")

        context.beginPath();
        context.strokeStyle='green';
        context.lineWidth= 5;
        context.moveTo(30, 50);
        context.quadraticCurveTo(100, 150, 200, 50)
        context.stroke()
        

    },[])

    
    return (
        <div>
            <canvas ref = {canvas} className="w-100 border border-dark"></canvas>
        </div>
    )
}

export default Quadratic
