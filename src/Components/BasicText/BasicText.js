import React, { useEffect, useRef } from "react";

const BasicText = () => {

    const canvas = useRef(null)
    useEffect(() => {
        const context = canvas.current.getContext('2d');
        
        // context.fillText(text, xCoord, yCoord, maxWidth);
        // context.strokeText(text, xCoord, yCoord, maxWidth);
        
       context.font='45px Verdana';
        

        let fText = "Fill Text on Canvas"
        context.fillText(fText, 80, 100);

        let sText = 'Stroke Text on Canvas'
        context.strokeText(sText, 80, 200);
        

        
    }, [])

    return (
        <canvas width="900" height="450" ref={canvas}>
            
        </canvas>
    );
};
export default BasicText;
