import { useRef, useContext } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import { useDispatch } from 'react-redux';
import { TASK_ADDED } from '../actions/actionType';
import { authContext } from '../contexts/AuthContext';

const AddTask = () => {
  const title = useRef();
  const desc = useRef();
  const dispatch = useDispatch();
  const { add } = useIndexedDB('task');
  const { auth } = useContext(authContext);

  // insert task to database and redux
  const onButtonClick = () => {
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
  }
  return (
    <div className="add-form">
      <div className="form-control">
        <div>
          <label className="form-label">Title</label>
          <input ref={title} type="text" placeholder="Title" />
        </div>
        <div>
          <label className="form-label">Description</label>
          <textarea ref={desc} placeholder="description (optional)" />
        </div>
        <button className="btn btn-success" onClick={onButtonClick} type="submit">Add</button>
      </div>
    </div>
  );
}

export default AddTask;
