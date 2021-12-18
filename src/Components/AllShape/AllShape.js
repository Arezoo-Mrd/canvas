import React, { useEffect, useRef } from "react";

const AllShape = () => {
    const canvas = useRef(null);

    useEffect(() => {
        const context = canvas.current.getContext("2d");
        // context.rect(xCoordinate, yCoordinate, width, height);
        context.rect(50, 10, 100, 50);
        context.strokeStyle = "blue";
        context.lineWidth=5;
        context.lineJoin='round';
        context.fillStyle='red';
        context.stroke();
        context.fill();

        context.clearRect(70, 10, 50, 25);
        
        
    }, []);

    return (
        <div className="w-100">
            <canvas
                ref={canvas} className="w-100 border border-primary"></canvas>
        </div>
    );
};

export default AllShape;
