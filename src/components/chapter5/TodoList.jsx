import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList({ todos, onComplete, onDelete, onUpdate }) {
  const [edit, setEdit] = useState({ id: null, text: '', isCompleted: false });

  const editTodo = newValue => {
    onUpdate(edit.id, newValue);
    setEdit({ id: null, text: '', isCompleted: false });
  };

  const renderTodos = () => {
    if (todos.length === 0) return <p>Add some todos</p>;

    return todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        onComplete={() => onComplete(todo.id)}
        onDelete={() => onDelete(todo.id)}
        onEdit={() => setEdit(todo)}
      />
    ));
  };

  return (
    <div>
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
}

export default TodoList;
