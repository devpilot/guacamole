import React, { useRef } from 'react';

const AddTask = ({ onAdd }) => {
    const input = useRef();
    const onButtonClick = () => {
        onAdd(input.current.value)
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