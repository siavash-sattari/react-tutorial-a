import { Link } from 'react-router-dom';
import './style.css';

const items = [
  { name: 'Blog - 1', path: '/blogs/1' },
  { name: 'Blog - 2', path: '/blogs/2' },
  { name: 'Blog - 3', path: '/blogs/3' }
];

function Blogs(props) {
  console.log(props);
  return (
    <div className='blogs'>
      <p>Blogs</p>
      <div className='blogsWrapper'>
        {items.map(item => (
          <div key={item.name}>
            <Link to={item.path}>
              <div className='singleBlog'>{item.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
