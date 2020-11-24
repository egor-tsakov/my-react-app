import React, { useState } from 'react';

import TaskForm from '../components/TaskForm';
import ModalWrapper from '../components/common/ModalWrapper';

const TaskFormContainer = ({ form, onClose }) => {
  const [values, setValues] = useState(null);

  const change = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  return (
    <ModalWrapper
      isVisible={form ? form.visible : false}
      onClose={onClose}
    >
      <TaskForm values={values} change={change} />
    </ModalWrapper>
  );
};
export default TaskFormContainer;
