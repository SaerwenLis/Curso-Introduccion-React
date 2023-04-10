import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const onDelete = () => {
    alert('Borrado ' + props.text)
  }
  return (
    <li className="TodoItem">
      <span 
        className={`material-symbols-outlined Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}>
          task_alt
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="material-symbols-outlined Icon Icon-delete"
        onClick={onDelete}>
          delete
      </span>
    </li>
  );
}

export { TodoItem };