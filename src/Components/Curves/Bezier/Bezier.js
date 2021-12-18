import React, { useEffect, useRef } from 'react'

const Bezier = () => {

    const canvas = useRef(null)
    
    useEffect(() => {
        const context = canvas.current.getContext('2d')
        // context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
        context.beginPath();
        context.strokeStyle='red';
        context.lineWidth = 5;
        context.moveTo(50,80)
        context.bezierCurveTo(50, 50, 70, 50, 75, 70);
        
        context.stroke()
        
    },[])
    return (
        <div>
            <canvas className="border border-dark w-100" ref={canvas}> </canvas>
        </div>
    )
}

export default Bezier
