import React, { useState, useEffect } from "react"
import Posts from '../components/Posts'

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
        const res = await fetch('https://localhost:3333/api/feeds/1/posts',{
            method: 'POST',
            // mode: 'cors',
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
        const res = await fetch('https://localhost:3333/api/feeds/1/posts')
        const data = await res.json()

        return data
      }

    return (
        <div>
            <Posts
            loggedUser={loggedUser}
            posts={posts}
            onAdd={addPost}
            />
        </div>
    )
}

export default Homepage