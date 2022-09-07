import Comment from "./Comment";

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
