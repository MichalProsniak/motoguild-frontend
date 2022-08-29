import { useLoadScript} from "@react-google-maps/api"
import SmallMap from './SmallMap';


const libraries = ['places']
export default function RouteBody(props) 
{
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries

    })


    return (
    <div>
        {isLoaded && <SmallMap small={false} originPoint={props.route.startPlace} destinationPoint={props.route.endingPlace} />}
    </div>
        
    )
}