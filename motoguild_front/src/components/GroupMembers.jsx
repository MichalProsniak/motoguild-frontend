import GroupMemberForList from "./GroupMemberForList";

export default function GroupMembers(props) {
  return (
    <div className="group-page-members-container">
      <p className="group-page-members-header">Członkowie</p>
      {props.members.map((member) => (
        <GroupMemberForList key={member.id} member={member} owner={props.owner} user={props.user} group={props.group} />
      ))}
    </div>
  );
}
