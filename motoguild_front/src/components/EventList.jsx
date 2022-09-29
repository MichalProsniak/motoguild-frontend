import { useState, useEffect } from "react";
import EventForList from "./EventForList";
import Pagination from "./Pagination";
import { getEvents } from "../helpnigFunctions/ApiCaller";

export default function EventList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [paginationData, setPaginationData] = useState(null);
    const [allEvents, setAllEvents] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMaps, setLoadedMaps] = useState(0);


    useEffect(() => {
        async function getEventsFromApi() {
            const res = await getEvents(currentPage, itemsPerPage);
            const data = await res.json();
            const headers = res.headers;
            setPaginationData(JSON.parse(headers.get("X-Pagination")));
            setAllEvents(data);
            setIsLoading(false);
        }
        getEventsFromApi();
    }, [currentPage]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadedMaps((prev) => prev > 0 && prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container-custom">
            {!isLoading &&
                allEvents.map((event) => (
                    <EventForList
                        key={event.id}
                        id={event.id}
                        name={event.name}
                        place={event.place}
                        owner={event.owner}
                        startDate={event.startDate}
                        stopDate={event.stopDate}
                        setLoadedMaps={setLoadedMaps}
                        loadedMaps={loadedMaps}
                    />
                ))}
            {!isLoading && (
                <Pagination
                    pagination={paginationData}
                    setCurrentPage={setCurrentPage}
                    
                />  
            )}
        </div>
    );
}