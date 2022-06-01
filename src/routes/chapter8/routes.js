import HomePage from '../../pages/chapter8/HomePage';
import AboutUs from '../../pages/chapter8/AboutUs';
import Profile from '../../pages/chapter8/Profile';

const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/about-us', component: AboutUs },
  { path: '/profile', component: Profile }
];

export default routes;
