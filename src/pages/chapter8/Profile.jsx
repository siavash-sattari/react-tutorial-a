import { Route } from 'react-router-dom';
import Dashboard from '../../components/chapter8/Dashboard';
import Downloads from '../../components/chapter8/Downloads';
import Sidebar from '../../components/chapter8/Sidebar';
import './style.css';

function Profile() {
  return (
    <div className='profile'>
      <p>Wellcome Back, Dear React Maxi!</p>
      <Sidebar />
      <Route path='/profile/dashboard' component={Dashboard} />
      <Route path='/profile/downloads' component={Downloads} />
    </div>
  );
}

export default Profile;
