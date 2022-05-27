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
          <p>name : {comment.name}</p>
          <p>email {comment.email}</p>
          <p>body : {comment.body}</p>
        </div>
      ) : (
        <p>{commentId ? 'Loading...' : 'Please select a comment'}</p>
      )}
    </>
  );
}

export default FullComment;
