import React, { useState } from 'react';
import './styles.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const addTask = () => {
        if (taskInput === '') {
            alert('Please enter a task');
            return;
        }

        setTasks([...tasks, taskInput]);
        setTaskInput('');
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`container ${isDarkTheme ? 'theme-dark' : ''}`}>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add</button>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

return (
    <div className={`container ${isDarkTheme ? 'theme-dark' : ''}`}>
        <div className="header">To-Do List</div>
        {/* ...rest of the component... */}
    </div>
);

export default App;
