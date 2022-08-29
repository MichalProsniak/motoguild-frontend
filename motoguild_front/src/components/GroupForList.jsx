import React from 'react'
import picture from '../images/piesek.jpg'
import { Rating } from 'react-simple-star-rating'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import {Link} from "react-router-dom";

export default function GroupForList(props)
{
    return (
        <Container className="group">
        <Row>
            <Col sm={2}>
            <Link to={`/groups/${props.id}`}><img className='img fluid rounded-circle' style={{height: '200px', width: '200px'}} src={picture} /></Link>
            </Col>
            <Col sm={5}>
                <Row >
                    <Link to={`/groups/${props.id}`}><h3>{props.name}</h3></Link>
                    {props.isPrivate ? <p>Prywatna</p> : <p>Publiczna</p>}
                    <Rating initialValue={props.rating} readonly={true} />
                    
                </Row>
            </Col>
            <Col sm={5}>
                <h3>Właściciel: {props.owner.userName}</h3>
                <h4>Członkowie: {props.participants.length}</h4>
                {props.isPrivate ? 
                    <button style={{margin:'40px 0px'}} >Poproś o dostęp</button> : 
                    <button style={{margin:'40px 0px'}} >Dołącz</button>
                }
            </Col>
        </Row>
    </Container>
    );
}