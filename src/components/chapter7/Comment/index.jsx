import './style.css';

function Comment({ name, email }) {
  return (
    <div className='comment'>
      <p>
        <span>name :</span> {name}
      </p>
      <p>
        <span>email :</span> {email}
      </p>
    </div>
  );
}

export default Comment;
