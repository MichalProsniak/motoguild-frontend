import React from "react"
import Image from 'react-bootstrap/Image'
import pictres from '../images/piesek.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';

const Post = ({post}) => {
    const dateTime = post.createTime.split('T')
    const fulltime = dateTime[1].split('.')
    const correktTime = dateTime[0]+' '+ fulltime[0]
    return(
        <Container className="post">
            <Row>
                <Col sm={2}>
                    <Image className='img fluid rounded-circle' style={{height: '50px'}} src={pictres} />
                </Col>
                <Col sm={10}>
                    <Row >
                        <Col>
                            <h3 style={{float:'left'}}>{post.author.userName}</h3>
                        </Col>
                        <Col>
                            <h4 style={{float:'right'}}>{correktTime}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <h4>{post.content}</h4>
                    </Row>
                    <Row>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Post