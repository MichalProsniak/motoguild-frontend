import { useState } from "react";
import GroupImportantInfo from "./GroupImportantInfo";
import PostsForPage from "./PostsForPage";
import GroupMembers from "./GroupMembers";
import { getLoggedUserData } from "../helpnigFunctions/ApiCaller";
import GroupDescription from "./GroupDescription";
import PendingMemberForList from "./PendingMemberForList";

export default function GroupBody(props) {
  const [isUserTheOwner, setIsUserTheOwner] = useState(
    props.group.owner.id === props.user.id
  );
  const [isUserInGroup, setIsUserInGroup] = useState(
    props.group.participants.some((member) => {
      if (member.id === props.user.id) {
        return true;
      }
    })
  );

  const [isUserInPendingUsers, setIsUserInPendingUsers] = useState(
    props.group.pendingUsers.some((member) => {
      if (member.id === props.user.id) {
        return true;
      }
    })
  );

  return (
    <div className="group-page-container">
      <GroupImportantInfo group={props.group} />
      <div>
        <GroupMembers
          members={props.group.participants}
          owner={props.group.owner}
          user={props.user}
          group={props.group}
        />
        <br></br>
        {props.group.pendingUsers.length !== 0 && (
          <div>
            {isUserTheOwner && props.group.isPrivate && (
              <div>
                <p className="group-page-members-header">Oczekujący</p>
                <div className="group-page-members-container">
                  {props.group.pendingUsers.map((member) => (
                    <PendingMemberForList
                      key={member.id}
                      member={member}
                      group={props.group}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        <br></br>
        <br></br>
        <div>
          {isUserInGroup && <PostsForPage link="group" />}
          {!isUserInGroup && (
            <GroupDescription
              description={props.group.description}
              isPrivate={props.group.isPrivate}
              isPending={isUserInPendingUsers}
              id={props.group.id}
            />
          )}
        </div>
      </div>
    </div>
  );
}
