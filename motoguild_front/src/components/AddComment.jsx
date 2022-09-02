import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";

const AddComment = ({ loggedUser, addComment }) => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState({
    id: 2,
    userName: "Fineasz",
    email: "fin@gmail.com",
    rating: 0,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      alert("Please add Comment");
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
          placeholder="Add Comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="add-comment-input"
        />
        <input
          className="add-comment-button"
          type="submit"
          value="Add Comment"
        />
      </div>
    </form>
  );
};

export default AddComment;
