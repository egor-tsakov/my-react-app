import React from 'react';

const TaskForm = ({ values, change }) => {
  return (
    <form id="task-form">
      <input
        name="title"
        placeholder="Заголовок"
        onChange={(e) => change('title', e.target.value)}
      />
      <textarea
        name="content"
        placeholder="Текст"
        onChange={(e) => change('content', e.target.value)}
      />
      <input
        name="color"
        type="color"
        onChange={(e) => change('color', e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
