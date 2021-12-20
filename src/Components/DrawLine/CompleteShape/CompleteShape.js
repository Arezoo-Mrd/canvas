import React, { useEffect, useRef } from "react";

const CompleteShape = () => {
    const canvas = useRef(null);
    useEffect(() => {
        const context = canvas.current.getContext("2d");

        // first z object
        context.beginPath();
        context.moveTo(5, 10);
        context.lineTo(40, 10);
        context.lineTo(10, 50);
        context.lineTo(40, 50);
        context.strokeStyle = "red";
        context.lineWidth = 5;
        context.stroke();

        // second z object
        context.beginPath();
        context.moveTo(70, 10);
        context.lineTo(120, 10);
        context.lineTo(90, 100);
        context.strokeStyle = "blue";
        context.lineWidth = 5;
        context.stroke();
    }, []);

    return (
        <div>
            <canvas width="900" height="600" className=" border border-danger" ref={canvas}>
                Your browser does not support the HTML canvas tag.
            </canvas>
        </div>
    );
};

export default CompleteShape;
