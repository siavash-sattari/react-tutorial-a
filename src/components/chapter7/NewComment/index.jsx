import axios from 'axios';
import { useState } from 'react';
import './style.css';

function NewComment() {
  const [comment, setComment] = useState({
    name: '',
    email: '',
    body: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value
    });
  };

  const createNewPost = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/comments', {
        ...comment,
        postId: 10
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='newComment'>
      <h1>Add new comment</h1>
      <div>
        <label>name</label>
        <input type='text' name='name' onChange={handleChange} />
      </div>
      <div>
        <label>email</label>
        <input type='email' name='email' onChange={handleChange} />
      </div>
      <div>
        <label>body</label>
        <input type='textarea' name='body' onChange={handleChange} />
      </div>
      <button className='addBtn' onClick={createNewPost}>
        Add new Comment
      </button>
    </div>
  );
}

export default NewComment;
