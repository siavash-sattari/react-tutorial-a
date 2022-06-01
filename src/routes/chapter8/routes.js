import HomePage from '../../pages/chapter8/HomePage';
import AboutUs from '../../pages/chapter8/AboutUs';
import Profile from '../../pages/chapter8/Profile';
import NotFound from '../../pages/chapter8/NotFound';
import Blog from '../../pages/chapter8/Blog';
import Blogs from '../../pages/chapter8/Blogs';
import Post from '../../pages/chapter8/Post';

const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/about-us', component: AboutUs },
  { path: '/profile', component: Profile },
  { path: '/blogs/:id', component: Blog },
  { path: '/blogs', component: Blogs },
  { path: '/post/:id?', component: Post },
  { component: NotFound }
];

export default routes;
