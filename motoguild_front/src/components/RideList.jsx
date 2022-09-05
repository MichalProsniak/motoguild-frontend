import { useState, useEffect } from "react";
import SmallMap from "./SmallMap";
import { useLoadScript } from "@react-google-maps/api";
import RideForList from "./RideForList";
import Pagination from "./Pagination";

export default function RideList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [paginationData, setPaginationData] = useState(null);
  const [allRides, setAllRides] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [query, setQuery] = useState(0)
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setQuery(prevState => prevState === 10 ? 10 : prevState + 1)
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    async function getRides() {
      try {
        const res = await fetch(
          `https://localhost:3333/api/rides?page=${currentPage}&itemsperpage=${itemsPerPage}`
        );
        const data = await res.json();
        const headers = res.headers;
        setPaginationData(JSON.parse(headers.get("X-Pagination")));
        setAllRides(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getRides();
    // setTimeout(getRides, query * 1000)
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
          // setQuery={setQuery}
          // isTimer={true}
        />
      )}
    </div>
  );
}
