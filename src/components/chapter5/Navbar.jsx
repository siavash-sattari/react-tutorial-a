import React from 'react';

function Navbar({ unCompletedTodos }) {
  return (
    <header>
      {unCompletedTodos ? (
        <>
          <span>{unCompletedTodos}</span> <h3>todos are not completed</h3>
        </>
      ) : (
        <h3>No Todos</h3>
      )}
    </header>
  );
}

export default Navbar;
