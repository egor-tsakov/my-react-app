import React from 'react';
import { getColorType } from '../../helpers/taskHelpers';

const TaskCardItem = ({ value, onRemove, onUpdate }) => {
  const style = {
    backgroundColor: value?.color,
    color: getColorType(value?.color) ? '#000000' : '#ffffff',
  };

  return (
    <div className="task-card-item" style={style}>
      <div className="task-title">{value?.title}</div>
      <div className="task-content">{value?.content}</div>
      <div className="task-actions d-flex fd-row">
        <div className="task-item-update" onClick={() => onUpdate(value?.id)}>Изменить</div>
        <div className="task-item-remove" onClick={() => onRemove(value?.id)}>Удалить</div>
      </div>
    </div>
  )
};

export default TaskCardItem;
