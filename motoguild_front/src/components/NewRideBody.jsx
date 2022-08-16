import {useState} from "react"

export default function NewRideBody(){
    
    const [newRide, setNewRide] = useState({
        rideName: "",
        rideDate: "",
        rideHour: "",
        astimatedSpeed: "",
        existingRoute: "" 
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

    return (
      <form onSubmit={handleSubmit} className="create-ride-body">
        <div className="left-column">
          <label name="rideName" >Nazwa przejazdu</label>
          <input className="standard-input" name="rideName" value={newRide.rideName} onChange={handleChange} placeholder="Nazwa" ></input>
          <label name="rideDate" >Data przejazdu</label>
          <input className="standard-input" name="rideDate" value={newRide.rideDate} onChange={handleChange} placeholder="Data" ></input>
          <label name="rideHour" >Godzina przejazdu</label>
          <input className="standard-input" name="rideHour" value={newRide.rideHour} onChange={handleChange} placeholder="Godzina" ></input>
          <label name="astimatedSpeed">Orientacyjna prędkość przejazdu [km/h]</label>
          <input className="standard-input" name="astimatedSpeed" value={newRide.astimatedSpeed} onChange={handleChange} placeholder="Prędkość" ></input>
        </div>
        <div className="right-column">
          <label name="existingRoute">Wyszukaj istniejącą trasę</label>
          <input className="standard-input" name="existingRoute" value={newRide.existingRoute} onChange={handleChange} placeholder="Trasa" ></input>
        </div>
        <button className="standard-button">Stwórz</button>
      </form>
    )
}