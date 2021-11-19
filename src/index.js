import React from 'react';
import ReactDOM from 'react-dom';

import Routing from 'Controllers/Router/Router';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
