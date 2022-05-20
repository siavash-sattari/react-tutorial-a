import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './style.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = inputValue => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
      isCompleted: false
    };

    setTodos([...todos, newTodo]);
  };

  const completeTodo = id => {
    console.log(id);
    const index = todos.findIndex(todo => todo.id === id);
    // clone : DO NOT MUTATE
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex(todo => todo.id === id);
    // clone : DO NOT MUTATE
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div className='app'>
      <h1>TodoList App</h1>
      <div className='container'>
        <TodoForm submitTodo={addTodo} />
        <TodoList
          todos={todos}
          onComplete={completeTodo}
          onDelete={removeTodo}
          onUpdate={updateTodo}
        />
      </div>
    </div>
  );
}

export default TodoApp;
