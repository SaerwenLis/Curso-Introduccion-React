import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import { AppTitle } from "./AppTitle";
import { Modal } from "./Modal" 
import { TodoForm } from "./TodoForm";
import { TodosError } from "./TodosError";
import { TodosLoading } from "./TodosLoading";
import { EmptyTodos } from "./EmptyTodos";

function AppUI() {
  const {
    error, 
    loading, 
    searchedTodos, 
    toggleCompleteTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
    return(
    <React.Fragment>
        <AppTitle />
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <TodosError error={error} />}
          {loading && <TodosLoading />}
          {(!loading && !searchedTodos.length) && <EmptyTodos />}
      
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
        )}

        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
      </React.Fragment>
      )
}

export { AppUI }