import React from 'react';

import TaskPageContainer from './containers/TaskPageContainer';

// Import css files
import './styles/index.css';
import './styles/mobile.css';

const App = () => (
  <div className="d-flex jc-center">
    <TaskPageContainer />
  </div>
);

export default App;
