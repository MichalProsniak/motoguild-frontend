import { useState } from "react";
import GroupImportantInfo from "./GroupImportantInfo";
import PostsForPage from "./PostsForPage";
import GroupMembers from "./GroupMembers";
import { getLoggedUserData } from "../helpnigFunctions/ApiCaller";

export default function GroupBody(props) {
  
  const [isUserInGroup, setIsUserInGroup] = useState(props.group.participants.some(member => {
    if (member.id === props.user.id)
    {
      return true
    }
  }))

  return (
    <div className="group-page-container">
      <GroupImportantInfo group={props.group} />
      <div className="group-page-container-col2">
        <GroupMembers members={props.group.participants} owner={props.group.owner} user={props.user} group={props.group} />
        { isUserInGroup ? <PostsForPage link="group" /> : <p>Nie jesteś członkiem tej grupy!</p>}
      </div>
    </div>
  );
}
