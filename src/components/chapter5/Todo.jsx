function Todo({ todo, onComplete }) {
  return (
    <div className='todo'>
      <div className={todo.isCompleted ? 'completedTodo' : ''}>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button onClick={onComplete}>Complete</button>
      </div>
    </div>
  );
}

export default Todo;
