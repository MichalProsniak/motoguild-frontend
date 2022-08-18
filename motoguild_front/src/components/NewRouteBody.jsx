import {useState, useRef} from "react"
import { useLoadScript, Autocomplete} from "@react-google-maps/api"
import BigMap from './BigMap.jsx'

const libraries = ['places']
export default function NewRouteBody()
{
    const originRef = useRef()
    const destinationRef = useRef()

    const [newRoute, setNewRoute] = useState({
        name: "",
        startPoint: "",
        endPoint: "",
        description: ""
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

      function handleSubmit(event)
      {
        event.preventDefault()
        console.log(newRoute)
      }

    return (
        <div>
            <h1 className="page-title">Dodaj trasę</h1> 
            <form onSubmit={handleSubmit} className="create-ride-body">
                <div className="left-column">
                    <label name="name">Nazwa trasy</label>
                    <input className="standard-input" type="text" name="name" value={newRoute.name} onChange={handleChange}></input>
                    <label name="startPoint">Początek trasy</label>
                    {isLoaded && <Autocomplete>
                        <input className="standard-input" type="text" name="startPoint" value={newRoute.startPoint} onChange={handleChange} ref={originRef} ></input>
                    </Autocomplete>}
                    <label name="endPoint">Koniec trasy</label>
                    {isLoaded && <Autocomplete>
                        <input className="standard-input" type="text" name="endPoint" value={newRoute.endPoint} onChange={handleChange} ref={destinationRef}></input>
                    </Autocomplete>}
                </div>
                <div className="right-column">
                    <label name="description">Krótki opis</label>
                    <textarea className="description-input" type="text" name="description" value={newRoute.description} onChange={handleChange}></textarea>
                </div>
                <button className="standard-button">Stwórz</button>
            </form>
            {isLoaded && <BigMap coordinates={coordinates} originRef={originRef} destinationRef={destinationRef} />}
        </div>
    )
}