import { GoogleMap, useLoadScript, MarkerF, DirectionsRenderer } from "@react-google-maps/api"
import {useState, useRef} from "react"

const libraries = ['places']

export default function BigMap(props)
{
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries
    })

    const [directionsResponse, setDirectionsResponse] = useState(null)

    async function calculateRoute() {
        if (props.originRef.current.value === '' || props.destinationRef.current.value === '')
        {
            return
        }
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: props.originRef.current.value,
            destination: props.destinationRef.current.value,
            travelMode: google.maps.TravelMode.DRIVING
        })
        setDirectionsResponse(results)
    }


    return (<div>{isLoaded && <GoogleMap zoom={7} center={props.coordinates} mapContainerClassName="googlemap" options={{
        streetViewControl: false,
        mapTypeControl: false }}>
            <MarkerF/>
            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>}
        {isLoaded && <button type="button" onClick={calculateRoute}>Zaktualizuj mapę</button>}
        </div>)

}