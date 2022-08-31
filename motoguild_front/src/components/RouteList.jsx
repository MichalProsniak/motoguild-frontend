import RouteForList from "./RouteForList"
import {useState, useEffect} from 'react';
import Pagination from "./Pagination";

export default function RouteList()
{

    const [allRoutes, setAllRoutes] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [paginationData, setPaginationData] = useState(null)
    useEffect(() => {
        async function getAllRoutes() {
        try {
            const res = await fetch(`https://localhost:3333/api/routes?page=${currentPage}&itemsperpage=${itemsPerPage}`)
           
            const data = await res.json();
            const headers = res.headers
            setPaginationData(JSON.parse(headers.get('X-Pagination')))
            setAllRoutes(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        }
        getAllRoutes(); 
    }, [currentPage]);

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
            {!isLoading && <Pagination pagination={paginationData} setCurrentPage={setCurrentPage} />}
        </div>
    )
}