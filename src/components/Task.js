const Task = ({ task, onEdit, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.status ? 'status' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <input type="checkbox" onChange={() => onToggle(task.id)} defaultChecked={`${task.status ? 'checked' : ''}`} />
      <h3>{task.title}</h3>
      <p>{task.desc}</p>
      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button
        onClick={() => onDelete(task.id)}
        style={{ color: 'red' }}>Delete
        </button>
    </div>
  );
}

export default Task;
