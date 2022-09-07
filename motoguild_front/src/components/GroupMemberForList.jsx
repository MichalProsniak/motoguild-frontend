import picture from "../images/piesek.jpg";
import Image from "react-bootstrap/Image";
import { Rating } from "react-simple-star-rating";

export default function GroupMemberForList(props) {
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
    </div>
  );
}
