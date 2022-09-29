import { useState, useRef, useEffect } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import BigMap from "./BigMap.jsx";
import { createNewRoute } from "../helpnigFunctions/ApiCaller.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link, useNavigate } from "react-router-dom";

const libraries = ["places"];
export default function NewRouteBody() {
  const navigate = useNavigate();
  const originRef = useRef();
  const destinationRef = useRef();
  const stop1Ref = useRef();
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
  const [isStop1, setIsStop1] = useState(false);
  const [isStop1Saved, setIsStop1Saved] = useState(false);
  const [stopsToSave, setStopsToSave] = useState([]);
  const [stopsChangeCounter, setStopsChangeCounter] = useState(0);
  const [stop1, setStop1] = useState({
    name: "Stop1",
    place: "",
    description: "Opis",
  });
  // {place: "poznań"}
  // {id: 1, name: 'Stop1', place: 'Warszawa', description: 'Opis'}

  const [allInputsCorrect, setAllInputsCorrect] = useState(true);
  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isDescriptionCorrect, setIsDescriptionCorrect] = useState(true);

  const [newRoute, setNewRoute] = useState({
    name: "",
    startPlace: "",
    endingPlace: "",
    description: "",
    rating: 0,
    owner: { id: 1, userName: "b-man", email: "www@665.pl", rating: 0 },
    stops: [],
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
    // setIsStop1(false);
    const { name, value } = event.target;
    // setIsStop1Saved(false);
    setStop1((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function checkIfNameIsCorrect()
  {
    if (newRoute.name.length < 5 || newRoute.name.length > 25)
    {
      setIsNameCorrect(false)
      return false
    }
    else {
      setIsNameCorrect(true)
      return true
    }
  }

  function checkIfDescriptionIsCorrect()
  {
    if (newRoute.description.length < 5 || newRoute.description.length > 150)
    {
      setIsDescriptionCorrect(false)
      return false
    }
    else {
      setIsDescriptionCorrect(true)
      return true
    }
  }

  async function handleSubmit(event) {
    const isName = await checkIfDescriptionIsCorrect();
    const isDescription = await checkIfNameIsCorrect();
    if (
      !isOrigin ||
      !isDestination ||
      !isDescription ||
      !isName
    ) {
      event.preventDefault();
      setAllInputsCorrect(false);
      return;
    }
    setAllInputsCorrect(true);
    event.preventDefault();
    const newRouteId = await createNewRoute(newRoute);
    navigate(`/routes/${newRouteId}`);
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

  function saveStop1() {
    const stop1Exists = stopsToSave.some((element) => {
      if (element.place === stop1.place) {
        return true;
      }
      return false;
    });
    if (isStop1 && !stop1Exists) {
      setStopsToSave((prevState) => [...prevState, stop1]);
      setIsStop1Saved(true);
    }
  }

  const handleRemoveStop = (e) => {
    setStopsToSave(
      stopsToSave.filter((item) => item.place != e.target.outerText)
    );
  };

  useEffect(() => {
    setNewRoute((prevState) => ({
      ...prevState,
      stops: stopsToSave,
    }));
  }, [stopsToSave]);

  return (
    <div className="create-route-body">
      <form onSubmit={handleSubmit}>
        <div className="left-column">
          <label className="label-custom" name="name">
            Nazwa trasy<span className="error-message small-message"><i className="bi bi-asterisk"></i></span>
          </label>
          <input
            className="standard-input"
            type="text"
            name="name"
            value={newRoute.name}
            onChange={handleChange}
            placeholder="Wpisz nazwę trasy"
          ></input>
          {!isNameCorrect && <p className="error-message">Nazwa trasy musi mieć od 5 do 25 znaków!</p>}
          <label className="label-custom" name="startPoint">
            Początek trasy<span className="error-message small-message"><i className="bi bi-asterisk"></i></span>
          </label>
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
          <label className="label-custom" name="endPoint">
            Koniec trasy<span className="error-message small-message"><i className="bi bi-asterisk"></i></span>
          </label>
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
          <label className="label-custom" name="place">
            Dodaj przystanek:
          </label>
          {isLoaded && (
            <div className="add-stops-container">
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
              <button
                className="btn btn-secondary"
                type="button"
                onClick={saveStop1}
              >
                Dodaj
              </button>
            </div>
          )}
          {stopsToSave.length > 0 && (
            <DragDropContext
              onDragEnd={(param) => {
                const source = param.source.index;
                let destination = null;
                if (param.destination) {
                  destination = param.destination.index;
                }
                if (destination) {
                  stopsToSave.splice(
                    destination,
                    0,
                    stopsToSave.splice(source, 1)[0]
                  );
                  setStopsToSave(stopsToSave);
                  setStopsChangeCounter((prevState) => prevState + 1);
                }
              }}
            >
              <p className="added-stops-header">Dodane przystanki:</p>
              <Droppable droppableId="droppable-1">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef}>
                    {stopsToSave.map((stop, i) => (
                      <Draggable
                        key={stop.place}
                        draggableId={`draggable-${stop.place}`}
                        index={i}
                      >
                        {(provided, snapshot) => (
                          <div
                            className="stops-list"
                            key={stop.place}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={{
                              ...provided.draggableProps.style,
                              boxShadow: snapshot.isDragging
                                ? "0 0 .4rem #666"
                                : "none",
                            }}
                          >
                            <p>
                              <i
                                {...provided.dragHandleProps}
                                className="bi bi-grip-horizontal"
                              ></i>
                              <i
                                onClick={handleRemoveStop}
                                className="delete-button bi bi-trash3"
                              >
                                {stop.place}
                              </i>
                            </p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
          <label className="label-custom" name="description">
            Krótki opis<span className="error-message small-message"><i className="bi bi-asterisk"></i></span>
          </label>
          <textarea
            className="description-input"
            type="text"
            name="description"
            value={newRoute.description}
            onChange={handleChange}
            placeholder="Dodaj krótki opis..."
          ></textarea>
          {!isDescriptionCorrect && <p className="error-message">Opis trasy musi mieć od 5 do 150 znaków!</p>}
          <button
            type="submit"
            className="btn btn-secondary create-route-submit-btn"
          >
            Stwórz
          </button>
          {!allInputsCorrect && (
            <p className="error-message">
              <span className="error-message small-message"><i className="bi bi-asterisk"></i></span>Uzupełnij wszystkie wymagane pola!
            </p>
          )}
        </div>
        <div className="right-column">
          {isLoaded && (
            <BigMap
              coordinates={coordinates}
              originRef={originRef}
              destinationRef={destinationRef}
              isOrigin={isOrigin}
              isDestination={isDestination}
              stops={stopsToSave}
              isStops={isStop1Saved}
              stopsChange={stopsChangeCounter}
            />
          )}
        </div>
      </form>
    </div>
  );
}
