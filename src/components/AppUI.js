import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import { AppTitle } from "./AppTitle";

function AppUI({      
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
}) {
    return(
    <React.Fragment>
        <AppTitle />
        <TodoCounter 
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
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
        <CreateTodoButton />
      </React.Fragment>
      )
}

export { AppUI }