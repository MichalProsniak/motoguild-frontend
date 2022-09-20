import picture from "../images/piesek.jpg";
import Image from "react-bootstrap/Image";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { deleteUserFromGroup } from "../helpnigFunctions/ApiCaller";

export default function GroupMemberForList(props) {

  const [isUserTheOwner, setIsUserTheOwner] = useState(props.owner.id === props.user.id)
  const [isMemberTheOwner, setIsMemberTheOwner] = useState(props.owner.id === props.member.id)

  async function deleteMember()
  {
    console.log(`delete ${props.member.userName}`)
    await deleteUserFromGroup(props.group.id, props.member.id);
    window.location.reload(false);
  }

  return (
    <div className="group-page-member-container">
      <Image className="group-page-member-photo" src={picture} />
      <div className="group-page-member">
        <p className="group-page-member-name">{props.member.userName}</p>
        <div className="group-page-member-rating">
          <Rating
            initialValue={props.member.rating}
            readonly={true}
            size="16"
          />
        </div>
      </div>
      {isUserTheOwner && !isMemberTheOwner && <i onClick={deleteMember} className="delete-button bi bi-trash3"></i>}
    </div>
  );
}
