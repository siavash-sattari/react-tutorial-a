function Navbar({ unCompletedTodos, onSelect, status }) {
  if (!unCompletedTodos) return <h3>No Todos</h3>;

  return (
    <header>
      <span>{unCompletedTodos}</span> <h3>todos are not completed</h3>
      <select onChange={onSelect} value={status}>
        <option value='All'>All</option>
        <option value='Completed'>Completed</option>
        <option value='Uncompleted'>Uncompleted</option>
      </select>
    </header>
  );
}

export default Navbar;
