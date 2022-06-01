import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from '../../pages/chapter8/HomePage';
import AboutUs from '../../pages/chapter8/AboutUs';
import Profile from '../../pages/chapter8/Profile';

function ReactRouter() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about-us'>About Us</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route path='/' component={HomePage} exact />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/profile' component={Profile} />
    </BrowserRouter>
  );
}

export default ReactRouter;
