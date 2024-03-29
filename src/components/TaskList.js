// TaskList.js

// Importing necessary React hooks and Redux actions
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions/taskActions'; // Importing toggleTask action
import './TaskList.css'; // Importing CSS file

// TaskList functional component
function TaskList() {
  // Selecting tasks from Redux store
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch(); // Getting dispatch function

  // Function to handle task deletion
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatching deleteTask action
  };

  // Function to handle task toggle (mark as completed)
  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId)); // Dispatching toggleTask action
  };

  // Rendering TaskList component
  return (
    <div className="flex flex-col items-center">
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span>{task.text}</span>
            <div>
              {/* Button to toggle task completion status */}
              <button onClick={() => handleToggle(task.id)} className={`task-toggle-button ${task.completed ? 'completed' : ''}`}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              {/* Button to delete task */}
              <button onClick={() => handleDelete(task.id)} className="task-delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
