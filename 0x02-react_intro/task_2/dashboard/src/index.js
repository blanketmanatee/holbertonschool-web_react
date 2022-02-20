import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <div className="root-notifications">
    <Notifications />
  </div>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
