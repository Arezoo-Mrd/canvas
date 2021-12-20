import React, { useEffect, useRef } from 'react'

const Polygons = () => {
    const canvas = useRef(null)

    useEffect(() => {

        const context = canvas.current.getContext('2d')
        

        // polygon variables
        const sides = 6;
        const radius = 100;
        const centerX = 400;
        const centerY = 300;
        const startAngle = 200;
        const angle = (2 * Math.PI) / sides

        // start Drawing
        context.beginPath();
        context.strokeStyle='blue';
        context.lineWidth = 5;
        context.lineJoin='round';
        

        // Begins Point coordinates
        const beginX = centerX + radius * Math.cos(startAngle)
        const beginY = centerY - radius * Math.sin(startAngle)


        context.moveTo(beginX,beginY)
        // Draw Lines

        for(let i = 1 ; i <= sides; i++){
            // Current Point's coordinates
            let currentAngle = startAngle + i * angle 
            let currentPointX = centerX + radius * Math.cos(currentAngle)
            let currentPointY = centerY - radius * Math.sin(currentAngle)

            // Draw the line
            context.lineTo(currentPointX, currentPointY)
        }
        // context.closePath(); to close paths manualy
        context.stroke();
                

    },[])
    return (
        <canvas width = '900' height = '600' ref = {canvas}></canvas>
    )
}

export default Polygons
