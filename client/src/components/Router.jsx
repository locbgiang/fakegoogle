import React from "react";
import { Routes, Route } from 'react-router-dom';
import Result from "./Result";

export const Router = () => {
    return(
        <div className="p-4">
             <Routes>
                <Route path='/' element={<Result />}/>
            </Routes>
        </div>
    )
}