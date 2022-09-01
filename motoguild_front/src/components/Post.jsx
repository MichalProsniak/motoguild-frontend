import React from "react";
import Image from "react-bootstrap/Image";
import pictres from "../images/piesek.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Comments from "./Comments";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";

const Post = ({ post, loggedUser }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const commentsFromServer = await fetchComments();
      setComments(commentsFromServer);
    };
    getComments();
  }, []);

  const addComment = async (comments) => {
    try {
      const res = await fetch(
        `https://localhost:3333/api/post/${post.id}/comment`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(comments),
        }
      );
      const commentsFromServer = await fetchComments();
      setComments(commentsFromServer);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchComments = async () => {
    const res = await fetch(
      `https://localhost:3333/api/post/${post.id}/comment`
    );
    const data = await res.json();
    return data;
  };

  const dateTime = post.createTime.split("T");
  const fulltime = dateTime[1].split(".");
  const correktTime = dateTime[0] + " " + fulltime[0];
  return (
    <Container className="post">
      <div className="post-card">
        <div className="post-avatar">
          <Image
            className="img fluid rounded-circle"
            style={{ height: "40px", width: "40px" }}
            src={pictres}
          />
        </div>
        <div className="post-details">
          <div className="post-username">
            <strong>{post.author.userName}</strong>
          </div>

          <div className="post-time">{correktTime}</div>

          <div className="post-content">{post.content}</div>

          <AddComment loggedUser={loggedUser} addComment={addComment} />

          {comments.length > 0 && <Comments comments={comments} />}
        </div>
      </div>
    </Container>
  );
};

export default Post;
