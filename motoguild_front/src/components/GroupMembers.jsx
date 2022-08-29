import GroupMemberForList from "./GroupMemberForList"


export default function GroupMembers(props)
{
    return (
        <div>
            <h2>Członkowie</h2>
            <div className="posts">
                {props.members.map(member => {
                    return (
                        <GroupMemberForList key={member.id} member={member} />
                    )
                })}
            </div>
            
        </div>
    )
}