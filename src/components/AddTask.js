import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TASK_ADDED } from '../actionType';

const AddTask = () => {
    const input = useRef();
    const dispatch = useDispatch();
    const onButtonClick = () => {
        dispatch({
            type: TASK_ADDED,
            payload: {text: input.current.value}
        });
        input.current.value = '';
    }
    return (
        <div className="add-form">
            <div className="form-control">
                <input ref={input} type="text" placeholder="Add task" />
                <button className="btn" onClick={onButtonClick} type="submit">Add</button>
            </div>
        </div>
    );
}
 
export default AddTask;