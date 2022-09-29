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
import RideParticipants from "./RideParticipants";
import {
  addLoggedUserToRide,
  deleteLoggedUserFromRide,
  getLoggedUserData,
} from "../helpnigFunctions/ApiCaller";

const libraries = ["places"];
export default function RideBody(props) {
  const [mapInfo, setMapInfo] = useState([]);
  const [user, setUser] = useState({});
  const [userJoined, setUserJoined] = useState(false);
  const [userIsOwner, setUserIsOwner] = useState(false);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    async function getUser() {
      const data = await getLoggedUserData();
      setUser(data);
      return data.id;
    }
    async function userJoined(userId) {
      let joined = false;
      props.ride.participants.forEach((element) => {
        if (element.id == userId) {
          joined = true;
        }
      });
      if (joined) {
        setUserJoined(true);
      } else {
        setUserJoined(false);
      }
    }
    async function userOwner(userId) {
      if (props.ride.owner.id == userId) {
        setUserIsOwner(true);
      }
    }
    async function helperFunction() {
      const userId = await getUser();
      await userJoined(userId);
      await userOwner(userId);
    }
    helperFunction();
  }, [props.ride]);

  async function handleJoin() {
    await addLoggedUserToRide(props.ride.id);
    props.setButtonClicked((prevState) => prevState + 1);
  }

  async function handleQuit() {
    await deleteLoggedUserFromRide(props.ride.id);
    props.setButtonClicked((prevState) => prevState + 1);
  }

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
          <div className="ride-page-map-card-container">
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
              {!userIsOwner && userJoined && (
                <button
                  className="btn btn-secondary custom-red-button"
                  onClick={handleQuit}
                >
                  Odejdź
                </button>
              )}

              {!userJoined && (
                <button
                  className="btn btn-secondary custom-red-button"
                  onClick={handleJoin}
                >
                  Weź udział
                </button>
              )}
            </div>
          </div>
        </div>
        <RideParticipants participants={props.ride.participants} />
        <div className="ride-page-posts">
          <PostsForPage link="ride" />
        </div>
      </div>
    </div>
  );
}
