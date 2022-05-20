import { useEffect, useRef, useState } from 'react';

function TodoForm(props) {
  const { submitTodo, edit } = props;
  const [inputValue, setInputValue] = useState(edit ? edit.text : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = e => {
    setInputValue(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (!inputValue) {
      alert('please enter new todo!');
      return;
    }

    submitTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='formControl'>
        <input
          type='text'
          value={inputValue}
          onChange={changeHandler}
          placeholder={edit ? 'Update value' : 'Add new todo'}
          ref={inputRef}
        />
        <button className={`btn ${edit ? '' : 'addTodo'}`} type='submit'>
          {edit ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
