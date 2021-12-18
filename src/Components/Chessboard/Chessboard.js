import React, { useEffect, useRef, useState } from "react";

const Chessboard = () => {
    const [window_width, set_window_width] = useState(null);
    const [window_height, set_window_height] = useState(null);

    useEffect(() => {
        set_window_width(window.innerWidth);
        set_window_height(window.innerHeight);
        window.addEventListener("resize", () => {
            set_window_width(window.innerWidth);
            set_window_height(window.innerHeight);
        });
    }, []);
    console.log("window_width: ", window_width);
    console.log("window_height: ", window_height);
    const canvas = useRef(null);

    //Colors
    let lightCellColor = "#ddb180";
    let darkCellColor = "#7c330c";

    useEffect(() => {
        const context = canvas.current.getContext("2d");
        context.strokeStyle = "black";
        context.strokeRect(100, 50, 100, 100);

        const CreateChessBoard = (row,color1,color2) => {
            for (let i = 1; i <= 5; i++) {
                if (i % 2 == 0) {
                    context.fillStyle = color1;
                } else {
                    context.fillStyle = color2;
                }
                
                context.fillRect(80 + i * 20, (50 + (row * 20)), 20, 20);
            }
        }
        
       for(let i = 0; i<=4;i++){
           if(i % 2 === 0){
               CreateChessBoard(i,lightCellColor,darkCellColor)
           }else {
            CreateChessBoard(i,darkCellColor,lightCellColor);
           }

       }
        
    }, []);
    return (
        <div className="w-100">
            <canvas
                ref={canvas}
                className="w-100 bodrer"
            ></canvas>
        </div>
    );
};

export default Chessboard;
