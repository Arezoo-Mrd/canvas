import React, { useEffect, useRef } from "react";

const BasicText = () => {

    const canvas = useRef(null)
    useEffect(() => {
        const context = canvas.current.getContext('2d');
        
        // context.fillText(text, xCoord, yCoord, maxWidth);
        // context.strokeText(text, xCoord, yCoord, maxWidth);
        // context.font='font-style font-weight font-size font-family';
        
      
        

        let fText = "Fill Text on Canvas"
        // add font style
        context.font='normal bloder xx-large courier';
        context.fillText(fText, 80, 100);

        context.font='italic 700 48px fantasy';
        context.fillText(fText, 80, 200);




        let sText = 'Stroke Text on Canvas'
        context.strokeText(sText, 80, 400);
        

        
    }, [])

    return (
        <canvas width="900" height="450" ref={canvas}></canvas>
    );
};
export default BasicText;
