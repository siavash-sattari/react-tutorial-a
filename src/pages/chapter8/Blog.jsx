import './style.css';

function Blogs(props) {
  console.log(props);
  const { id } = props.match.params;

  return (
    <div className='blog'>
      <p>Blog Detail - {id}</p>
    </div>
  );
}

export default Blogs;
