import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CustomAutocomplete from "./CustomAutocomplete";
import { getAllRoutes } from "../helpnigFunctions/ApiCaller";
import { Rating } from "react-simple-star-rating";
import SmallMap from "./SmallMap.jsx";
import { useLoadScript } from "@react-google-maps/api";
import DateFrontToBack from "../helpnigFunctions/DateFrontToBack";
import { createNewRide } from "../helpnigFunctions/ApiCaller";
import { Link } from "react-router-dom";

const libraries = ["places"];
export default function NewRideBody() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });
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
  const [routes, setRoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRoute, setIsRoute] = useState(false);

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
    await createNewRide(rideTosave);
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
    <div>
      <form onSubmit={handleSubmit} className="create-ride-body">
        <div className="left-column">
          <label name="name">Nazwa przejazdu</label>
          <input
            className="standard-input"
            type="text"
            name="name"
            value={newRide.name}
            onChange={handleChange}
          ></input>
          <label name="rideDate">Data przejazdu</label>
          <input
            className="standard-input"
            type="date"
            name="rideDate"
            value={newRide.rideDate}
            onChange={handleChange}
          ></input>
          <label name="rideHour">Godzina przejazdu</label>
          <input
            className="standard-input"
            type="time"
            name="rideHour"
            value={newRide.rideHour}
            onChange={handleChange}
          ></input>
          <br></br>
          <Rating
            initialValue={0}
            readonly={false}
            size={70}
            className="ride-info-text-stars"
            onClick={handleRating}
          />
        </div>
        <div className="right-column">
          <label name="description">Krótki opis</label>
          <textarea
            className="description-input"
            type="text"
            name="description"
            value={newRide.description}
            onChange={handleChange}
          ></textarea>
          <p>Wybierz istniejącą trasę:</p>
          {!isLoading && (
            <CustomAutocomplete
              saveRoute={setNewRide}
              setIsRoute={setIsRoute}
              routes={routes}
            />
          )}
          {isLoaded && isRoute && (
            <SmallMap
              isLoaded={isLoaded}
              size={3}
              originPoint={newRide.route.startPlace}
              destinationPoint={newRide.route.endingPlace}
              setMapInfo={setMapInfo}
            />
          )}
          {!isValidRide && (
            <p className="error-message">Uzupełnij wszystkie pola!</p>
          )}
        </div>

        <button className="standard-button">Stwórz</button>
      </form>
      <Link to={`/create-route`}>
        <button>
          Dodaj nową trasę lub wybierz istniejącą w wyszukiwarce powyżej
        </button>
      </Link>
    </div>
  );
}
