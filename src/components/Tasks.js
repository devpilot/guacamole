import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import { TASK_REMOVED, TASK_TOGGLE } from "../actions/actionType";

const Tasks = () => {
  const tasks = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const onToggle = id => {
    dispatch({
      type: TASK_TOGGLE,
      payload: { id: id }
    });
  };
  const onDelete = id => {
    dispatch({
      type: TASK_REMOVED,
      payload: { id: id }
    });
  };
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))
      ) : (
        "No Tasks to show"
      )}
    </>
  )
}

export default Tasks;
