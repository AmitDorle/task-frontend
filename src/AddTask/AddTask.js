
import "./AddTask.css";
import React, { useState } from 'react';
import axios from "axios";

function AddTask() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [emoji, setEmoji] = useState('');

  function addTask() {
    /*console.log('Id',id)
    console.log('Title',title)
    console.log('Description',description)
    console.log('Priority',priority)
    console.log('Emoji',emoji)*/

    axios.post('/tasks',
      {
        id: id,
        title: title,
        description: description,
        priority: priority,
        emoji: emoji
      }).then((res) => {
        window.location = "/"
      })
  }

  return (
    <div className='add-task-container'>
      <div className="form-div">
      <h1 className="head">Add Task</h1>

      <form>
        ID < br /> <input value={id} onChange={(e) => { setId(e.target.value) }} className='box-style' /> <br /><br />
        Title < br /> <input value={title} onChange={(e) => { setTitle(e.target.value) }} className='box-style' /> <br /><br />
        Description < br /> <input value={description} onChange={(e) => { setDescription(e.target.value) }} className='box-style' /> <br /><br />
        Priority < br /> <input value={priority} onChange={(e) => { setPriority(e.target.value) }} className='box-style' /> <br /><br />
        Emoji < br /> <input value={emoji} onChange={(e) => { setEmoji(e.target.value) }} className='box-style' /> <br /><br />
        <button type='button' onClick={addTask} className='btn-style'>Add Task</button>
      </form>
      </div>
    </div>
  )
}

export default AddTask;