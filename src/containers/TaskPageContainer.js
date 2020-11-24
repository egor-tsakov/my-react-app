import React, { useState } from 'react';

import TaskListContainer from './TaskListContainer';
import TaskCardContainer from './TaskCardContainer';
import TaskFormContainer from './TaskFormContainer';
import TaskBar from '../components/TaskBar';

import { getCounter } from '../helpers/taskHelpers';

import './../styles/task.css';
import './../styles/drag-and-drop.css';

// Import test data
import dataset from './data/tasks.json';

export const LIST_VIEW = 'LIST_VIEW';
export const CARD_VIEW = 'CARD_VIEW';

const TaskPageContainer = () => {
  // Список задач.
  const [tasks, setTasks] = useState(dataset);
  // Форма задач.
  const [form, setForm] = useState({ visible: false, taskId: null });
  // Тип просмотра задач.
  const [view, setView] = useState(LIST_VIEW);

  let RenderComponent = null;

  if (view === LIST_VIEW) {
    RenderComponent = TaskListContainer;
  }

  if (view === CARD_VIEW) {
    RenderComponent = TaskCardContainer;
  }

  const updateTask = (values) => {
    const updated = [...tasks];
    if (values.id) {
      // Сценарий обновления задачи.
      const index = updated.findIndex((task) => task.id === values.id);
      if (index) {
        updated[index] = values;
        setTasks(updated);
      }
    } else {
      // Сценарий добавления задачи.
      const counter = getCounter(tasks);
      updated.push({ ...values, id: counter });
      setTasks(updated);
    }

    updateForm();
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateForm = (taskId = null) => {
    setForm({ visible: !form.visible, taskId });
  };

  return (
    <div className="task-page">
      <TaskBar setView={setView} />
      <RenderComponent
        tasks={tasks}
        setTasks={setTasks}
        updateForm={updateForm}
        removeTask={removeTask}
      />
      {(form && form.visible) && (
        <TaskFormContainer
          form={form}
          tasks={tasks}
          updateForm={updateForm}
          updateTask={updateTask}
        />
      )}
    </div>
  );
};

export default TaskPageContainer;
