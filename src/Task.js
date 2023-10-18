import React, { useState } from "react";
import './Task.css'

let keyId = 0;

function Task()
{
    const [message,setMessage] = useState('');

    const [taskList,setTaskList] = useState([]);

    function changeHandler(event)
    {
        setMessage(event.target.value);
    }

    function handleClick()
    {
        let item = message;
        
        setTaskList([
            ...taskList,
            { id: keyId++, name: item }
          ]);

        setMessage('');
    }

    function deleteTask(index)
    {
        setTaskList(taskList.filter((task) => {
            return task.id != index;
        }))
    }

    return (
        <div id="container">
            <div id = "input-container">
                <input type="text" value={message} onChange={changeHandler} placeholder="Add Task Here"/>
                <button onClick={handleClick}>Add</button>
            </div>
            
            <div>
                <ul>
                    {taskList.map(element => {
                        return <li key = {element.id}><span>{element.name}</span><button className="delete" onClick={() => deleteTask(element.id)}>Delete</button></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Task;