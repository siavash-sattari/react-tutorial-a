import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Navbar from './Navbar';

import './style.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState('All');

  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

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

  const filterTodos = status => {
    switch (status) {
      case 'Completed':
        setFilteredTodos(todos.filter(todo => todo.isCompleted));
        break;
      case 'Uncompleted':
        setFilteredTodos(todos.filter(todo => !todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = e => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  return (
    <div className='app'>
      <h1>TodoList App</h1>
      <div className='container'>
        <Navbar
          unCompletedTodos={todos.filter(t => !t.isCompleted).length}
          status={status}
          onSelect={selectHandler}
        />
        <TodoForm submitTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          onComplete={completeTodo}
          onDelete={removeTodo}
          onUpdate={updateTodo}
        />
      </div>
    </div>
  );
}

export default TodoApp;
