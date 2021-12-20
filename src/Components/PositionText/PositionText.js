import React, { useEffect, useRef } from "react";

const PositionText = () => {
    const canvas = useRef(null);

    useEffect(() => {
        const context = canvas.current.getContext("2d");
        // context.textAlign = "center | end | left | right | start";
        // Specifies how text is aligned horizontally
        // The default value is "start"

        // context.textBaseline = "alphabetic | top | hanging | middle | ideographic | bottom";
        // Specifies how text is aligned vertically
        // The default value is "alphabetic"

        // vertical reference line
        context.strokeStyle = "red";
        context.moveTo(300, 20);
        context.lineTo(300, 430);
        context.stroke();

        // Define a style
        context.font = "italic 400 18px monospace";

        // Apply textAlign values
        context.textAlign = "start";
        context.fillText("start", 300, 20);

        context.textAlign = "center";
        context.fillText("center", 300, 50);

        context.textAlign = "left";
        context.fillText("Left", 300, 80);

        context.textAlign = "right";
        context.fillText("right", 300, 110);

        context.textAlign = "end";
        context.fillText("end", 300, 140);

        // Horizontal reference line
        context.strokeStyle = "red";
        context.moveTo(20, 300);
        context.lineTo(580, 300);
        context.stroke();

        //Apply TextBaseline values
        context.textBaseline = "alphabetic";
        context.fillText("alphabetic", 120, 300);

        context.textBaseline = "top";
        context.fillText("top", 220, 300);

        context.textBaseline = "hanging";
        context.fillText("hanging", 320, 300);

        context.textBaseline = "middle";
        context.fillText("middle", 420, 300);

        context.textBaseline = "ideographic";
        context.fillText("ideographic", 550, 300);

        context.textBaseline = "bottom";
        context.fillText("bottom", 650, 300);

        const shadow_text = "This text will be shadowed";
        // FillText Function
        context.font = "normal 700 24px times";
        context.shadowColor = "red";
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.shadowBlur = 4;
        context.fillText(shadow_text, 500, 500);

        // strockeText Function
        context.font = "italic 400 48px monospace";
        context.shadowColor = "green";
        context.shadowOffsetX = -5;
        context.shadowOffsetY = -5;
        context.shadowBlur = 4;
        context.strokeText(shadow_text, 800, 600);
    }, []);

    return <canvas width="900" height="600" ref={canvas}></canvas>;
};

export default PositionText;
