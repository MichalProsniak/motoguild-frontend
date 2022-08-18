import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState } from "react"

const AddPost = ({loggedUser, addPost}) => {
    const [post,setPost] = useState({
        content: "",
        author: {
            id: loggedUser.id
        }
    })
    // const [content, setContent] = useState('')
    // const [author, setAuthor] = useState({
    //     id: loggedUser.id
    // })

    const onSubmit = (e) =>{
        e.preventDefoult()
        console.log(post)
        if(post.content !== ''){

            addPost(post)

            setContent('')
        }

    }

    function handleChange(event)
      {
        console.log(post)
        const {name, value} = event.target
        setPost(prevState => ({
            ...prevState,
            content: value
          })) 

      }
    return(
            <form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <div>
                            <input 
                            name="content"
                            type="text" 
                            placeholder="Add Post"
                            value={post.content}
                            onChange={handleChange}/>
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