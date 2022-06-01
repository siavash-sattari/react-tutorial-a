import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TodoApp from './components/chapter5/TodoApp';
import HttpApp from './components/chapter7/HttpApp';
import ReactRouter from './components/chapter8/ReactRouter';

// =================================================

function App() {
  return (
    <>
      <ToastContainer />

      {/* chapter5/TodoApp */}
      {/* <TodoApp /> */}

      {/* chapter7/Http-app */}
      {/* <HttpApp /> */}

      {/* chapter7/Http-app */}
      <ReactRouter />
    </>
  );
}

export default App;
