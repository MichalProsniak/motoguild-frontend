import React, { useState, useEffect } from "react";

const UpcomingEvents = () => {
  const [events, setEvents] = useState();
  const [rides, setRides] = useState();

  useEffect(() => {
    const getEvents = async () => {
      const eventsFromServer = await fetchEvents();
      setEvents(eventsFromServer);
    };
    const getRides = async () => {
      const ridesFromServer = await fetchRides();
      setRides(ridesFromServer);
    };
    getEvents();
    getRides();
  }, []);

  const fetchEvents = async () => {
    const res = await fetch(`https://localhost:3333/api/events`);
    const data = await res.json();

    return data;
  };
  const fetchRides = async () => {
    const res = await fetch("https://localhost:3333/api/rides");
    const data = await res.json();

    return data;
  };
  //   console.log("EVENTS")
  //   console.log(events)
  //   console.log("RIDES")
  //   console.log(rides)
  return (
    <div className="upcoming-events-card">
      <h1></h1>
    </div>
  );
};

export default UpcomingEvents;
