import React from "react";
import { TodoContext } from "./TodoContext";
import '../styles/TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const { addTodo, setOpenModal } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onEnter = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            addTodo(newTodoValue)
            onCancel()
        }
    }

    return (
        <form onSubmit={onSubmit}
        onKeyDown={onEnter}>
            <label></label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Create your task..."/>
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}>
                    Cancel
                </button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add">
                    Add
                </button>
            </div>
        </form>
    )
}

export { TodoForm }