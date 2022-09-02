import React from "react";
import Image from "react-bootstrap/Image";
import pictres from "../images/piesek.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Comment = ({ comment }) => {
  const dateTime = comment.createTime.split("T");
  const fulltime = dateTime[1].split(".");
  const correktTime = dateTime[0] + " " + fulltime[0];
  return (
    <div className="comment-container">
      <div className="post-avatar">
        <Image
          className="img fluid rounded-circle"
          style={{ height: "40px" }}
          src={pictres}
        />
      </div>
      <div className="comment-details">
        <div className="comment-username">
          <strong>{comment.author.userName}</strong>
        </div>

        <div className="comment-time">{correktTime}</div>

        <div className="comment-content">{comment.content}</div>
      </div>
    </div>
  );
};

export default Comment;
