import React from "react";
import Image from "react-bootstrap/Image";
import pictres from "../images/piesek.jpg";
import Container from "react-bootstrap/Container";
import Comments from "./Comments";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";
import { getComments, createNewComment } from "../helpnigFunctions/ApiCaller";
import GetDayMonthYear from "../helpnigFunctions/GetDayMonthYear";
import GetHourMinutes from "../helpnigFunctions/GetHourMinutes";

const Post = ({ post, loggedUser }) => {
  const [comments, setComments] = useState([]);
  const [commentsLength, setCommentsLength] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getCommentsFromApi() {
      const data = await getComments(post.id);
      setComments(data);
      setCommentsLength(data.length);
      setIsLoading(false);
    }
    getCommentsFromApi();
  }, [commentsLength]);

  async function addComment(comments) {
    await createNewComment(post.id, comments);
    const data = await getComments(post.id);
    setComments(data);
    setCommentsLength(data.length);
  }


  const date = GetDayMonthYear(post.createTime);
  const hours = GetHourMinutes(post.createTime);
  const correctTime = date + " " + hours;
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

          <div className="post-time">{correctTime}</div>

          <div className="post-content">{post.content}</div>

          <AddComment loggedUser={loggedUser} addComment={addComment} />

          {!isLoading && comments.length > 0 && (
            <Comments comments={comments} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Post;
