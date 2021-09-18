const Navbar = ({ todos }) => {
  const completedTodos = todos.filter((todo) => todo.isCompleted === true);

  return (
    <nav className='navbar'>
      {todos.length !== 0 ? (
        <h5>
          You have {completedTodos.length}{' '}
          {completedTodos.length === 1 || completedTodos.length === 0
            ? 'task'
            : 'tasks'}{' '}
          completed
        </h5>
      ) : (
        <h5>No task is added yet</h5>
      )}
      <h4> Completed Tasks: </h4>
      {
        <ul className='navbar-items-container'>
          {completedTodos.map((todo) => {
            return (
              <li className='navbar-item' key={todo.id}>
                {todo.text}
              </li>
            );
          })}
        </ul>
      }
    </nav>
  );
};

export default Navbar;
