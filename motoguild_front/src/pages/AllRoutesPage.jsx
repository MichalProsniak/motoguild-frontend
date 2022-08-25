import {useState, useEffect} from 'react';
import RouteList from '../components/RouteList';

export default function AllRoutesPage()
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
            <h1 className="page-title" >Trasy</h1>
            <RouteList />
        </div>
    )
}