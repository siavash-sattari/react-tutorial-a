import { BrowserRouter, Route, Link } from 'react-router-dom';

import Layout from '../../Layout/chapter8/Layout';
import routes from '../../routes/chapter8/routes';

function ReactRouter() {
  return (
    <BrowserRouter>
      <Layout>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Layout>
    </BrowserRouter>
  );
}

export default ReactRouter;
