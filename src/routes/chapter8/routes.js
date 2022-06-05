import { Navigate } from 'react-router-dom';

import HomePage from '../../pages/chapter8/HomePage';
import AboutUs from '../../pages/chapter8/AboutUs';
import Profile from '../../pages/chapter8/Profile';
import NotFound from '../../pages/chapter8/NotFound';
import Blog from '../../pages/chapter8/Blog';
import Blogs from '../../pages/chapter8/Blogs';
import Post from '../../pages/chapter8/Post';

const routes = [
  { path: '/', element: <HomePage /> },
  // { path: '/', element: <Navigate to='/blogs' replace /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/profile/*', element: <Profile /> },
  { path: '/blogs/:id', element: <Blog /> },
  { path: '/blogs', element: <Blogs /> },
  { path: '/post/:id?', element: <Post /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
