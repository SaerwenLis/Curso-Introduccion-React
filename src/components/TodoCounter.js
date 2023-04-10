import React from "react";
import '../styles/TodoCounter.css';

function TodoCounter({total, completed}) {
    return (
        <h2 className="TodoCounter">Completed {completed} to {total}</h2>
    )
}

export { TodoCounter }