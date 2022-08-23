import React from 'react'
import picture from '../images/piesek.jpg'
import { Rating } from 'react-simple-star-rating'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function GroupForList(props)
{
    return (
        <Container className="group">
        <Row>
            <Col sm={2}>
                <img className='img fluid rounded-circle' style={{height: '200px', width: '200px'}} src={picture} />
            </Col>
            <Col sm={5}>
                <Row >
                    <h3 style={{float:'left'}}>{props.name}</h3>
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