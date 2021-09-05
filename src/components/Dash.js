import AddTask from './AddTask';
import Tasks from './Tasks';
import Header from './Header'
import { useState } from 'react';

const Dash = () => {
  const [ isEdit, setIsEdit ] = useState('');
  return (
    <div className="container">
      <Header />
      <AddTask isEdit={isEdit} setIsEdit={setIsEdit} />
      <Tasks setIsEdit={setIsEdit} />
    </div>
  );
}

export default Dash;
