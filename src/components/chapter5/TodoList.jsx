import Todo from './Todo';

function TodoList({ todos, onComplete }) {
  const renderTodos = () => {
    if (todos.length === 0) return <p>Add some todos</p>;

    return todos.map(todo => (
      <Todo key={todo.id} todo={todo} onComplete={() => onComplete(todo.id)} />
    ));
  };

  return <div>{renderTodos()}</div>;
}

export default TodoList;
