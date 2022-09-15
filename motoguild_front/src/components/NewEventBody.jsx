import { useState, useRef } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import BigMap from "./BigMap.jsx";
import { createNewEvent } from "../helpnigFunctions/ApiCaller.js";

const libraries = ["places"];
export default function NewEventBody() {
    const originRef = useRef();
    const [isOrigin, setIsPlace] = useState(false);   
    const [allInputsCorrect, setAllInputsCorrect] = useState(true);
    
    const [newEvent, setNewEvent] = useState({
        name: "",
        place: "",
        description: "",
        start: "",
        stop: "",
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
            newEvent.start === "" ||
            newEvent.stop === ""
        ) {
            event.preventDefault();
            setAllInputsCorrect(false);
            return;
        }
        setAllInputsCorrect(true);
        await createNewEvent(newEvent);       
    }

    function handleSelectPlace() {
        
        setNewEvent((prevState) => ({
            ...prevState,
            Place: originRef.current.value,
        }));
        setIsPlace(true);
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
                        className="standard-input"
                        ></input>
                    <label name="place">Miejsce</label>
                    {isLoaded && (
                        <Autocomplete onPlaceChanged={handleSelectPlace}>
                            <input
                                type="text"
                                name="place"
                                value={newEvent.place}
                                onChange={handleChange}
                                className="standard-input"
                                ref={originRef}
                                ></input>
                        </Autocomplete>
                    )}
                    <label name="start">Data Rozpoczęcia</label>
                    <input 
                        type="date" 
                        name="start" 
                        value={newEvent.start} 
                        onChange={handleChange} 
                        className="standard-input"
                        ></input>
                    <label name="stop">Data Zakończenia</label>
                    <input 
                        type="date" 
                        name="stop" 
                        value={newEvent.stop} 
                        onChange={handleChange} 
                        className="standard-input"
                        ></input>
                    </div>
                
                <div className="right-column">
                    <label name="description">Opis</label>
                    <textarea
                        type="text"
                        name="description"
                        value={newEvent.description}
                        onChange={handleChange}
                        className="description-input"
                        ></textarea>
                </div>
                <div>
                    <button type="submit" className="standard-button">Stwórz</button>
                    {!allInputsCorrect && (
                        <p className="error-message">Wypełnij wszystkie pola</p>)}
                </div>
             </form>
             {isLoaded && (
                <BigMap
                    coordinates={coordinates}
                    isOrigin={isOrigin}
                    originRef={originRef}
                    />
                )}
        </div>
    );
}