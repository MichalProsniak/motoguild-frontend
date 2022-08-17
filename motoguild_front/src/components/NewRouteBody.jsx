import {useState} from "react"

export default function NewRouteBody()
{
    const [newRoute, setNewRoute] = useState({
        name: "",
        startPoint: "",
        endPoint: "",
        description: ""
    })


    function handleChange(event)
      {
        const {name, value} = event.target
        setNewRoute(prevState => ({
            ...prevState,
            [name]: value
          })) 
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
                    <input className="standard-input" type="text" name="startPoint" value={newRoute.startPoint} onChange={handleChange}></input>
                    <label name="endPoint" >Godzina przejazdu</label>
                    <input className="standard-input" type="text" name="endPoint" value={newRoute.endPoint} onChange={handleChange}></input>
                </div>
                <div className="right-column">
                    <label name="description">Krótki opis</label>
                    <textarea className="description-input" type="text" name="description" value={newRoute.description} onChange={handleChange}></textarea>
                </div>
                <button className="standard-button">Stwórz</button>
            </form>

        </div>
    )
}