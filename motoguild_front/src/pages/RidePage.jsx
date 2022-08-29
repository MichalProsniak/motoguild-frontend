import {useState, useEffect} from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';
import RideBody from '../components/RideBody';

export default function RidePage()
{
    const currentRide = useParams().id;
    const [ride, setRide] = useState(null)

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getRide() {
        try {
            const res = await fetch(`https://localhost:3333/api/ride/${currentRide}`);
            const data = await res.json();
            setRide(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        }
        getRide(); 
    }, []);


    return (
        <div>
            {!isLoading && <h1 className="page-title">{ride.name}</h1>}
            {!isLoading && <RideBody ride={ride} />}
        </div>
        
    )
}