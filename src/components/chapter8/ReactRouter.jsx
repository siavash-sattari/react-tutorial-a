import { BrowserRouter, Route, Link } from 'react-router-dom';

import Layout from '../../Layout/chapter8/Layout';
import HomePage from '../../pages/chapter8/HomePage';
import AboutUs from '../../pages/chapter8/AboutUs';
import Profile from '../../pages/chapter8/Profile';

function ReactRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path='/' component={HomePage} exact />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/profile' component={Profile} />
      </Layout>
    </BrowserRouter>
  );
}

export default ReactRouter;
