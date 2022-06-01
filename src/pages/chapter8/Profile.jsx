import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <p>Profile</p>
      <Link to='/'>Go To Homepage</Link>
      {/* <a href='/'>Go To Homepage</a> */}
    </>
  );
}

export default Profile;
