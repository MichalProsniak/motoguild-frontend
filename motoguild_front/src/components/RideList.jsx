import {useState, useEffect} from 'react'
import SmallMap from './SmallMap';
import { useLoadScript} from "@react-google-maps/api"
import RideForList from './RideForList';



export default function RideList()
{
    
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
        {/* {!isLoading && console.log(allRides[0])} */}
        {/* {allRides && isLoaded && allRides.map(ride => <SmallMap key={ride.id} originPoint={ride.startPlace} destinationPoint={ride.endingPlace} />)} */}
        {!isLoading && allRides.map(ride => <RideForList 
        key={ride.id} 
        name={ride.name} 
        startPlace={ride.startPlace} 
        endingPlace={ride.endingPlace} 
        startTime={ride.startTime}
        owner={ride.owner}
        minimumRating={ride.minimumRating}/>)}
        </div>
    );

}