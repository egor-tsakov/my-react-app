import React, { useState } from 'react';

import TaskListContainer from './TaskListContainer';
import TaskCardContainer from './TaskCardContainer';
import TaskFormContainer from './TaskFormContainer';
// Import test data
import dataset from './data/tasks.json';

const LIST_VIEW = 'LIST_VIEW';
const CARD_VIEW = 'CARD_VIEW';

const TaskPageContainer = () => {
  const [tasks, setTasks] = useState(dataset);
  const [form, setForm] = useState({ visible: false, taskId: null });
  const [view, setView] = useState(LIST_VIEW);
  let RenderComponent = null;

  if (view === LIST_VIEW) {
    RenderComponent = TaskListContainer;
  }

  if (view === CARD_VIEW) {
    RenderComponent = TaskCardContainer;
  }

  const createHandler = (task) => {
    setTasks(tasks.push(task));
  };

  const removeHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const closeHandler = () => {
    setForm({ visible: false, taskId: null });
  };

  return (
    <React.Fragment>
      <RenderComponent
        tasks={tasks}
        setTasks={setTasks}
        onCreateTask={createHandler}
        onRemoveTask={removeHandler}
        onViewChange={(viewType) => setView(viewType)}
      />
      {(form && form.isVisible) && <TaskFormContainer />}
      <TaskFormContainer form={form} onClose={closeHandler} />
    </React.Fragment>
  );
};

export default TaskPageContainer;
