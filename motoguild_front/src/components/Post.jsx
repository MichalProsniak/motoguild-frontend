import React from "react"
import Image from 'react-bootstrap/Image'
import pictres from '../images/piesek.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Comments from "./Comments"
import AddComment from "./AddComment"
import { useState, useEffect } from 'react'

const Post = ({post, loggedUser}) => {
    const [comments,setComments] = useState([])

    useEffect(()=>{
        const getComments = async () => {
          const commentsFromServer = await fetchComments()
          setComments(commentsFromServer)
        }
        getComments()
      },[])
    
      const addComment = async (comments) =>{
        console.log(comments)
        try{
        const res = await fetch(`https://localhost:3333/api/post/${post.id}/comment`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        })
        const commentsFromServer = await fetchComments()
        setComments(commentsFromServer)
        console.log(comments)
        }
        catch (error){
            console.log(error)
        }
        }
        const fetchComments = async () =>{
            try{
            const res = await fetch(`https://localhost:3333/api/post/${post.id}/comment`)
            const data = await res.json()
            return data
            }
            catch (error){
                console.log(error)
            }
        }


    const dateTime = post.createTime.split('T')
    const fulltime = dateTime[1].split('.')
    const correktTime = dateTime[0]+' '+ fulltime[0]
    return(
        <Container className="post">
            <Row>
                <Col sm={2}>
                    <Image className='img fluid rounded-circle' style={{height: '100px', width: '100px'}} src={pictres} />
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
                        <AddComment loggedUser={loggedUser} addComment={addComment}/> 
                    </Row>
                       {comments.length > 0 &&<Comments comments={comments}/>}
                </Col>
            </Row>
        </Container>
    )
}

export default Post