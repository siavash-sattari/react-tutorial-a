import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './style.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = inputValue => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
      isCompleted: false
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className='app'>
      <h1>TodoList App</h1>
      <div className='container'>
        <TodoForm addTodoHandler={addTodoHandler} />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoApp;
