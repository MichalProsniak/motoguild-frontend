import {useState, useEffect} from 'react'
import SmallMap from './SmallMap';
import { useLoadScript} from "@react-google-maps/api"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Rating } from 'react-simple-star-rating'


const libraries = ['places']
export default function RideForList(props)
{

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries

    })
    // console.log(props.startPlace)
    // console.log(props.startTime)

    const dayMonthYear = props.startTime.slice(0,10).split("-").reverse().join(".")
    const hourMinutes = props.startTime.split("T")[1].slice(0,5)
    
    return (
        <div className="ride-for-list" >
            <Container>
                <Row>
                <Col sm={12} className="normal-container" >
                    <h2>{props.name}</h2>
                </Col>
                </Row>
                <Row>
                    <Col sm={5}>
                    {isLoaded && <SmallMap originPoint={props.startPlace} destinationPoint={props.endingPlace} />}
                    </Col>
                    <Col className="text-container" sm={4}>
                        <p><i className="bi bi-record-circle"></i> {props.startPlace}</p>
                        <p><i className="bi bi-caret-right-fill"></i> {props.endingPlace}</p>
                        <p><i className="bi bi-calendar-check"></i> {dayMonthYear}</p>
                        <p><i className="bi bi-alarm"></i> {hourMinutes}</p>
                
                    </Col>
                    <Col>
                        <h3><i className="bi bi-person-circle"></i></h3>
                        <h3>{props.owner}</h3>
                        <h3>OWNER NAME</h3>
                    </Col>

                </Row>
                <Row>
                    <Col sm={5}>
                    <Rating initialValue={props.minimumRating} readonly={true} />
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}