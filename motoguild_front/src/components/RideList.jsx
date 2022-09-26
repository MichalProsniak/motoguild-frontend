import { useState, useEffect } from "react";
import RideForList from "./RideForList";
import Pagination from "./Pagination";
import { getRides } from "../helpnigFunctions/ApiCaller";

export default function RideList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [paginationData, setPaginationData] = useState(null);
  const [allRides, setAllRides] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMaps, setLoadedMaps] = useState(0);

  useEffect(() => {
    async function getRidesFromApi() {
      const res = await getRides(currentPage, itemsPerPage);
      const data = await res.json();
      const headers = res.headers;
      setPaginationData(JSON.parse(headers.get("X-Pagination")));
      setAllRides(data);
      setIsLoading(false);
    }
    getRidesFromApi();
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
        allRides.map((ride) => (
          <RideForList
            key={ride.id}
            id={ride.id}
            name={ride.name}
            startPlace={ride.route.startPlace}
            endingPlace={ride.route.endingPlace}
            startTime={ride.startTime}
            owner={ride.owner}
            minimumRating={ride.minimumRating}
            participants={ride.participants.length}
            setLoadedMaps={setLoadedMaps}
            loadedMaps={loadedMaps}
            stops={ride.route.stops}
          />
        ))}
      {!isLoading && (
        <Pagination
          pagination={paginationData}
          setCurrentPage={setCurrentPage}
        />
      )}
      <br></br>
    </div>
  );
}
