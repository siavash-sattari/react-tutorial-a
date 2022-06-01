import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <p>Homepage</p>
      <Link to='/about-us'>Go To AboutUs Page</Link>
      {/* <a href='/about-us'>Go To AboutUs Page</a> */}
    </>
  );
}

export default HomePage;
