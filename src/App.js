import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <div className="container">
      <h1 className="header">Todo App</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
