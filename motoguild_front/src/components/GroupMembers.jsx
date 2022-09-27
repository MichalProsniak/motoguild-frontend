import GroupMemberForList from "./GroupMemberForList";

export default function GroupMembers(props) {
  return (
    <div>
      <p className="group-page-members-header">Członkowie</p>
      
      <div  className="group-page-members-container">
      {props.members.map((member) => (
        <GroupMemberForList key={member.id} member={member} owner={props.owner} user={props.user} group={props.group} />
      ))}
      </div>
    </div>
  );
}
