import { addUserToGroup, addUserToGroupsPendingUsers } from "../helpnigFunctions/ApiCaller";

export default function GroupDescription(props)
{
    async function addMember()
    {
        await addUserToGroup(props.id)
        window.location.reload(false);
    }
    async function addMemberToPending()
    {
        await addUserToGroupsPendingUsers(props.id)
        window.location.reload(false);
    }
    return (        
        <div className="group-description-container" >
            {props.description !== "" ?  <p>{props.description}</p> : <p>Brak opisu</p>}
            {props.isPrivate && !props.isPending && <button onClick={addMemberToPending} className="group-apply-button"><p className="group-apply-button-text-apply" >Aplikuj</p></button>}
            {props.isPending && <p className="acceptance-info" >Oczekujesz na akceptację!</p>}
            {!props.isPrivate && <button onClick={addMember} className="group-apply-button"><p className="group-apply-button-text-apply" >Dołącz</p></button>}
           
        </div>
    )
}
