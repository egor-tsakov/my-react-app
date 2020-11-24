import React, { useState, useEffect } from 'react';

import TaskForm from '../components/TaskForm';
import ModalWrapper from '../components/common/ModalWrapper';

import { validateTask } from '../helpers/taskHelpers';

const TaskFormContainer = ({ form, updateForm, updateTask, tasks }) => {
  // Значения задачи
  const [values, setValues] = useState(null);
  // Ошибки валидации
  const [validate, setValidate] = useState(null);
  // Инициализация формы
  useEffect(() => {
    if (form.taskId) {
      const task = tasks.find((task) => task.id === form.taskId);
      if (task) {
        setValues(task);
      }
    } else {
      setValues({ color: '#ffffff' });
    }
  }, [form, tasks, setValues]);

  const changeField = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const submitHandler = () => {
    const errors = validateTask(values);
    if (Object.keys(errors).length) {
      setValidate(errors);
    } else {
      updateTask(values);
    }
  };

  return (
    <ModalWrapper
      isVisible={form ? form.visible : false}
      title={(values && values.id) ? 'Редактирование задачи' : 'Создание задачи'}
      onClose={updateForm}
    >
      <TaskForm
        values={values}
        validate={validate}
        changeField={changeField}
        submitForm={submitHandler}
      />
    </ModalWrapper>
  );
};
export default TaskFormContainer;
