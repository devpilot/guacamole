import AddTask from './AddTask';
import Tasks from './Tasks';

const Dash = () => {
  return (
    <div className="container">
      <h1 className="header">Todo App</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default Dash;
