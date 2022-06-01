import { BrowserRouter, Route, Link } from 'react-router-dom';

import Navigation from './Navigation';
import HomePage from '../../pages/chapter8/HomePage';
import AboutUs from '../../pages/chapter8/AboutUs';
import Profile from '../../pages/chapter8/Profile';

function ReactRouter() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path='/' component={HomePage} exact />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/profile' component={Profile} />
    </BrowserRouter>
  );
}

export default ReactRouter;
