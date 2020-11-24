import React from 'react';

const TaskListItem = ({ value }) => {
  return (
    <div className="task-list-item" style={{ backgroundColor: value.color }}>
      <div className="task-list-item-title">
        {value.title}
      </div>
      <div className="task-list-item-content">
        {value.content}
      </div>
    </div>
  );
};

export default TaskListItem;
