import React, { useState, useEffect } from 'react';

const TaskForm = ({ values, changeField, submitForm, validate }) => {
  // Текущий выбранный цвет.
  const [color, setColor] = useState('#ffffff');

  // Инициализация цвета в форме
  useEffect(() => {
    if (values?.color) {
      setColor(values.color);
    }
  }, [values, setColor]);

  const submitHandler = (e) => {
    e.preventDefault();
    return false;
  };

  const changeColorHandler = (e) => {
    setColor(e.target.value);
    changeField('color', e.target.value);
  };

  return (
    <form className="d-flex fd-col" id="task-form" onSubmit={submitHandler}>
      <input
        name="title"
        placeholder="Заголовок"
        onChange={(e) => changeField('title', e.target.value)}
        defaultValue={values?.title}
        autoFocus
      />
      {validate?.title && (<span className="task-error-message">{validate.title}</span>)}
      <textarea
        name="content"
        placeholder="Текст"
        onChange={(e) => changeField('content', e.target.value)}
        defaultValue={values?.content}
      />
      {validate?.content && (<span className="task-error-message">{validate.content}</span>)}
      <input
        name="color"
        type="color"
        onChange={changeColorHandler}
        value={color}
      />
      {validate?.color && (<span className="task-error-message">{validate.color}</span>)}
      <div className="d-flex jc-end">
        <button onClick={submitForm}>Сохранить</button>
      </div>
    </form>
  );
};

export default TaskForm;
