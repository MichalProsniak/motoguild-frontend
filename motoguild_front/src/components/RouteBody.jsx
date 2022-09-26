import { useLoadScript } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import SmallMap from "./SmallMap";
import ImportantRouteInfo from "./ImportantRouteInfo";
import PostsForPage from "./PostsForPage";
import Image from "react-bootstrap/Image";
import pictures from "../images/piesek.jpg";

const libraries = ["places"];
export default function RouteBody(props) {
  const [mapInfo, setMapInfo] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // return (
  //   <div>
  //     {isLoaded && (
  //       <SmallMap
  //         style="ride-info-text"
  //         isLoaded={isLoaded}
  //         size={2}
  //         originPoint={props.route.startPlace}
  //         destinationPoint={props.route.endingPlace}
  //         setMapInfo={setMapInfo}
  //       />
  //     )}
  //     <PostsForPage link="route" />
  //   </div>
  // );

  return (
    <div className="route-page-container">
      <div className="route-page-header">
        <p>{props.route.name}</p>
      </div>
      <div className="route-page-map">
        {isLoaded && (
          <SmallMap
            isLoaded={isLoaded}
            size={2}
            originPoint={props.route.startPlace}
            destinationPoint={props.route.endingPlace}
            setMapInfo={setMapInfo}
            stops={props.route.stops}
          />
        )}
        <div className="route-page-map-card-container" >
          <div className="route-page-map-card">
            <div className="route-page-map-card-header">
              <p>Informacje o trasie</p>
            </div>
            <div className="route-page-info-imp">
              <div className="route-page-info-imp-map-info">
                <span>
                  <i className="bi bi-browser-safari"></i> {mapInfo[0]}
                </span>
                <span>
                  <i className="bi bi-clock-history"></i> {mapInfo[1]}
                </span>
              </div>

              <ImportantRouteInfo
                style="ride-info-text"
                startPlace={props.route.startPlace}
                endingPlace={props.route.endingPlace}
                rating={props.route.rating}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="route-page-info">
        <div className="route-page-info-header">
          <p>Opis przejazdu</p>
        </div>
        <p>{props.route.description}</p>
        <div className="route-page-info-owner">
          <p className="route-page-info-owner-title">Organizator</p>
          <p>
            <Image className="route-page-info-owner-avatar" src={pictures} />
            {props.route.owner.userName}
          </p>
        </div>
      </div>
      <div className="route-page-posts">
        <PostsForPage link="route" />
      </div>
    </div>
  );
}
