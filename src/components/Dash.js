import AddTask from './AddTask';
import Tasks from './Tasks';
import Header from './Header'
import { useState } from 'react';

const Dash = () => {
  return (
    <div className="container">
      <Header />
      <AddTask />
    </div>
  );
}

export default Dash;
