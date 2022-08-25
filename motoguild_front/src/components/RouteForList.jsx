import SmallMap from './SmallMap';
import { useLoadScript} from "@react-google-maps/api"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Link} from "react-router-dom";
import { Rating } from 'react-simple-star-rating'


const libraries = ['places']
export default function RouteForList(props)
{
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries

    })


    return (
        <div>
            
            <Container className="for-list" >
                <Row>
                <Col sm={12} className="normal-container" >
                    <Link to={`/routes/${props.id}`}><h2>{props.name}</h2></Link>
                </Col>
                </Row>
                <Row>
                    <Col sm={5}>
                    {isLoaded && <SmallMap small={true} originPoint={props.startPlace} destinationPoint={props.endingPlace} />}
                    </Col>
                    <Col className="text-container" sm={4}>
                    <Rating initialValue={props.rating} readonly={true} />
                    </Col>
                    <Col>
                        <h3><i className="bi bi-person-circle"></i></h3>
                        <h3>{props.owner.userName}</h3>
                    </Col>

                </Row>
                
            </Container>
        </div>
    )
}