import { useState, useRef } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import { createNewEvent } from "../helpnigFunctions/ApiCaller.js";
import EventMap from "./EventMap.jsx";
import DateFrontToBack from "../helpnigFunctions/DateFrontToBack.js";
import { Link, useNavigate } from "react-router-dom";

const libraries = ["places"];
export default function NewEventBody() {
  const originRef = useRef();
  const [isOrigin, setIsPlace] = useState(false);
  const [allInputsCorrect, setAllInputsCorrect] = useState(true);
  const navigate = useNavigate();

  const [newEvent, setNewEvent] = useState({
    name: "",
    place: "",
    description: "",
    startDate: "",
    startHour: "",
    stopDate: "",
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
    if ([name] == "place") {
      setIsPlace(false);
    }

    setNewEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    // event.preventDefault()
    if (
      newEvent.description === "" ||
      newEvent.place === "" ||
      newEvent.name === "" ||
      newEvent.startDate === "" ||
      newEvent.startHour === "" ||
      newEvent.stopDate === ""
    ) {
      event.preventDefault();
      setAllInputsCorrect(false);
      return;
    }
    event.preventDefault();
    setAllInputsCorrect(true);
    const newDate = DateFrontToBack(newEvent.startDate, newEvent.startHour);
    const eventToSave = {
      name: newEvent.name,
      description: newEvent.description,
      place: newEvent.place,
      startDate: newDate,
      stopDate: newEvent.stopDate,
      owner: newEvent.owner,
    };
    const eventId = await createNewEvent(eventToSave);
    navigate(`/events/${eventId}`);
  }

  function handleSelectPlace() {
    setNewEvent((prevState) => ({
      ...prevState,
      place: originRef.current.value,
    }));
    setIsPlace(true);
  }
  function test() {
    console.log(originRef.current.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-event-body">
        <div className="left-column">
          <label name="name">Nazwa wydarzenia</label>
          <input
            type="text"
            name="name"
            value={newEvent.name}
            onChange={handleChange}
            className="event-standard-input"
          ></input>
          <label name="place">Miejsce</label>
          {isLoaded && (
            <Autocomplete onPlaceChanged={handleSelectPlace}>
              <input
                type="text"
                name="place"
                value={newEvent.place}
                onChange={handleChange}
                className="event-standard-input"
                ref={originRef}
              ></input>
            </Autocomplete>
          )}
          <label name="startDate">Data Rozpoczęcia</label>
          <input
            type="date"
            name="startDate"
            value={newEvent.startDate}
            onChange={handleChange}
            className="event-standard-input"
          ></input>

          <label name="startHour">Godzina Rozpoczęcia</label>
          <input
            className="event-standard-input"
            type="time"
            name="startHour"
            value={newEvent.startHour}
            onChange={handleChange}
          ></input>

          <label name="stopDate">Data Zakończenia</label>
          <input
            type="date"
            name="stopDate"
            value={newEvent.stopDate}
            onChange={handleChange}
            className="event-standard-input"
          ></input>
        </div>

        <div>
          <label name="description">Opis</label>
          <textarea
            type="text"
            name="description"
            value={newEvent.description}
            onChange={handleChange}
            className="event-description-input"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-secondary create-group-submit-btn"
          >
            Stwórz
          </button>
          {!allInputsCorrect && (
            <p className="error-message">Wypełnij wszystkie pola</p>
          )}
        </div>
      </form>
      <EventMap
        place={originRef}
        coordinates={coordinates}
        isOrigin={isOrigin}
      />
    </div>
  );
}
