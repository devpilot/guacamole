import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import { TASK_REMOVED, TASK_TOGGLE, TASK_POPULATE } from "../actions/actionType";
import { useEffect, useContext } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import { authContext } from '../contexts/AuthContext';


const Tasks = ({ isEdit, setIsEdit, setTitle, setDesc }) => {
  const { getAll, update, deleteRecord } = useIndexedDB('task');
  const tasks = useSelector(state => state.todo);
  const { auth } = useContext(authContext);
  const dispatch = useDispatch();

  // get todos from db and populate in state
  useEffect(() => {
    getAll().then(
      allTasks => {
        const data = allTasks.filter(task => task.personId === auth.data)
        dispatch({
          type: TASK_POPULATE,
          payload: data
        });
      console.log(data);
    },
    error => {
      console.log(error)
    });
  },[]);
  
// toggle task status
  const onToggle = id => {
    let currentTask = tasks.filter(task => task.id === id )
    currentTask = currentTask[0]
    console.log(currentTask);
    update({ ...currentTask, status: !currentTask.status, personId: auth.data }).then(event => {
      dispatch({
        type: TASK_TOGGLE,
        payload: { id: id }
      });
    });
  };

  const onDelete = id => {
    if (!isEdit) {
      deleteRecord(id).then(event => {
        dispatch({
          type: TASK_REMOVED,
          payload: { id: id }
        });
      });
    }
  };

  const onEdit = id => {
    let currentTask = tasks.filter(task => task.id === id )
    currentTask = currentTask[0]
    setIsEdit(currentTask);
    setTitle(currentTask.title);
    setDesc(currentTask.desc);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
        ))
      ) : (
        "No Tasks to show"
      )}
    </>
  )
}

export default Tasks;
