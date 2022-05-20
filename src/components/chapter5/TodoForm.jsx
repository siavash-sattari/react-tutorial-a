import { useState } from 'react';

function TodoForm(props) {
  const { addTodoHandler } = props;
  const [inputValue, setInputValue] = useState('');

  const changeHandler = e => {
    setInputValue(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (!inputValue) {
      alert('please enter new todo!');
      return;
    }

    addTodoHandler(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input type='text' value={inputValue} onChange={changeHandler} />
      <button type='submit'>Add</button>
    </form>
  );
}

export default TodoForm;
