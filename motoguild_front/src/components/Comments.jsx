import Comment from "./Comment";
import Row from "react-bootstrap/Row";

const Comments = ({ comments }) => {
  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
