import React from 'react'
import { NavLink } from 'react-router-dom'

const Content = () => {
    return (
        <div className="d-flex justify-content-start align-items-center w-100 flex-column">
            <NavLink to ={'/hello_worlds'}>HelloWorld</NavLink>
            <NavLink to ={'/draw_lines'}>Draw Lines</NavLink>
        </div>
    )
}

export default Content
