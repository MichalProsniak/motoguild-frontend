import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CustomAutocomplete from "./CustomAutocomplete";
import { getAllRoutes } from "../helpnigFunctions/ApiCaller";
import { Rating } from "react-simple-star-rating";
import SmallMap from "./SmallMap.jsx";
import { useLoadScript } from "@react-google-maps/api";
import DateFrontToBack from "../helpnigFunctions/DateFrontToBack";
import { createNewRide } from "../helpnigFunctions/ApiCaller";
import { Link, useNavigate } from "react-router-dom";

const libraries = ["places"];
export default function NewRideBody() {
  const [mapInfo, setMapInfo] = useState([]);
  const [isValidRide, setIsValidRide] = useState(true);
  const [newRide, setNewRide] = useState({
    name: "",
    description: "",
    rideDate: "",
    rideHour: "",
    estimation: 0,
    route: {},
    minimumRating: 0,
    Owner: {
      id: 1,
      userName: "b-man",
      email: "www@665.pl",
      rating: 0,
    },
  });
  const navigate = useNavigate();
  const [routes, setRoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRoute, setIsRoute] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewRide((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  async function handleSubmit(event) {
    if (
      newRide.name.length < 4 ||
      newRide.description.length < 4 ||
      newRide.rideDate === "" ||
      newRide.rideHour === "" ||
      !isRoute
    ) {
      event.preventDefault();
      setIsValidRide(false);
      return;
    }
    setIsValidRide(true);
    event.preventDefault();
    const newDate = DateFrontToBack(newRide.rideDate, newRide.rideHour);
    const rideTosave = {
      name: newRide.name,
      description: newRide.description,
      owner: newRide.Owner,
      minimumRating: newRide.minimumRating,
      estimation: newRide.estimation,
      startTime: newDate,
      route: newRide.route,
    };
    const newRideId = await createNewRide(rideTosave);
    navigate(`/rides/${newRideId}`);
  }

  function handleRating(rate) {
    rate = rate / 20;
    setNewRide((prevState) => ({
      ...prevState,
      minimumRating: rate,
    }));
  }

  useEffect(() => {
    async function fetchAllRoutes() {
      const data = await getAllRoutes();
      setRoutes(data);
      setIsLoading(false);
    }
    fetchAllRoutes();
  }, []);

  return (
    <div className="create-ride-body">
      <form onSubmit={handleSubmit}>
        <div className="left-column">
          <label className="label-custom" name="name">
            Nazwa przejazdu
          </label>
          <input
            className="standard-input"
            type="text"
            name="name"
            value={newRide.name}
            onChange={handleChange}
          ></input>
          <label className="label-custom" name="rideDate">
            Data przejazdu
          </label>
          <input
            className="standard-input"
            type="date"
            name="rideDate"
            value={newRide.rideDate}
            onChange={handleChange}
          ></input>
          <label className="label-custom" name="rideHour">
            Godzina przejazdu
          </label>
          <input
            className="standard-input"
            type="time"
            name="rideHour"
            value={newRide.rideHour}
            onChange={handleChange}
          ></input>
          <label className="label-custom">
            Minimalna ocena wymagana by dołączyć
          </label>
          <div className="rating-list">
            <Rating
              initialValue={0}
              readonly={false}
              size={24}
              className="ride-info-text-stars"
              onClick={handleRating}
            />
          </div>
          <label className="label-custom" name="description">
            Krótki opis
          </label>
          <textarea
            className="ride-description-input"
            type="text"
            name="description"
            value={newRide.description}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="btn btn-secondary create-route-submit-btn"
          >
            Stwórz
          </button>
        </div>
        <div className="right-column">
          <label className="label-custom">Wybierz istniejącą trasę:</label>
          {!isLoading && (
            <CustomAutocomplete
              saveRoute={setNewRide}
              setIsRoute={setIsRoute}
              routes={routes}
            />
          )}
          {isRoute && (
            <div className="create-ride-map-container">
              <SmallMap
                isLoaded={isLoaded}
                size={3}
                originPoint={newRide.route.startPlace}
                destinationPoint={newRide.route.endingPlace}
                setMapInfo={setMapInfo}
                stops={newRide.route.stops}
              />
            </div>
          )}
          <div className="create-ride-new-route-container">
            <span>Nie możesz znaleźć pożądanej trasy? </span>
            <Link to={`/create-route`}>
              <span>Stwórz nową!</span>
            </Link>
          </div>
          {!isValidRide && (
            <p className="error-message">Uzupełnij wszystkie pola!</p>
          )}
        </div>
      </form>
    </div>
  );
}
