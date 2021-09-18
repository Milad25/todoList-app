import { useEffect, useRef, useState } from 'react';

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState(
    props.edit ? props.edit.text : ''
  );
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert('enter the todo');
      return;
    }

    props.submitTodo(inputValue);

    setInputValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='formControl'>
        <input
          type='text'
          value={inputValue}
          onChange={changeHandler}
          placeholder={props.edit ? 'update todo...' : 'add todo...'}
          ref={inputRef}
        />
        <button
          className={`btn ${props.edit ? 'updateTodo' : 'addTodo'}`}
          type='submit'
        >
          {props.edit ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
