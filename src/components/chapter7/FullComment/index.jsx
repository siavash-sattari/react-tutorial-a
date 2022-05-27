import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function FullComment({ commentId }) {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then(response => {
          setComment(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [commentId]);

  return (
    <>
      {comment ? (
        <div className='fullComment'>
          <p>
            <span>name : </span>
            {comment.name}
          </p>
          <p>
            <span>email : </span> {comment.email}
          </p>
          <p>
            <span>body : </span> {comment.body}
          </p>
        </div>
      ) : (
        <p>{commentId ? 'Loading...' : 'Please select a comment'}</p>
      )}
    </>
  );
}

export default FullComment;
