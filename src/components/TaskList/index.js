import React from 'react';

import TaskListItem from './TaskListItem';
import DragAndDrop from '../common/DragAndDrop';

const TaskList = ({ tasks, setTasks, updateForm, removeTask }) => {
  console.log(tasks);
  return tasks ? (
    <div className="task-list d-flex fd-col">
      <DragAndDrop
        // Props for drag and drop component
        values={tasks}
        setValues={setTasks}
        ItemComponent={TaskListItem}
        // Props for item component
        onUpdate={updateForm}
        onRemove={removeTask}
      />
      <div onClick={() => updateForm()} className="btn-task-create">
        Добавить задачу
      </div>
    </div>
  ) : null;
};

export default TaskList;
