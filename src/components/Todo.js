import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className='list-group-item d-flex'>
        <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
        <p onClick={() => toggleComplete(todo)} className={todo.completed ? 'text-decoration-line-through' : 'text-decoration-none'}>
          {todo.text}
        </p>
      <span className="mx-2 btn sm-5 btn-outline-danger btn-sm float-right" onClick={()=>deleteTodo(todo.id)} type="button">Delete</span>
    </li>
  );
};

export default Todo;
