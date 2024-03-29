// TaskInput.js

// Importing necessary React hooks and Redux actions
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions'; // Importing addTask action
import './TaskInput.css'; // Importing CSS file

// TaskInput functional component
function TaskInput() {
  // Defining state for task input
  const [task, setTask] = useState('');
  const dispatch = useDispatch(); // Getting dispatch function from Redux

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    if (task.trim() !== '') { // Checking if task input is not empty
      dispatch(addTask(task)); // Dispatching addTask action with task text
      setTask(''); // Clearing task input after adding task
    }
  };

  // Rendering TaskInput component
  return (
    <form className="task-input" onSubmit={handleSubmit}>
      {/* Input field for entering task */}
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Updating task state on input change
      />
      {/* Button to submit task */}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
