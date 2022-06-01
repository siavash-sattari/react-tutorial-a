import { Link, withRouter } from 'react-router-dom';

function Navigation(props) {
  console.log(props);
  return (
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
  );
}

export default withRouter(Navigation);
