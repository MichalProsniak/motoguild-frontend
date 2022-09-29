import EventSmallMap from "./EventSmallMap";
import { useLoadScript } from "@react-google-maps/api";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import ImportantEventInfo from "./ImportantEventInfo";
import pictures from "../images/piesek.jpg";
import Image from "react-bootstrap/Image";


const libraries = ["places"];

export default function EventForList(props) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    
    return (
        <div className="for-list">
        <Container>
            <Row>
            <Col sm={4}>
                {isLoaded && (
                <EventSmallMap
                    place = {props.place}
                    size={1}
                />
                )}
            </Col>
            <Col className="text-container" sm={5}>
                <ImportantEventInfo
                style="event-info-text-for-list"
                nameId={props.id}
                nameText={props.name}
                place={props.place}
                
                startDate = {props.startDate}
                stopDate = {props.stopDate}
                />
            </Col>
            <Col>
                <div className="for-list-user">
                <Image
                    className="img fluid rounded-circle for-list-user-avatar"
                    src={pictures}
                />
                <h3 className="for-list-user-text">{props.owner.userName}</h3>
                <h3 className="for-list-participants">
                    <i className="bi bi-person-lines-fill for-list-participants-icon"></i>
                    {"  "}
                    {props.participants}
                </h3>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
    );
    }