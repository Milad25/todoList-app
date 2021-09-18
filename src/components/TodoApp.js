import { useEffect, useState } from 'react';
import Filter from './Filter';
import Navbar from './Navbar';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([]);
  const [select, setSelect] = useState('');

  // whenever 'todos' or 'select' changes, the filterTodos() must be aware of that change
  // so that it can filter todos based on new changes.

  useEffect(() => {
    filterTodos(select);
  }, [select, todos]);

  const addTodo = (inputValue) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    const updatedTodos = [...todos];
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    setData(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newInputValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    const updatedTodos = [...todos];
    selectedTodo.text = newInputValue;
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const selectHandler = (selectOption) => {
    setSelect(selectOption);
    filterTodos(selectOption);
  };

  const filterTodos = (select) => {
    console.log(select);
    switch (select.value) {
      case '':
        setData(todos);
        break;
      case 'unCompleted':
        setData(todos.filter((t) => t.isCompleted === false));
        break;
      case 'completed':
        setData(todos.filter((t) => t.isCompleted === true));
        break;
      default:
        setData(todos);
    }
  };

  return (
    <>
      <Filter onSelect={selectHandler} value={select} />
      <Navbar todos={todos} />
      <div className='container'>
        <TodoForm submitTodo={addTodo} />
        <TodoList
          todos={data}
          onComplete={completeTodo}
          onDelete={deleteTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </>
  );
};

export default TodoApp;
