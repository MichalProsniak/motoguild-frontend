import RouteForList from "./RouteForList"
import {useState, useEffect} from 'react';

export default function RouteList()
{

    const [allRoutes, setAllRoutes] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getAllRoutes() {
        try {
            const res = await fetch("https://localhost:3333/api/routes");
            const data = await res.json();
            setAllRoutes(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        }
        getAllRoutes(); 
    }, []);

    return (
        <div>
            {!isLoading && allRoutes.map(route => <RouteForList 
            key={route.id} 
            id={route.id} 
            name={route.name} 
            startPlace={route.startPlace} 
            endingPlace={route.endingPlace} 
            owner={route.owner}
            rating={route.rating}/>)}
        </div>
    )
}