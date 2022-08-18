import React from "react"
import Image from 'react-bootstrap/Image'
import pictres from '../images/piesek.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Post = ({post}) => {
    return(
        <div>
            <Row>
                <Col>
                    <Image className='img fluid rounded-circle' style={{height: '50px'}} src={pictres} />
                </Col>
                <Col>
                    <Row >
                        <Col>
                            <h3 style={{float:'left'}}>{post.author.userName}</h3>
                        </Col>
                        <Col>
                            <h4 style={{float:'right'}}>{post.createTime}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <h4>{post.content}</h4>
                    </Row>
                    <Row>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Post