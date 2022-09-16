import { useState } from "react";

const AddComment = ({ loggedUser, addComment }) => {
  const [author, setAuthor] = useState({
    id: 2,
    userName: "Fineasz",
    email: "fin@gmail.com",
    rating: 0,
  });

  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!content || content.length < 3) {
      alert("Komentarz musi zawierać conajmniej 3 znaki!");
      return;
    }
    addComment({ content, author });
    setContent("");
  };

  return (
    <form onSubmit={onSubmit} className="add-comment-form">
      <div className="add-comment-container">
        <input
          type="text"
          placeholder="Dodaj komentarz"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="add-comment-input"
        />
        <input
          className="add-comment-button"
          type="submit"
          value="Dodaj komentarz"
        />
      </div>
    </form>
  );
};

export default AddComment;
