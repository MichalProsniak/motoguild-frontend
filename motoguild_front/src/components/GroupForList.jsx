import { useState} from "react";
import picture from "../images/piesek.jpg";
import { Rating } from "react-simple-star-rating";
import { Link, useNavigate } from "react-router-dom";
import { addUserToGroup, addUserToGroupsPendingUsers, deleteLoggedUserFromGroup } from "../helpnigFunctions/ApiCaller";

export default function GroupForList(props) {
  const navigate = useNavigate();
  const [isUserInGroup, setIsUserInGroup] = useState(props.participants.some(member => {
    if (member.id === props.user.id)
    {
      return true
    }
  }))

  const [isUserTheOwner, setIsUserTheOwner] = useState(props.owner.id === props.user.id)

  const [isUserInPendingUsers, setIsUserInPendingUsers] = useState(props.pending.some(member => {
    if (member.id === props.user.id)
    {
      return true
    }
  }))

  async function addUser()
  {
    await addUserToGroup(props.id)
    navigate(`/groups/${props.id}`)
  }

  async function deleteUserFromGroup()
  {
    await deleteLoggedUserFromGroup(props.id)
    window.location.reload(false);
  }

  async function addUserToPendingUsers()
  {
    await addUserToGroupsPendingUsers(props.id)
    navigate(`/groups/${props.id}`)
  }

  return (
    <div className="group-container">
      <div className="group-photo-container">
        <Link to={`/groups/${props.id}`}>
          <img className="group-photo" src={picture} />
        </Link>
      </div>
      <div className="group-header">
        <Link to={`/groups/${props.id}`}>
          <p>{props.name}</p>
        </Link>
        <div className="group-details">
          {props.isPrivate ? (
            <p className="group-privacy-text">Prywatna</p>
          ) : (
            <p className="group-privacy-text">Publiczna</p>
          )}
          <div className="group-rating">
            <Rating initialValue={props.rating} readonly={true} size="13" />
          </div>
          <div className="group-description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <div className="group-apply-button-container">
        <span className="group-participants-text">
          Członkowie: {props.participants.length}
        </span>

        {!isUserTheOwner && props.isPrivate && !isUserInGroup && !isUserInPendingUsers &&
        <button className="group-apply-button btn btn-outline-primary">
          <p onClick={addUserToPendingUsers} className="group-apply-button-text-ask">Poproś o dostęp</p>
        </button>}

        {!isUserTheOwner && props.isPrivate && !isUserInGroup && isUserInPendingUsers &&
        <p className="group-apply-button-text-ask">Akceptacja w toku</p>}

        {!isUserTheOwner && !props.isPrivate && !isUserInGroup && 
        <button className="group-apply-button btn btn-outline-primary">
          <p onClick={addUser} className="group-apply-button-text-apply">Dołącz</p>
        </button>}

        {!isUserTheOwner && isUserInGroup && 
        <button className="group-apply-button btn btn-outline-primary">
          <p onClick={deleteUserFromGroup} className="group-apply-button-text-ask">Opuść grupę</p>
        </button>}
        
      </div>
    </div>
  );
}
