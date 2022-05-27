import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TodoApp from './components/chapter5/TodoApp';
import HttpApp from './components/chapter7/HttpApp';

// =================================================

function App() {
  return (
    <>
      <ToastContainer />

      {/* chapter5/TodoApp */}
      {/* <TodoApp /> */}

      {/* chapter7/Http-app */}
      <HttpApp />
    </>
  );
}

export default App;
