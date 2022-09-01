import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Container from "react-bootstrap/Container";

const AddPost = ({ loggedUser, addPost }) => {
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
      alert("Please add Post");
      return;
    }

    addPost({ content, author });

    setContent("");
  };
  return (
    <Container className="post">
      <form onSubmit={onSubmit}>
        <Row className="post-add-card">
          <Col sm={9}>
            <div>
              <input
                className="add-post-input"
                type="text"
                placeholder="Add Post"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </Col>
          <Col sm={3}>
            <input className="add-post-button" type="submit" value="Add Post" />
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default AddPost;
