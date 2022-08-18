import { GoogleMap, useLoadScript, MarkerF, DirectionsRenderer } from "@react-google-maps/api"
import {useState, useRef} from "react"

const libraries = ['places']

export default function SmallMap(props)
{
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries
    })

    const [directionsResponse, setDirectionsResponse] = useState({
        origin: props.origin,
        destination: props.destination,
        travelMode: google.maps.TravelMode.DRIVING
    })


    return (<div>{isLoaded && <GoogleMap zoom={7} center={props.coordinates} mapContainerClassName="googlemap-small" options={{
        streetViewControl: false,
        mapTypeControl: false }}>
            <MarkerF/>
            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>}
        </div>)

}