import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../../Layout/chapter8/Layout';
import routes from '../../routes/chapter8/routes';

function ReactRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default ReactRouter;
