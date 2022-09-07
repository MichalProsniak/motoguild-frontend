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
  
  useEffect(() => {
    async function getRidesFromApi() {
      const res = await getRides(currentPage, itemsPerPage)
      const data = await res.json();
      const headers = res.headers;
      setPaginationData(JSON.parse(headers.get("X-Pagination")));
      setAllRides(data);
      setIsLoading(false);
    }
    getRidesFromApi();
  }, [currentPage]);

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
