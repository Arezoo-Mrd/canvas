import React from "react";
import { NavLink } from "react-router-dom";

const Content = () => {
    return (
        <div className="d-flex justify-content-start align-items-center w-100 flex-column">
            <NavLink to={"/hello_worlds"}>HelloWorld</NavLink>
            <NavLink to={"/draw_lines"}>Draw Lines</NavLink>
            <NavLink to={"/draw_curves"}>Draw Curves</NavLink>
            <NavLink to={"/all_shapes"}>All Shapes</NavLink>
            <NavLink to={"/chessboard"}>Chessboard</NavLink>
            <NavLink to={"/circle"}>Circle</NavLink>
            <NavLink to={"/pac_man"}>Pacman</NavLink>
            <NavLink to={"/polygons"}>polygons</NavLink>
            <NavLink to={"/shadows1"}>shadow shapes 1</NavLink>
            <NavLink to={"/basic_text"}>Basic Text</NavLink>
        </div>
    );
};

export default Content;
