import { useRef, useContext, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import { useDispatch } from 'react-redux';
import { TASK_ADDED, TASK_UPDATE } from '../actions/actionType';
import { authContext } from '../contexts/AuthContext';
import Tasks from './Tasks';

const AddTask = () => {
  const titleRef = useRef();
  const descRef = useRef();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [ isEdit, setIsEdit ] = useState('');
  const dispatch = useDispatch();
  const { add, update } = useIndexedDB('task');
  const { auth } = useContext(authContext);

  // insert task to database and redux
  const onAddClick = () => {
    if (!title) {
      alert("please add title")
      return
    }
    const t = title;
    const d = desc;

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
    titleRef.current.value = '';
    descRef.current.value = '';
    setTitle('');
    setDesc('');
  };

  // Update task to database and redux
  const onUpdateClick = () => {
    if (!title) {
      alert("please add title")
      return
    }
    const t = title;
    const d = desc;

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
    titleRef.current.value = '';
    descRef.current.value = '';
    setIsEdit('');
    setTitle('');
    setDesc('');
    
  };

  return (
    <>
    <div className="add-form">
      <div className="form-control">
        <div>
          <label className="form-label">Title</label>
          <input ref={titleRef} type="text" placeholder="Title" value={title} onChange={e => {
                setTitle(e.target.value);
              }}/>
        </div>
        <div>
          <label className="form-label">Description</label>
          <textarea ref={descRef} placeholder="description (optional)" value={desc} onChange={e => {
                setDesc(e.target.value); }}></textarea>
        </div>
        {!isEdit ?
        <button className="btn btn-success" onClick={onAddClick} type="submit">Add</button>
        :
        <button className="btn btn-register" onClick={onUpdateClick} type="submit">Update</button>
        }
      </div>
    </div>
    <Tasks setIsEdit={setIsEdit} setTitle={setTitle} setDesc={setDesc} isEdit={isEdit} />
    </>
  );
}

export default AddTask;
