import React from "react";
import Image from "react-bootstrap/Image";
import pictres from "../images/piesek.jpg";
import GetDayMonthYear from "../helpnigFunctions/GetDayMonthYear";
import GetHourMinutes from "../helpnigFunctions/GetHourMinutes";

const Comment = ({ comment }) => {
  
  const date = GetDayMonthYear(comment.createTime)
  const hours = GetHourMinutes(comment.createTime)
  const correctTime = date + " " + hours;

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

        <div className="comment-time">{correctTime}</div>

        <div className="comment-content">{comment.content}</div>
      </div>
    </div>
  );
};

export default Comment;
