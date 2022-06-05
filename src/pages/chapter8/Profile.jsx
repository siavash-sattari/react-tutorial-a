import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../components/chapter8/Dashboard';
import Downloads from '../../components/chapter8/Downloads';
import Sidebar from '../../components/chapter8/Sidebar';
import './style.css';

function Profile() {
  return (
    <div className='profile'>
      <p>Wellcome Back, Dear React Maxi!</p>
      <Sidebar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/downloads' element={<Downloads />} />
      </Routes>
    </div>
  );
}

export default Profile;
