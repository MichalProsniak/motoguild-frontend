import {useState, useRef} from "react"
import { useLoadScript, Autocomplete} from "@react-google-maps/api"
import BigMap from './BigMap.jsx'



const libraries = ['places']
export default function NewRouteBody()
{
    const originRef = useRef()
    const destinationRef = useRef()
    const [isOrigin, setIsOrigin] = useState(false)
    const [isDestination, setIsDestination] = useState(false)

    const [allInputsCorrect, setAllInputsCorrect] = useState(true)

    const [newRoute, setNewRoute] = useState({
        name: "",
        startPlace: "",
        endingPlace: "",
        description: "",
        rating: 0,
        owner: {"id": 1,
            "userName": "b-man",
            "email": "www@665.pl",
            "rating": 0}
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
        if ([name] == 'startPlace' )
        {
            setIsOrigin(false)
        }
        if ([name] == 'endingPlace' )
        {
            setIsDestination(false)
        }
        
        setNewRoute(prevState => ({
            ...prevState,
            [name]: value
          })) 
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
      function handleSelectOrigin()
      {
        setNewRoute(prevState => ({
            ...prevState,
            startPlace: originRef.current.value
          })) 
          setIsOrigin(true)
      }

      function handleSelectDestination()
      {
        setNewRoute(prevState => ({
            ...prevState,
            endingPlace: destinationRef.current.value
          })) 
          setIsDestination(true)
      }

     

    return (
        <div>
            <form onSubmit={handleSubmit} className="create-ride-body">
                <div className="left-column">
                    <label name="name">Nazwa trasy</label>
                    <input className="standard-input" type="text" name="name" value={newRoute.name} onChange={handleChange}></input>
                    <label name="startPoint">Początek trasy</label>
                    {isLoaded && <Autocomplete onPlaceChanged={handleSelectOrigin} >
                        <input className="standard-input" type="text" name="startPlace" value={newRoute.startPlace} onChange={handleChange} ref={originRef}></input>
                    </Autocomplete>}
                    <label name="endPoint">Koniec trasy</label>
                    {isLoaded && <Autocomplete onPlaceChanged={handleSelectDestination}>
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
            {isLoaded && <BigMap coordinates={coordinates} originRef={originRef} destinationRef={destinationRef} isOrigin={isOrigin} isDestination={isDestination}/>}
        </div>
    )
}