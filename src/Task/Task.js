import React from 'react'
import './Task.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Task(props) {
  function deleteTask(id) {
    axios.post('/delete_task', { id: id }).then((res) => {
      alert('Task deleted successfully!')
      window.location.reload();
    })
  }
  return (
    <div className='task-container'>
      <h6 className='label'>ID:</h6><h5> {props.id}</h5>
      <h6 className='label'>Title:</h6><h5>{props.title} {props.emoji}</h5>
      <h6 className='label'>Description:</h6><h5>{props.description}</h5>
      <h6 className='label'>Priority:</h6> <h5>{props.priority}</h5>
      <div className='del-up-btn-container'>
      <p><button onClick={(e) => { deleteTask(props.id) }} className='btn-delete'>Delete</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={`/update/${props.id}`}>
          <button className='btn-update'>Update</button>
        </Link>
      </p>
      </div>
    </div>
  )
}

export default Task