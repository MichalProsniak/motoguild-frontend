import { useState, useEffect } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import RouteBody from "../components/RouteBody";
import { getRoute } from "../helpnigFunctions/ApiCaller";

export default function RoutePage() {
  const currentRoute = useParams().id;
  const [route, setRoute] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCurrentRouteData() {
      const data = await getRoute(currentRoute);
      setRoute(data);
      console.log(data);
      setIsLoading(false);
    }
    getCurrentRouteData();
  }, []);

  return <div>{!isLoading && <RouteBody route={route} />}</div>;
}
