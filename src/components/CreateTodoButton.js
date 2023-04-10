import React from "react";
import '../styles/CreateTodoButton.css';

function CreateTodoButton(props) {
    const OnClickButton = (msg) => {
        alert(msg)
    }
    return (
        <button 
        className="CreateTodoButton" 
        onClick={() => OnClickButton('Aqui se abre el modal')}
        >+</button>
    )
}

export { CreateTodoButton }