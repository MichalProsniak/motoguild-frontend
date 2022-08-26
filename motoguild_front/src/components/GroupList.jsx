import {useState, useEffect} from 'react'
import GroupForList from "../components/GroupForList";

export default function GroupList()
{
    const [allGroups, setAllGroups] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getGroups() {
        try {
            const res = await fetch("https://localhost:3333/api/groups");
            const data = await res.json();
            setAllGroups(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        }
        getGroups();
        
    }, []);

    return(<div>
        {allGroups && allGroups.map(group => <GroupForList 
        key={group.id} 
        id={group.id}
        name={group.name}
        owner={group.owner}
        isPrivate={group.isPrivate}
        rating={group.rating}
        participants={group.participants} />)}
        </div>
    );

}