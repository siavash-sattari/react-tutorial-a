import { useEffect, useState } from 'react';
import axios from 'axios';

import Comment from './Comment';
import FullComment from './FullComment';
import NewComment from './NewComment';

import './style.css';

// =============================================

function HttpApp() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
    // axios
    //   .get('https://jsonplaceholder.typicode.com/comments')
    //   .then(response => {
    //     console.log(response.data);
    //     setComments(response.data.slice(0, 4));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, []);

  const getComments = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
      );
      setComments(response.data.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section>
        {comments ? (
          comments.map(comment => (
            <Comment
              key={comment.id}
              name={comment.name}
              email={comment.email}
            />
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </section>
      <section>
        <FullComment />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
}

export default HttpApp;
