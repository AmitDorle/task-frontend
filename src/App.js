import Task from './Task/Task';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

import { Link } from "react-router-dom";

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get('/tasks').then((response) => {
      setTasks(response.data.data)
    })
  }, [])
  /*const tasks = [
   {
      title : "This is task1",
      description : "This is task1 description"
    },
    {
      title : "This is task2",
      description : "This is task2 description"
    },
    {
      title : "This is task3",
      description : "This is task3 description"
    }
  ];*/
  return (
    <div>
      <h1 className='task-app-head'>Task App</h1>
      <hr />
      <div className='task-add-button-container'>
      <button type='button' className='task-add-button'><Link to="/add" className='add-task-link'>Add Task</Link></button>
      </div>
      <div className='row'>
      {
        tasks.map((task) => {
          return (
            <div className="col-md-4 task-info-container">
          <Task id={task.id} title={task.title} description={task.description}
            priority={task.priority} emoji={task.emoji} />
            </div>)
        })
      }
</div>
    </div>
  );
}

export default App;
