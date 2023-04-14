import React from "react";
import '../styles/TodoCounter.css';
import { TodoContext } from "./TodoContext";

function TodoCounter() {
    const {totalTodos, completedTodos,} = React.useContext(TodoContext)
    return (
        <h2 className="TodoCounter">Completed {completedTodos} to {totalTodos}</h2>
    )
}

export { TodoCounter }