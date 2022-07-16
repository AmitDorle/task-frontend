import React, { useState, useEffect } from 'react';
import "./Update.css";
import { useParams } from "react-router-dom";
import axios from 'axios';
 
function Update() {
    const { id } = useParams()

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [emoji, setEmoji] = useState('');

    useEffect(() => {
        axios.post("/get_task", { id: id }).then((res) => {
            setTitle(res.data.data.title);
            setDescription(res.data.data.description);
            setPriority(res.data.data.priority);
            setEmoji(res.data.data.emoji)
        })
    }, [id])

    function updateTask() {
        axios.post('/update_task', {
            id: id,
            title: title,
            description: description,
            priority: priority,
            emoji: emoji
        }).then((res) => {
            alert("Task updated successfully!")
            window.location = "/"
        })
    }
    return (
        <div className='update-task-container'> 
        <div className='form-div-2'>
            <h1 className='head-2'>Update Task : {id}</h1>
            <form>
                Title<br /> <input value={title} type="text" onChange={(e) => { setTitle(e.target.value) }} className='box-style1'/><br /><br />
                Description<br /> <input value={description} type="text" onChange={(e) => { setDescription(e.target.value) }} className='box-style1'/><br /><br />
                Priority<br /> <input value={priority} type="text" onChange={(e) => { setPriority(e.target.value) }} className='box-style1'/><br /><br />
                Emoji<br /> <input value={emoji} type="text" onChange={(e) => { setEmoji(e.target.value) }}className='box-style1' /><br /><br />

                <button type="button" onClick={updateTask} className='btn-style1'>Update Now</button>
            </form>
            </div>
        </div>
    )
}

export default Update   