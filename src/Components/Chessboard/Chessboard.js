import React, { useEffect, useRef, useState } from "react";

const Chessboard = () => {
    const [window_width, set_window_width] = useState(null)
    const [window_height, set_window_height] = useState(null)


    useEffect(() => {
      set_window_width(window.innerWidth)
      set_window_height(window.innerHeight)
      window.addEventListener('resize', ()=>{
        set_window_width(window.innerWidth)
        set_window_height(window.innerHeight)
      })
    }, [])
    console.log("window_width: ",window_width)
    console.log("window_height: ",window_height)
    const canvas = useRef(null);

    //Colors
    let lightCellColor = "#ddb180";
    let darkCellColor = "#7c330c";


    useEffect(() => {
        const context = canvas.current.getContext("2d");
        context.strokeStyle = "black";
        context.strokeRect(100, 50, 100, 100);

      
        // cell 2
        context.fillStyle = darkCellColor;
        context.fillRect(120,50,20,20);

    for( let i = 1;i <= 8; i++){
       // cell 1 
       context.fillStyle= lightCellColor;
       context.fillRect(100 + i * 20, 50, i * 20, i * 20);

    }
        
        

    }, []);
    return (
        <div className="w-100">
            <canvas
                ref={canvas}
                className="w-100 bodrer border-success"
            ></canvas>
        </div>
    );
};

export default Chessboard;
