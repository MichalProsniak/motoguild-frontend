import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState } from "react"

const AddComment = ({loggedUser, addComment}) => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState({
        id: 2,
        userName: "Fineasz",
        email: "fin@gmail.com",
        rating: 0
    })

    const onSubmit = (e) =>{
        e.preventDefault()
        if(!content){
            alert('Please add Comment')
            return
        }

        addComment({content,author})

        setContent('')
    }

    return(
            <form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <div>
                            <input 
                                style={{float:'left', width:'100%'}}
                                type="text" 
                                placeholder="Add Comment"
                                value={content}
                                onChange={(e)=> setContent(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col sm ={2}>
                        <input style={{float:'right'}} type="submit" value='Add Comment'/>
                    </Col>
                </Row>
            </form>
    )
}

export default AddComment
