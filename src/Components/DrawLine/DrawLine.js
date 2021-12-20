import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Content from "../Content/Content";
import CompleteShape from "./CompleteShape/CompleteShape";
import styles from "./DrawLine.module.css";
const DrawLine = () => {
    const canvas = useRef(null);

    useEffect(() => {
        let context = canvas.current.getContext("2d");

        // Draw line step
        context.beginPath();
        context.moveTo(30, 30);
        context.lineTo(80, 80);
        context.lineTo(130, 30);
        context.lineTo(180, 80);
        context.lineTo(230, 30);
        context.stroke();

        // Draw line step
        context.beginPath();
        context.lineTo(60, 60);
        context.lineTo(70, 50);
        context.lineTo(80, 60);
        context.lineTo(90, 50);
        context.lineTo(100, 60);
        context.strokeStyle = "red";
        context.stroke();

        // line Cap
        context.beginPath();
        context.moveTo(100, 100);
        context.lineTo(200, 100);
        context.strokeStyle = "blue";
        context.lineWidth = 10;
        context.lineCap = "butt";
        context.stroke();
        // line Cap
        context.beginPath();
        context.moveTo(100, 120);
        context.lineTo(200, 120);
        context.strokeStyle = "brown";
        context.lineWidth = 10;
        context.lineCap = "round";
        context.stroke();

        // line Cap
        context.beginPath();
        context.moveTo(100, 140);
        context.lineTo(200, 140);
        context.strokeStyle = "green";
        context.lineWidth = 10;
        context.lineCap = "square";
        context.stroke();

        // join line
        context.beginPath();
        context.moveTo(240,50)
        context.lineTo(280,50);
        context.lineTo(280, 100);
        context.lineTo(240, 100);
        context.lineTo(240, 130);
        context.lineTo(280, 130);
        context.lineJoin = 'bevel' // 'miter' ---> default , 'bevel','round'
        context.lineWidth = 10;
        context.strokeStyle = 'black'
        // shadow
        context.shadowColor='red';
        context.shadowOffsetX=8;
        context.shadowOffsetY=10;
        context.shadowBlur=5;
        context.stroke()

        

       
    }, []);

    return (
        <div>
            <canvas width="900" height="600" className="border border-dark" ref={canvas}>
                Your browser does not support the HTML canvas tag.
            </canvas>
            <CompleteShape />
        </div>
    );
};

export default DrawLine;
