const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.status ? 'status' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <input type="checkbox" />
      {task.text}
      <span
        onClick={() => onDelete(task.id)}
        style={{ color: 'red' }}>X</span>
    </div>
  );
}

export default Task;
