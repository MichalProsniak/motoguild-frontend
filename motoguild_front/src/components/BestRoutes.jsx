import { useState, useEffect } from "react";
import BestRoutesContainer from "./BestRoutesContainer";


export default function BestRoutes()
{
    

    const [allRoutes, setAllRoutes] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getAllRoutes() {
        try {
            const res = await fetch("https://localhost:3333/api/routes?page=1&itemsperpage=5&orderByRating=true");
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
            <h1>Najlepsze trasy</h1>
            {!isLoading && <BestRoutesContainer routes={allRoutes} />}
            
        </div>
    )
}