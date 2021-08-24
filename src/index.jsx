import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { WindowManager } from 'react-window-decorators';
import BREAKPOINTS from './helpers/breakpoints';

import App from './App';

new WindowManager(BREAKPOINTS);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
