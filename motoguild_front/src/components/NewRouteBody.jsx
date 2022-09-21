import { useState, useRef } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import BigMap from "./BigMap.jsx";
import { createNewRoute } from "../helpnigFunctions/ApiCaller.js";

const libraries = ["places"];
export default function NewRouteBody() {
  const originRef = useRef();
  const destinationRef = useRef();
  const stop1Ref = useRef();
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
  const [isStop1, setIsStop1] = useState(false);
  const [isStop1Saved, setIsStop1Saved] = useState(false);
  const [stops, setStops] = useState([]);
  const [stop1, setStop1] = useState({name: 'Stop1', place: '', description: 'Opis' });
  // {place: "poznań"}
  // {id: 1, name: 'Stop1', place: 'Warszawa', description: 'Opis'}


  const [allInputsCorrect, setAllInputsCorrect] = useState(true);

  const [newRoute, setNewRoute] = useState({
    name: "",
    startPlace: "",
    endingPlace: "",
    description: "",
    rating: 0,
    owner: { id: 1, userName: "b-man", email: "www@665.pl", rating: 0 },

  });

  const [coordinates, setCoordinates] = useState({
    lat: 52.237049,
    lng: 21.017532,
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if ([name] == "startPlace") {
      setIsOrigin(false);
    }
    if ([name] == "endingPlace") {
      setIsDestination(false);
    }

    setNewRoute((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleChangeStop1(event) {
    setIsStop1(false);
    const { name, value } = event.target;
    setStops([]);
    setIsStop1Saved(false)
    setStop1((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    // event.preventDefault()
    if (
      newRoute.description === "" ||
      newRoute.endingPlace === "" ||
      newRoute.startPlace === "" ||
      newRoute.name === ""
    ) {
      console.log(stops)
      console.log(stop1)
      event.preventDefault();
      setAllInputsCorrect(false);
      return;
    }
    setAllInputsCorrect(true);
    await createNewRoute(newRoute);
  }
  function handleSelectOrigin() {
    setNewRoute((prevState) => ({
      ...prevState,
      startPlace: originRef.current.value,
    }));
    setIsOrigin(true);
  }

  function handleSelectDestination() {
    setNewRoute((prevState) => ({
      ...prevState,
      endingPlace: destinationRef.current.value,
    }));
    setIsDestination(true);
  }
  function handleSelectStop1() {
    setStop1((prevState) => ({
      ...prevState,
      place: stop1Ref.current.value,
    }));
    
    setIsStop1(true);
  }

  function saveStop1()
  {
    const stop1Exists = stops.some(element => {
      if (element.name === 'Stop1') {
        return true;
      }
      return false;
    })
    if(isStop1 && !stop1Exists)
    {
      setStops((prevState) => ([...prevState, stop1]))
      setIsStop1Saved(true)
    }
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-ride-body">
        <div className="left-column">
          <label name="name">Nazwa trasy</label>
          <input
            className="standard-input"
            type="text"
            name="name"
            value={newRoute.name}
            onChange={handleChange}
          ></input>
          <label name="startPoint">Początek trasy</label>
          {isLoaded && (
            <Autocomplete onPlaceChanged={handleSelectOrigin}>
              <input
                className="standard-input"
                type="text"
                name="startPlace"
                value={newRoute.startPlace}
                onChange={handleChange}
                ref={originRef}
              ></input>
            </Autocomplete>
          )}
          <label name="endPoint">Koniec trasy</label>
          {isLoaded && (
            <div>
              <Autocomplete onPlaceChanged={handleSelectDestination}>
                <input
                  className="standard-input"
                  type="text"
                  name="endingPlace"
                  value={newRoute.endingPlace}
                  onChange={handleChange}
                  ref={destinationRef}
                ></input>
              </Autocomplete>
            </div>
          )}
        </div>
        <div className="right-column">
        <label name="place">Dodaj przystanek:</label>
          {isLoaded && (
            <div>
              <Autocomplete onPlaceChanged={handleSelectStop1}>
                <input
                  className="standard-input"
                  type="text"
                  name="place"
                  value={stop1.place}
                  onChange={handleChangeStop1}
                  ref={stop1Ref}
                ></input>
              </Autocomplete>
              <button type="button" onClick={saveStop1}>Dodaj</button>
            </div>
          )}
          <label name="description">Krótki opis</label>
          <textarea
            className="description-input"
            type="text"
            name="description"
            value={newRoute.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="standard-button">Stwórz</button>
          {!allInputsCorrect && (
            <p className="error-message">
              Musisz uzupełnić wszystkie pola, żeby stworzyć nową trasę
            </p>
          )}
        </div>
      </form>
      {isLoaded && (
        <BigMap
          coordinates={coordinates}
          originRef={originRef}
          destinationRef={destinationRef}
          isOrigin={isOrigin}
          isDestination={isDestination}
          stops={stops}
          isStops={isStop1Saved}
        />
      )}
    </div>
  );
}
