function Todo({ todo, onComplete, onDelete }) {
  return (
    <div className='todo'>
      <div
        onClick={onComplete}
        className={todo.isCompleted ? 'completedTodo' : ''}>
        {todo.text}
      </div>
      <div>
        <button>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
