import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import SmallMap from "./SmallMap";
import ImportantRideInfo from "./ImportantRideInfo";
import PostsForPage from "./PostsForPage";
import Image from "react-bootstrap/Image";
import pictures from "../images/piesek.jpg";

const libraries = ["places"];
export default function RideBody(props) {
  const [mapInfo, setMapInfo] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  return (
    <div>
    <div className="ride-page-container">
      
      <div className="ride-page-header">
        <p>{props.ride.name}</p>
      </div>
      <div className="ride-page-map">
        {isLoaded && (
        <SmallMap
          isLoaded={isLoaded}
          size={2}
          originPoint={props.ride.route.startPlace}
          destinationPoint={props.ride.route.endingPlace}
          setMapInfo={setMapInfo}
          stops={props.ride.route.stops}
        />
        )}
        <div className="ride-page-map-card-container" >
          <div className="ride-page-map-card">
        
            <div className="ride-page-map-card-header">
              <p>Informacje o trasie</p>
            </div>
            <div className="ride-page-info-imp">
              <div className="ride-page-info-imp-map-info">
                <span>
                  <i className="bi bi-browser-safari"></i> {mapInfo[0]}
                </span>
                <span>
                  <i className="bi bi-clock-history"></i> {mapInfo[1]}
                </span>
              </div>

              <ImportantRideInfo
                style="ride-info-text"
                startPlace={props.ride.route.startPlace}
                endingPlace={props.ride.route.endingPlace}
                startTime={props.ride.startTime}
                minimumRating={props.ride.minimumRating}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ride-page-info">
        <div className="ride-page-info-header">
          <p>Opis rajdu</p>
        </div>
        <p>{props.ride.description}</p>
        <div className="ride-page-info-owner">
          <p className="ride-page-info-owner-title">Organizator</p>
          <p>
            <Image className="ride-page-info-owner-avatar" src={pictures} />
            {props.ride.owner.userName}
          </p>
          <div className="ride-page-button">
            <button className="btn btn-outline-primary">Weź udział</button>
          </div>
        </div>
      </div>
      <div className="ride-page-posts">
        <PostsForPage link="ride" />
      </div>
    </div>
    </div>
  );
}
