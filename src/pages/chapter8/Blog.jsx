import queryString from 'query-string';
import './style.css';

function Blog(props) {
  const { location, match } = props;
  const id = match.params.id;
  const query = queryString.parse(location.search);
  console.log(location.search);
  console.log(query);

  return (
    <div className='blog'>
      <p>Blog Detail - {id}</p>
    </div>
  );
}

export default Blog;
