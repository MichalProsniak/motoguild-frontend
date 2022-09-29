import { useLoadScript } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import EventSmallMap from './EventSmallMap'
import PostsForPage from "./PostsForPage";
import ImportantEventInfo from "./ImportantEventInfo";

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
            <div className="event-page-info-imp-map-info">
                <span>
                    <i className="bi bi-browser-safari"></i> {mapInfo[0]}
                </span>
                <span>
                    <i className="bi bi-clock-history"></i> {mapInfo[1]}
                </span>
            </div>
            <ImportantEventInfo
                style="event-info-text"
                place={props.event.place}
                />


        </div></div></div>

        <div className="event-page-info">
            <div className="event-page-info-header">
                <p>Opis wydarzenia</p>
            </div>
            <p>{props.event.description}</p>
        </div>
        <div className="event-page-posts">
        <PostsForPage link="event" />
      </div>
        </div>
        
    );





}


