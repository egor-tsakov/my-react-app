import React from 'react';
import TaskList from '../components/TaskList';
import './../styles/task-list.css';

const TaskListContainer = (props) => {
  return <TaskList {...props} />;
};

export default TaskListContainer;
