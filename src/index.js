import './index.css';
import React from 'react';
import Routers from './routes';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Routers/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
