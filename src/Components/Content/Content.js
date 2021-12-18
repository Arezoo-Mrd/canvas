import React from 'react'
import { NavLink } from 'react-router-dom'

const Content = () => {
    return (
        <div className="d-flex justify-content-start align-items-center w-100 flex-column">
            <NavLink to ={'/hello_worlds'}>HelloWorld</NavLink>
            <NavLink to ={'/draw_lines'}>Draw Lines</NavLink>
            <NavLink to ={'/draw_curves'}>Draw Curves</NavLink>
            <NavLink to ={'/all_shapes'}>All Shapes</NavLink>
            <NavLink to ={'/chessboard'}>Chessboard</NavLink>
        </div>
    )
}

export default Content
