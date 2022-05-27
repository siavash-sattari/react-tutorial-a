import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './style.css';

function FullComment({ commentId, setComments, setSelectedComment }) {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then(response => {
          setComment(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [commentId]);

  // const deleteHandler = () => {
  //   axios
  //     .delete(`http://localhost:3001/comments/${commentId}`)
  //     .then(res => axios.get('http://localhost:3001/comments'))
  //     .then(res => {
  //       setComments(res.data);
  //       setComment(null);
  //       setSelectedComment(null);
  //     })
  //     .catch(error => {
  //       toast.error(error);
  //     });
  // };

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      const { data } = await axios.get('http://localhost:3001/comments');
      setComments(data);
      setComment(null);
      setSelectedComment(null);
    } catch (error) {
      toast.error(error);
    }
  };

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
          <button className='deleteBtn' onClick={deleteHandler}>
            Delete
          </button>
        </div>
      ) : (
        <p>{commentId ? 'Loading...' : 'Please select a comment'}</p>
      )}
    </>
  );
}

export default FullComment;
