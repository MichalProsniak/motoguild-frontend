import {useState, useEffect} from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';
import GroupBody from '../components/GroupBody';

export default function GroupPage()
{
    const currentGroup = useParams().id;
    const [group, setGroup] = useState(null)

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getGroup() {
        try {
            const res = await fetch(`https://localhost:3333/api/groups/${currentGroup}`);
            const data = await res.json();
            setGroup(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        }
        getGroup(); 
    }, []);


    return (
        <div>
            <GroupBody group={group} />
        </div>
    )
}