import { Link } from "react-router-dom";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import { Rating } from "react-simple-star-rating";
import { useEffect } from "react";

const Group = ({ group }) => {
  const [styleGroup, setStyleGroup] = useState({
    backgroundImage: "url('https://localhost:3333/api/upload/noimage')"
    ,})
  const [styleUser, setStyleUser] = useState({
    backgroundImage: "url('https://localhost:3333/api/upload/noimage')"
    ,})

    useEffect(() => {
      var stringUser=`https://localhost:3333/api/upload/User/${group.owner.image}`;
      var stringGroup= `https://localhost:3333/api/upload/GroupPictures/${group.groupImage}`;

      setStyleUser({backgroundImage: `url(${stringUser})`})
      setStyleGroup({backgroundImage: `url(${stringGroup})`})

    },[])

  return (
    <div className="group-profile-container">
      <div className="group-photo-container">
        {console.log(group)}
        <Link to={`/groups/${group.id}`} replace>
          <div className="group-photo-image-for-list-profile" style={styleGroup}></div>
        </Link>
      </div>
      <div className="group-header">
        <Link to={`/groups/${group.id}`} replace>
          <p>{group.name}</p>
        </Link>
        <div className="group-details-profile">
          <div className="group-rating">
            <Rating initialValue={group.rating} readonly={true} size="30" />
          </div>
        </div>
      </div>
      <div className="for-list-user-profile-page">
        <div className="group-photo-image-for-list-profile-owner" style={styleUser}></div>
        <h3 className="for-list-user-text">{group.owner.userName}</h3>
      </div>
    </div>
  );
};

export default Group;
