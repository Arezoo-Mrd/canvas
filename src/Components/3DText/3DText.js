import React, { useEffect, useRef } from "react";

function ThreeDText() {
    const canvas = useRef(null);

    useEffect(() => {
        const context = canvas.current.getContext("2d");

        const text = "This Text will be In 3D";
        context.font = "normal 600 54px monospace";

        // First way
        // Layer 1
        context.fillStyle = "black";
        context.fillText(text, 99, 299);

        // Layer 2
        context.fillText(text, 98, 298);


        // Layer 3
        context.fillText(text, 97, 297);


        // Layer 4
        context.fillText(text, 96, 296);


        // original Text
        context.fillStyle = "violet";
        context.fillText(text, 100, 300);







        // second way
        function draw3DText(value , x , y,color) {
            context.fillStyle = "black";
            for(let i = 1; i <= 4 ; i++){
                context.fillText(value, x - i, y - i);
            }
            // original Text
            context.fillStyle = color;
            context.fillText(value, x, y);
        }
        draw3DText(text, 100 , 400, 'blue')

     
    }, []);
    return <canvas width="900" height="600" ref={canvas}></canvas>;
}

export default ThreeDText;
