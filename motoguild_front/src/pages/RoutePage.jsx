import {useState, useEffect} from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';

export default function RoutePage()
{

    const currentRoute = useParams().id;
    const [route, setRoute] = useState(null)

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getRoute() {
        try {
            const res = await fetch(`https://localhost:3333/api/routes/${currentRoute}`);
            const data = await res.json();
            setRoute(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        }
        getRoute(); 
    }, []);

    return (
        <div>
            {!isLoading && <h1 className="page-title" >{route.name}</h1>}
        </div>
    )
}