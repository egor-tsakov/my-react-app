import React from 'react';

import { LIST_VIEW, CARD_VIEW } from '../containers/TaskPageContainer';

const TaskBar = ({ setView }) => {
  return (
    <div className="task-bar d-flex jc-end">
      <span onClick={() => setView(LIST_VIEW)}>Список</span>
      <span onClick={() => setView(CARD_VIEW)}>Карточки</span>
    </div>
  );
};

export default TaskBar;
