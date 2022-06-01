import './style.css';

function Post(props) {
  console.log(props);
  const id = props.match.params.id || 1;

  return (
    <div className='post'>
      <p>Post Detail - {id}</p>
      <div>{JSON.stringify(props.match.params)}</div>
    </div>
  );
}

export default Post;
