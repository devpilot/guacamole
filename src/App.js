import { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'get milk',
        status: true,
    },
    {
        id: 2,
        text: 'buy fruit',
        status: false,

    },
    {
        id: 3,
        text: 'post mail',
        status: false,

    }
  ]);
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Task status
  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    {...task, status: !task.status}
    : task))
  }

  // Add task
  const addTask = (val) => {
    if(!val){
      alert("please add a task")
      return
    }
    const tsk = {
      id: Date.now(),
      text: val,
      status: false,
    }
    setTasks(tasks.concat(tsk))
  }
  
  return (
    <>
    <div className="container">
      <h1 className="header">Todo App</h1>
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      ) : (
        "No Tasks to show"
      )}
    </div>
    </>
  );
}

export default App;
