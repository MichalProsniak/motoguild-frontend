import {useState, useEffect} from 'react'
import SmallMap from './SmallMap';
import { useLoadScript} from "@react-google-maps/api"


const libraries = ['places']
export default function RideList()
{
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries

    })


    const [allRides, setAllRides] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getRides() {
        try {
            const res = await fetch("https://localhost:3333/api/ride");
            const data = await res.json();
            setAllRides(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        }
        getRides(); 
    }, []);

    return(<div>
        {allRides && isLoaded && allRides.map(ride => <SmallMap key={ride.id} originPoint={ride.startPlace} destinationPoint={ride.endingPlace} />)}
        </div>
    );

}