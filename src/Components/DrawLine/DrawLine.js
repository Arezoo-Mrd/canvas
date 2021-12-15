import React, { useEffect, useRef } from "react";
import styles from "./DrawLine.module.css";
const DrawLine = () => {
    const canvas = useRef(null);

    useEffect(() => {
        let context = canvas.current.getContext("2d");

        // Draw line step
        context.beginPath();
        context.moveTo(30, 30);
        context.lineTo(80, 80);
        context.stroke();

        // Draw line step
        context.beginPath();
        context.moveTo(80, 80);
        context.lineTo(130, 30);
        context.stroke();

        // Draw line step
        context.beginPath();
        context.moveTo(130, 30);
        context.lineTo(180, 80);
        context.stroke();

        // Draw line step
        context.beginPath();
        context.moveTo(180, 80);
        context.lineTo(230, 30);
        context.stroke();

        // Draw line step
        context.beginPath();
        context.moveTo(230, 30);
        context.lineTo(280, 80);
        context.lineTo(350, 30);
        context.stroke();
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <canvas className="border border-dark" ref={canvas}>
                Your browser does not support the HTML canvas tag.
            </canvas>
        </div>
    );
};

export default DrawLine;
