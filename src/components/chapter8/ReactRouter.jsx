import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../../Layout/chapter8/Layout';
import routes from '../../routes/chapter8/routes';

function ReactRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default ReactRouter;
