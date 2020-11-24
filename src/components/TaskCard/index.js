import React from 'react';

import TaskCardItem from './TaskCardItem';
import DragAndDrop from '../common/DragAndDrop';

const TaskCard = ({ tasks, setTasks, updateForm, removeTask }) => {
  return tasks ? (
    <div className="task-card fw-wrap d-flex fd-row jc-start ac-start">
      <DragAndDrop
        // Props for drag and drop component
        values={tasks}
        setValues={setTasks}
        ItemComponent={TaskCardItem}
        // Props for item component
        onUpdate={updateForm}
        onRemove={removeTask}
      />
      <div onClick={() => updateForm()} className="btn-task-create d-flex ai-center jc-center">
        Добавить задачу
      </div>
    </div>
  ) : null;
};

export default TaskCard;
