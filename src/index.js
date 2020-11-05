import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.appendChild(
  <React.StrictMode>
   <App/> {/* questo è il nostro componente radice chiamato APP */}
  </React.StrictMode>,
  document.getElementsById('root')
);
