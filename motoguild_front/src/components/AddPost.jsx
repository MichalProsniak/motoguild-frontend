import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState } from "react"

const AddPost = ({loggedUser, addPost}) => {
    const [text, setText] = useState('')
    const [authorId, setAuthorId] = useState(loggedUser[0].id)

    const onSubmit = (e) =>{
        e.preventDefoult()
        if(text !== ''){

            addPost({ authorId,text})

            setText('')
        }

    }
    console.log(loggedUser[0].id)
    return(
            <form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Add Post"
                            value={text}
                            onChange={(e)=> setText(e.target.value)}/>
                        </div>
                    </Col>
                    <Col>
                        <input type="submit" value='Add Post'/>
                    </Col>
                </Row>
            </form>
    )
}

export default AddPost