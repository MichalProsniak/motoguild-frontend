import React, { useState, useEffect } from "react"
import Posts from '../components/Posts'
import UpcomingEvents from '../components/UpcomingEvents'
import BestRoutes from "../components/BestRoutes"
import { Col, Row } from "react-bootstrap"

const Homepage = ({loggedUser}) => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        const getPosts = async () => {
          const postsFromServer = await fetchPosts()
          setPosts(postsFromServer)
        }
        getPosts()
      },[])
    
      const addPost = async (post) =>{
        try{
        const res = await fetch('https://localhost:3333/api/feed/1/post',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        const postsFromServer = await fetchPosts()
        setPosts(postsFromServer)
      }catch (error){
        console.log(error)
      }
      }
      const fetchPosts = async () =>{
        const res = await fetch(`https://localhost:3333/api/feed/1/post?orderByDate=true`)
        const data = await res.json()

        return data
      }

    return (
      <div>
        <Row>
        <BestRoutes />
        </Row>
        <Row>
          <Col>
            <div className="posts" >

                <Posts
                loggedUser={loggedUser}
                posts={posts}
                onAdd={addPost}
                />
            </div>
          </Col>
          <Col>
            <UpcomingEvents />
          </Col>
        </Row>
      </div>
        
    )
}

export default Homepage