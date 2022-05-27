import Comment from './Comment';
import FullComment from './FullComment';
import NewComment from './NewComment';
import "./style.css";

function HttpApp() {
  return (
    <main>
      <section>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
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
