import React from 'react';
import TaskListItem from './TaskListItem';
import DragAndDrop from '../common/DragAndDrop';
import './../../styles/test.css';

const TaskList = ({ tasks, setTasks }) => {
  return tasks ? (
    <div className="task-list d-flex fd-col">
      <DragAndDrop setValues={setTasks} values={tasks} ItemComponent={TaskListItem} />
    </div>
  ) : null;
};

export default TaskList;
