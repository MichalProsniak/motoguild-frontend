import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState } from "react"
import Container from 'react-bootstrap/Container'

const AddPost = ({loggedUser, addPost}) => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState({
        id: loggedUser.id
    })

    const onSubmit = (e) =>{
        e.preventDefault()
        if(!content){
            alert('Please add Post')
            return
        }

        addPost({content,author})

        setContent('')
    }
    return(
        <Container className="post">
            <form onSubmit={onSubmit}>
                <Row>
                    <Col sm={10} style={{borderRadius:'15px', backgroundColor:'white'}}>
                        <div>
                            <input className="cos"
                                style={{  float: 'left', border: 'none', width:'100%' }}
                                type="text" 
                                placeholder="Add Post"
                                value={content}
                                onChange={(e)=> setContent(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col sm={2}>
                        <input type="submit" value='Add Post'/>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}

export default AddPost