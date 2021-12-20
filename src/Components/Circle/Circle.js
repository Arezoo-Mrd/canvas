import React, { useEffect, useLayoutEffect, useRef } from "react";

const Circle = () => {
    const canvas = useRef(null);
    useLayoutEffect(() => {
        const radian = Math.PI / 180;
        const context = canvas.current.getContext('2d');

        context.beginPath();
        context.strokeStyle = "red";
        context.fillStyle = "orange"
        context.lineWidth = 5;
        context.arc(150, 50, 25, radian * 135, radian * 360, false);
        context.stroke();
        context.fill()
    }, []);
    return (
      
            <canvas width="900" height="600" className="border border-dark" ref={canvas}></canvas>
        
    );
};

export default Circle;
