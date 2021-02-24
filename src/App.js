import { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Logger from './components/Logger';

const App = ({ title }) => {
  const [logger, setLogger] = useState([]);
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
    const tsk = tasks.find(element => element.id === id)
    setLogger(logger.concat(dateTime() + " - Task " + tsk.text + " has been Deleted"))
  }

  // Toggle Task status
  const toggleTask = (id) => {
    let tsk = {};
    setTasks(tasks.map((task) => task.id === id ? 
    tsk = {...task, status: !task.status}
    : task))
    setLogger(logger.concat(dateTime() + " - Task " + tsk.text + " marked as " + (tsk.status ? "Done" : "Undone")))
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
    setLogger(logger.concat(dateTime() + " - Task " + tsk.text + " Added"))
  }
  // Get dateTime
  function dateTime() {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    return today.toDateString()
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
    <div className="container">
      <Logger onLog={logger}/>
    </div>
    </>
  );
}

export default App;
