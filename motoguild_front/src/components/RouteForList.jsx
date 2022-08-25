import SmallMap from './SmallMap';
import { useLoadScript} from "@react-google-maps/api"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const libraries = ['places']
export default function RouteForList(props)
{
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries

    })


    return (
        <div>
            {isLoaded && <SmallMap small={true} originPoint={props.startPlace} destinationPoint={props.endingPlace} />}
        </div>
    )
}