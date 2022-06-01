import { Link, withRouter } from 'react-router-dom';

const navbarItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Profile', path: '/profile' }
];

function Navigation(props) {
  console.log(props);
  return (
    <nav>
      <ul>
        {navbarItems.map(navbarItem => (
          <li key={navbarItem.name}>
            <Link to={navbarItem.path}>{navbarItem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default withRouter(Navigation);
