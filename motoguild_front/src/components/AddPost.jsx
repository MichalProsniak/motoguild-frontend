import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Container from "react-bootstrap/Container";

const AddPost = ({ loggedUser, addPost }) => {
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
      alert("Post musi zawierać conajmniej 3 znaki!");
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
                placeholder="Dodaj post"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </Col>
          <Col sm={3}>
            <input
              className="add-post-button"
              type="submit"
              value="Dodaj post"
            />
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default AddPost;
