import { useLoadScript } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import EventSmallMap from './EventSmallMap'

const libraries = ["places"];

export default function EventBody(props) {
    const [mapInfo, setMapInfo] = useState([]);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    
    return (

        <div className="event-page-container">
            <div className="event-page-header">
            <p>{props.event.name}</p>
        </div>
        <div className="event-page-map">
            <EventSmallMap place={props.event.place}/>
    
        <div className="event-page-map-card">
            <div className="event-page-map-card-header">
            <p>Informacje o wydarzeniu</p>
        </div>
        <div className="event-page-info-imp">
        </div></div></div></div>
    );





}


