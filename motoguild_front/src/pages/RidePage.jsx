import { useState, useEffect } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import RideBody from "../components/RideBody";
import { getRide } from "../helpnigFunctions/ApiCaller";

export default function RidePage() {
  const currentRide = useParams().id;
  const [ride, setRide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCurrentRideData() {
      const data = await getRide(currentRide);
      setRide(data);
      setIsLoading(false);
    }
    getCurrentRideData();
  }, []);

  return <div>{!isLoading && <RideBody ride={ride} />}</div>;
}
