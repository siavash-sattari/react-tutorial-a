import { NavLink, withRouter } from 'react-router-dom';
import './style.css';

const navbarItems = [
  { name: 'Home', path: '/', exact: true },
  { name: 'About Us', path: '/about-us' },
  { name: 'Profile', path: '/profile' },
  { name: 'Blogs', path: '/blogs' }
];

function Navigation(props) {
  console.log(props);
  return (
    <nav className='navbar'>
      <ul>
        {navbarItems.map(navbarItem => (
          <li key={navbarItem.name}>
            <NavLink
              to={navbarItem.path}
              activeClassName='activeLink'
              exact={navbarItem.exact || false}>
              {navbarItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default withRouter(Navigation);
