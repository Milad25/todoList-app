const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className='todo'>
      <span
        onClick={onComplete}
        className={`todoText ${todo.isCompleted ? 'completed' : ''}`}
      >
        {todo.text}
      </span>
      <div>
        <button onClick={onEdit} className='btn'>
          Edit
        </button>
        <button onClick={onDelete} className='btn remove'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
