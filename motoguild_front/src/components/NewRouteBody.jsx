import {useState, useRef} from "react"
import { useLoadScript, Autocomplete} from "@react-google-maps/api"
import BigMap from './BigMap.jsx'
import usePlacesAutocomplete from "use-places-autocomplete"



const libraries = ['places']
export default function NewRouteBody()
{
    const originRef = useRef()
    const destinationRef = useRef()

    const [allInputsCorrect, setAllInputsCorrect] = useState(true)

    const [newRoute, setNewRoute] = useState({
        name: "",
        startPlace: "",
        endingPlace: "",
        description: "",
        rating: 0,
        owner: {"id": 2}
    })
    
    const [coordinates, setCoordinates] = useState({
        lat: 52.237049,
        lng: 21.017532
    })

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries

    })

    function handleChange(event)
      {
        const {name, value} = event.target
        setNewRoute(prevState => ({
            ...prevState,
            [name]: value
          })) 
      }

      function handleSelect(event)
      {
        event.preventDefault()
        const {name, value} = event.target
        console.log(value)
      }

      async function handleSubmit(event)
      {
        // event.preventDefault()
        if (newRoute.description === "" || newRoute.endingPlace ==="" || newRoute.startPlace === "" ||
        newRoute.name === "") {
            event.preventDefault()
            setAllInputsCorrect(false)
            return
        }
        setAllInputsCorrect(true)
        console.log(newRoute)
        try{
            const res = await fetch('https://localhost:3333/api/routes/',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newRoute)
            })
          }catch (error){
            console.log(error)
          }

      }

      function changePlace(event)
      {
        console.log(event)
      }

      const PlacesAutocomplete = ( { setSelected }) => {
        const {
            ready,
            value,
            setValue,
            suggestions: { status, data },
            clearSuggestions,
        } = usePlacesAutocomplete();
        return <div></div>
      }

    return (
        <div>
            <form onSubmit={handleSubmit} className="create-ride-body">
                <div className="left-column">
                    <label name="name">Nazwa trasy</label>
                    <input className="standard-input" type="text" name="name" value={newRoute.name} onChange={handleChange}></input>
                    <label name="startPoint">Początek trasy</label>
                    {isLoaded && <Autocomplete >
                        <input className="standard-input" type="text" name="startPlace" value={newRoute.startPlace} onChange={handleChange} ref={originRef}></input>
                    </Autocomplete>}
                    <label name="endPoint">Koniec trasy</label>
                    {isLoaded && <Autocomplete>
                        <input className="standard-input" type="text" name="endingPlace" value={newRoute.endingPlace} onChange={handleChange} ref={destinationRef}></input>
                    </Autocomplete>}
                </div>
                <div className="right-column">
                    <label name="description">Krótki opis</label>
                    <textarea className="description-input" type="text" name="description" value={newRoute.description} onChange={handleChange}></textarea>
                </div>
                <div>
                    <button className="standard-button">Stwórz</button>
                    {!allInputsCorrect && <p className="error-message">Musisz uzupełnić wszystkie pola, żeby stworzyć nową trasę</p>}
                </div>
                
            </form>
            {isLoaded && <BigMap coordinates={coordinates} originRef={originRef} destinationRef={destinationRef} />}
        </div>
    )
}