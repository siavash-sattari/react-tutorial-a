import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );

// ==================================================================================

// For React 17 & RRD V -5 :
// ReactDOM.render is no longer supported in React 18. Use ReactDOM.createRoot instead.
// For RRD V -5 we need to use ReactDOM.render() instead of ReactDOM.createRoot()

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
