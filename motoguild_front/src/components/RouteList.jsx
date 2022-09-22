import RouteForList from "./RouteForList";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { getRoutes } from "../helpnigFunctions/ApiCaller";

export default function RouteList() {
  const [allRoutes, setAllRoutes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [paginationData, setPaginationData] = useState(null);
  const [loadedMaps, setLoadedMaps] = useState(0);

  useEffect(() => {
    async function getAllRoutes() {
      try {
        const res = await getRoutes(currentPage, itemsPerPage);
        const data = await res.json();
        const headers = res.headers;
        setPaginationData(JSON.parse(headers.get("X-Pagination")));
        setAllRoutes(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getAllRoutes();
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
        allRoutes.map((route) => (
          <RouteForList
            key={route.id}
            id={route.id}
            name={route.name}
            startPlace={route.startPlace}
            endingPlace={route.endingPlace}
            owner={route.owner}
            rating={route.rating}
            setLoadedMaps={setLoadedMaps}
            loadedMaps={loadedMaps} 
            stops={route.stops}
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
