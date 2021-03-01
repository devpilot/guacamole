import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Logger from './components/Logger';

const App = () => {
  return (
    <>
    <div className="container">
      <h1 className="header">Todo App</h1>
      <AddTask />
      <Tasks />
    </div>
    <div className="container">
      <Logger />
    </div>
    </>
  );
}

export default App;
