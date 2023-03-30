import React from "react";
import './AppTitle.css';
import image from './bubble-girl-2.png';

function AppTitle() {
    return (
        <div className="title-container"> 
        <img className="Image" src={image} alt='girl'></img>
        <h1 className="AppTitle">My Tasks</h1>
        </div>

    )
}

export { AppTitle }

