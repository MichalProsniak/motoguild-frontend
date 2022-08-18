import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState } from "react"

const AddComment = ({loggedUser, addPost}) => {
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

        addPost(content,author)

        setContent('')
        setAuthor('')
    }
    return(
            <form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Add Post"
                                value={content}
                                onChange={(e)=> setContent(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col>
                        <input type="submit" value='Save Post'/>
                    </Col>
                </Row>
            </form>
    )
}

export default AddComment
