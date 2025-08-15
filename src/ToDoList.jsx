import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["Brush Teeth", 
                                        "Drink Water", 
                                        "Take a shower",
                                        "Eat Breakfast", 
                                        "Go to Work",]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function handleDeleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function handleMoveTaskup(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index - 1];
            updatedTasks[index - 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    function handleTaskMoveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index + 1];
            updatedTasks[index + 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }
    
    return (
        <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input 
                type="text" 
                value={newTask} 
                onChange={handleInputChange} 
                placeholder="Add a new task" 
            />
            <button className='add-button'
            onClick={handleAddTask}>Add Task</button>
        </div>

        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className='text'>
                        {task}
                    <button className='delete-button' 
                    onClick={() => handleDeleteTask(index)}>Delete</button>
                    <button className='move-button' 
                    onClick={() => handleMoveTaskup(index)}>⬆️</button>
                    <button className='move-button' 
                    onClick={() => handleTaskMoveDown(index)}>⬇️</button>
                    </span>
                </li>
            ))}
        </ol>
        </div>
    );
}

export default ToDoList;