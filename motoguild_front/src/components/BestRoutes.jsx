import { useState, useEffect } from "react";
import BestRoutesContainer from "./BestRoutesContainer";
import { getRoutesForSlider } from "../helpnigFunctions/ApiCaller";

export default function BestRoutes() {
  const [allRoutes, setAllRoutes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      async function getRoutes() {
      const data = await getRoutesForSlider()
      setAllRoutes(data);
      setIsLoading(false);
    }
    getRoutes()
  }, []);

  return (
    <div className="homepage-best-routes">
      <h1>Najlepsze trasy</h1>
      {!isLoading && <BestRoutesContainer routes={allRoutes} />}
    </div>
  );
}
