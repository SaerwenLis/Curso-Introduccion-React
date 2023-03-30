import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import { AppTitle } from "./AppTitle";


const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Hacer lista de super', completed: false},
  {text: 'Andar en bici', completed: false},
]

function App() {
  return ( 
    <React.Fragment>
      <AppTitle />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
