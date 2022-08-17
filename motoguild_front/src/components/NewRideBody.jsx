import {useState} from "react"
import "bootstrap/dist/css/bootstrap.css";

export default function NewRideBody(){
    
    const [newRide, setNewRide] = useState({
        rideName: "",
        rideDate: "",
        rideHour: "",
        astimatedSpeed: "",
        existingRoute: "",
        isUsingExistingRoute: true
      })
    
      function handleChange(event)
      {
        const {name, value} = event.target
        setNewRide(prevState => ({
            ...prevState,
            [name]: value
          })) 
      }
      function handleSubmit(event)
      {
        event.preventDefault()
        console.log(newRide)
      }

      function changeToCreateNewRoute()
      {
        setNewRide(prevState => ({
          ...prevState,
          isUsingExistingRoute: false,
          existingRoute: ""
        })) 
      }

    return (
      <div>
        <h1 className="page-title" >Dodaj przejazd</h1>
        <form onSubmit={handleSubmit} className="create-ride-body">
          <div className="left-column">
            <label name="rideName" >Nazwa przejazdu</label>
            <input className="standard-input" type="text" name="rideName" value={newRide.rideName} onChange={handleChange}></input>
            <label name="rideDate" >Data przejazdu</label>
            <input className="standard-input" type="date" name="rideDate" value={newRide.rideDate} onChange={handleChange}></input>
            <label name="rideHour" >Godzina przejazdu</label>
            <input className="standard-input" type="time" name="rideHour" value={newRide.rideHour} onChange={handleChange}></input>
            <label name="astimatedSpeed">Orientacyjna prędkość przejazdu [km/h]</label>
            <input className="standard-input" type="number" min="30" max="300" name="astimatedSpeed" value={newRide.astimatedSpeed} onChange={handleChange}></input>
          </div>
          <div className="right-column">
            <label name="existingRoute">Wyszukaj istniejącą trasę</label>
            <input className="standard-input" name="existingRoute" value={newRide.existingRoute} onChange={handleChange}></input>
          </div>
          <button className="standard-button">Stwórz</button>
        </form>
        {newRide.isUsingExistingRoute && <button onClick={changeToCreateNewRoute}>Dodaj nową trasę lub wybierz istniejącą w wyszukiwarce powyżej</button>}
      </div>
    )
}