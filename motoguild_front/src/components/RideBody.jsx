import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Rating } from 'react-simple-star-rating'
import { useLoadScript} from "@react-google-maps/api"
import SmallMap from './SmallMap';
import ImportantRideInfo from './ImportantRideInfo';

const libraries = ['places']
export default function RideBody(props)
{
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries

    })


    return (
        <div>
            <div className="ride-for-list">
                <Container>
                    <Row>
                        <Col sm={6}>
                            {isLoaded && <SmallMap small={false} originPoint={props.ride.startPlace} destinationPoint={props.ride.endingPlace} />}
                        </Col>
                        <Col sm={6}  >
                            <h3>Opis przejazdu</h3>
                            <p>{props.ride.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}  >
                            <h4><i className="bi bi-person-circle"></i> {props.owner}OWNER NAME</h4><br></br>
                            <ImportantRideInfo startPlace={props.ride.startPlace} endingPlace={props.ride.endingPlace} startTime={props.ride.startTime} />
                            <Rating initialValue={props.ride.minimumRating} readonly={true} />
                        </Col>
                        <Col sm={6}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h1>POSTY</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <button>Weź udział</button>
        </div>
    )
}