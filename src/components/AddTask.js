import { useRef, useContext } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import { useDispatch } from 'react-redux';
import { TASK_ADDED, TASK_UPDATE } from '../actions/actionType';
import { authContext } from '../contexts/AuthContext';

const AddTask = ({ isEdit, setIsEdit }) => {
  const title = useRef();
  const desc = useRef();
  const dispatch = useDispatch();
  const { add, update } = useIndexedDB('task');
  const { auth } = useContext(authContext);

  // insert task to database and redux
  const onAddClick = () => {
    if (!title.current.value) {
      alert("please add title")
      return
    }
    const t = title.current.value;
    const d = desc.current.value;

    add({ title: t, desc: d,  status: false, personId: auth.data }).then(
      event => {
        // inserted task id
        console.log('ID Generated: ', event);
        dispatch({
          type: TASK_ADDED,
          payload: { id: event, title: t, desc: d }
        });
      },
      error => {
        console.log(error);
      }
    );

    // Clear form
    title.current.value = '';
    desc.current.value = '';
  };

  // Update task to database and redux
  const onUpdateClick = () => {
    if (!title.current.value) {
      alert("please add title")
      return
    }
    const t = title.current.value;
    const d = desc.current.value;

    update({ id: isEdit.id, title: t, desc: d, status: isEdit.status, personId: auth.data }).then(
      event => {
        dispatch({
          type: TASK_UPDATE,
          payload: { id: isEdit.id, title: t, desc: d }
        });
      },
      error => {
        console.log(error);
      }
    );

    // Clear form
    title.current.value = '';
    desc.current.value = '';
    setIsEdit('');
  };

  return (
    <div className="add-form">
      <div className="form-control">
        <div>
          <label className="form-label">Title</label>
          <input ref={title} type="text" placeholder="Title" defaultValue={isEdit ? isEdit.title : ''} />
        </div>
        <div>
          <label className="form-label">Description</label>
          <textarea ref={desc} placeholder="description (optional)" defaultValue={isEdit ? isEdit.desc : ''} ></textarea>
        </div>
        {!isEdit ?
        <button className="btn btn-success" onClick={onAddClick} type="submit">Add</button>
        :
        <button className="btn btn-register" onClick={onUpdateClick} type="submit">Update</button>
        }
      </div>
    </div>
  );
}

export default AddTask;
