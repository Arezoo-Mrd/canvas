import React, { useEffect, useRef } from "react";

const ShadowsShapes1 = () => {
    const canvas = useRef(null);
    useEffect(() => {
        const radian = Math.PI / 180;
        const context = canvas.current.getContext("2d");


      
        /*
         cheetsheet shadow attributes on canvas
        - shadowColor
        - shadowOffsetx
        - shadowOffsetY
        - shadowBlur 
        */

        // Rectangle
        context.beginPath();
        context.strokeStyle='green';
        context.fillStyle='green';
        context.rect(150, 100, 150, 400);
        context.shadowColor='black';
        context.shadowOffsetX=5;
        context.shadowOffsetY = 5;
        context.shadowBlur = 5;
        context.stroke();
        context.fill();

        //  Circle
        context.beginPath();
        context.strokeStyle='red';
        context.fillStyle='red';
        context.shadowColor='black';
        context.shadowOffsetX= -10;
        context.shadowOffsetY = -10;
        context.shadowBlur = 5;
        context.arc(650, 300, 100, radian * 0, radian * 360, false);
        context.stroke();
        context.fill();
        
        
        
    }, []);

    return <canvas width="900" height="600" ref={canvas}></canvas>;
};

export default ShadowsShapes1;
