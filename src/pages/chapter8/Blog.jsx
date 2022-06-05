import './style.css';
import { useParams, useSearchParams } from 'react-router-dom';

function Blog() {
  const params = useParams();
  const [searchParams] = useSearchParams();

  console.log(params);
  console.log(searchParams.get('sort'));

  console.log(searchParams.entries());
  for (const entry of searchParams.entries()) {
    console.log(entry);
  }

  const id = params.id;

  return (
    <div className='blog'>
      <p>Blog Detail - {id}</p>
    </div>
  );
}

export default Blog;
