import React, { useEffect, useRef } from "react";

const Circle = () => {
    const canvas = useRef(null);
    useEffect(() => {
        const radian = Math.PI / 180;
        const context = canvas.current.getContext();

        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 15;
        context.arc(200, 200, 5, radian *0, radian * 360, true);
        context.stroke();
    }, []);
    return (
        <div className="w-100">
            <canvas className="w-100 border border-dark" ref={canvas}></canvas>
        </div>
    );
};

export default Circle;
