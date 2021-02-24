const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.status ? 'status':''}`}
        onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {task.text}
            <span
            onClick={() => onDelete(task.id)}
            style={{color: 'red'}}>X</span>
        </h3>
        </div>
    );
}

export default Task;