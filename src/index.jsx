import React from 'react';
import ReactDOM from 'react-dom';

import { UserContext } from './Context';
import Apollo from './apollo';
import App from './components/App';

ReactDOM.render(
  <Apollo>
    <UserContext>
      <App />
    </UserContext>
  </Apollo>,
  document.getElementById('app')
);
