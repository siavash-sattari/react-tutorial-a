import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

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
    //     toast.error(error);
    //   });
  }, []);

  const getComments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/comments');
      setComments(response.data);
    } catch (error) {
      toast.error('Fetching data failed!');
    }
  };

  const selectCommentHandler = id => {
    setSelectedComment(id);
  };

  const renderComments = () => {
    let renderValue = <p>Loading ...</p>;

    if (comments) {
      renderValue = comments.map(comment => (
        <Comment
          key={comment.id}
          name={comment.name}
          email={comment.email}
          onClick={() => selectCommentHandler(comment.id)}
        />
      ));
    }

    return renderValue;
  };

  return (
    <main>
      <section>{renderComments()}</section>
      <section>
        <FullComment
          commentId={selectedComment}
          setComments={setComments}
          setSelectedComment={setSelectedComment}
        />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
}

export default HttpApp;
