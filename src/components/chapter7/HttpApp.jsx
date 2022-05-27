import { useEffect, useState } from 'react';
import axios from 'axios';

import Comment from './Comment';
import FullComment from './FullComment';
import NewComment from './NewComment';

import './style.css';

// =============================================

function HttpApp() {
  const [comments, setComments] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);

  useEffect(() => {
    getComments();
    // axios
    //   .get('http://localhost:3001/comments')
    //   .then(response => {
    //     setComments(response.data.slice(0, 4));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, []);

  const getComments = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3001/comments'
      );
      setComments(response.data.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  const selectCommentHandler = id => {
    setSelectedComment(id);
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
              onClick={() => selectCommentHandler(comment.id)}
            />
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </section>
      <section>
        <FullComment commentId={selectedComment} />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
}

export default HttpApp;
