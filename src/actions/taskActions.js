// actions/taskActions.js
export const addTask = (taskText) => ({
  type: 'ADD_TASK',
  payload: {
    id: Math.random().toString(36).substr(2, 9),
    text: taskText,
    completed: false, // Include completed property with initial value false
  },
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId,
});

export const toggleTask = (taskId) => ({
  type: 'TOGGLE_TASK',
  payload: taskId,
});
