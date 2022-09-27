import picture from "../images/piesek.jpg";
import Image from "react-bootstrap/Image";
import { Rating } from "react-simple-star-rating";
import { deleteUserFromPendingUsers, addUserToPrivateGroup } from "../helpnigFunctions/ApiCaller";

export default function PendingMemberForList(props)
{

function addMember()
{
    addUserToPrivateGroup(props.group.id, props.member.id)
    deleteUserFromPendingUsers(props.group.id, props.member.id)
    window.location.reload(false);
}

function deletePendingMember()
{
    deleteUserFromPendingUsers(props.group.id, props.member.id)
    window.location.reload(false);
}

    return (
    <div className="group-page-member-container" >
        <Image className="group-page-member-photo" src={picture} />
        <div className="group-page-member">
        <p className="group-page-member-name">{props.member.userName}</p>
        <div className="group-page-member-rating">
          <Rating
            initialValue={props.member.rating}
            readonly={true}
            size="20"
            emptyColor="darkgrey"
          />
        </div>
      </div>
      <i onClick={addMember} className="bi bi-check2-circle icon2"></i>
      <i onClick={deletePendingMember} className="bi bi-x-octagon icon"></i>
        
    </div>

    )
    
}