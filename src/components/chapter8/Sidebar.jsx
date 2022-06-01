import { NavLink } from 'react-router-dom';
import './style.css';

function Sidebar() {
  return (
    <aside className='sidebar'>
      <ul>
        <li>
          <NavLink to='/profile/dashboard' activeClassName='activeTab'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile/downloads' activeClassName='activeTab'>
            Downloads
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
