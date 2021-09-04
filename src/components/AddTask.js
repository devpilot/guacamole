import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TASK_ADDED } from '../actions/actionType';

const AddTask = () => {
  const title = useRef();
  const desc = useRef();
  const dispatch = useDispatch();
  const onButtonClick = () => {
    if (!title.current.value) {
      alert("please add title")
      return
    }
    dispatch({
      type: TASK_ADDED,
      payload: { title: title.current.value, desc: desc.current.value }
    });
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
