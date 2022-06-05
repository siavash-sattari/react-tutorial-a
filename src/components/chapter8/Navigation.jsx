import { NavLink } from 'react-router-dom';
import './style.css';

const navbarItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Profile', path: '/profile' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Post', path: '/post' }
];

function Navigation() {
  return (
    <nav className='navbar'>
      <ul>
        {navbarItems.map(navbarItem => (
          <li key={navbarItem.name}>
            <NavLink
              to={navbarItem.path}
              className={navData => (navData.isActive ? 'activeLink' : '')}>
              {navbarItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
