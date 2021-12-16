import React from 'react'
import { Route, Routes } from 'react-router'
import Content from '../Content/Content'
import Curves from '../Curves/Curves'
import DrawLine from '../DrawLine/DrawLine'
import Helloworls from '../HelloWorld/Helloworls'

const Main = () => {
    return (
        <div className="w-100 d-flex justify-content-center" style = {{height: '100vh'}}>
       <Routes>
       <Route element = {<Content />} path={"/"} /> 
           <Route element = {<Helloworls />} path={"/hello_worlds"} /> 
           <Route element = {<DrawLine />} path={"/draw_lines"} /> 
           <Route element = {<Curves />} path={"/draw_curves"} /> 
        </Routes>
        </div>
    )
}

export default Main
