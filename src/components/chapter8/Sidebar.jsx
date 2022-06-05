import { NavLink } from 'react-router-dom';
import './style.css';

function Sidebar() {
  return (
    <aside className='sidebar'>
      <ul>
        <li>
          <NavLink
            to='/profile/dashboard'
            className={navData => (navData.isActive ? 'activeTab' : '')}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile/downloads'
            className={navData => (navData.isActive ? 'activeTab' : '')}>
            Downloads
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
