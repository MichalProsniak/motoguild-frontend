import {useState, useEffect} from 'react'
import SmallMap from './SmallMap';
import { useLoadScript} from "@react-google-maps/api"
import RideForList from './RideForList';



export default function RideList()
{
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [paginationData, setPaginationData] = useState(null)
    const [allRides, setAllRides] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getRides() {
        try {
            const res = await fetch(`https://localhost:3333/api/rides?page=${currentPage}&itemsperpage=${itemsPerPage}`);
            const data = await res.json();
            const headers = res.headers
            setPaginationData(headers.get('X-Pagination'))
            setAllRides(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        }
        getRides(); 
    }, [currentPage]);
    function plus()
    {
        setCurrentPage(prevState => {
            return (prevState + 1)
        })
    }
    function minus()
    {
        setCurrentPage(prevState => {
            return (prevState - 1)
        })
    }

    return(<div>
        {!isLoading && console.log(paginationData)}
        {!isLoading && allRides.map(ride => <RideForList 
        key={ride.id} 
        id={ride.id} 
        name={ride.name} 
        startPlace={ride.route.startPlace} 
        endingPlace={ride.route.endingPlace} 
        startTime={ride.startTime}
        owner={ride.owner}
        minimumRating={ride.minimumRating}/>)}
        <button onClick={minus} >minus</button>
        <button onClick={plus} >plus</button>
        </div>
    );

}