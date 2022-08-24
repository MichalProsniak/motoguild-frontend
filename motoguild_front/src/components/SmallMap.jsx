import { GoogleMap, useLoadScript, MarkerF, DirectionsRenderer } from "@react-google-maps/api"
import {useState, useRef, useEffect} from "react"

const libraries = ['places']

export default function SmallMap(props)
{
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries
    })

    const [directionsResponse, setDirectionsResponse] = useState(null)
    useEffect(() => {
            async function calculateRoute() {
                if (props.originPoint === '' || props.destinationPoint === '')
                {
                    return
                }
                const directionsService = new google.maps.DirectionsService()
                const results = await directionsService.route({
                    origin: props.originPoint,
                    destination: props.destinationPoint,
                    travelMode: google.maps.TravelMode.DRIVING
                })
            setDirectionsResponse(results)}
            
        calculateRoute()}, [])


    return (<div>{isLoaded && <GoogleMap mapContainerClassName="googlemap-small" options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false }}>
            <MarkerF/>
            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>}
        </div>)

}