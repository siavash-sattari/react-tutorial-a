import { Link } from 'react-router-dom';
import './style.css';

function Sidebar() {
  return (
    <aside className='sidebar'>
      <ul>
        <li>
          <Link to='/profile/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/profile/downloads'>Downloads</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
