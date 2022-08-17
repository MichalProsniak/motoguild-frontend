import React, { useState, useEffect } from "react"
import Post from './Post'
import AddPost from "./AddPost"

const Posts = ({loggedUser}) => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        const getPosts = async () => {
          const postsFromServer = await fetchPosts()
          setPosts(postsFromServer)
        }
        getPosts()
      },[])
    
      const addPost = async (post) =>{
        const res = await fetch('https://localhost:3333/api/feeds/1/posts',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        const data = await res.json()
        setPosts([...posts, data])
      }
      const fetchPosts = async () =>{
        const res = await fetch('https://localhost:3333/api/feeds/1/posts')
        const data = await res.json()
      }

    return(
        <>
            <AddPost loggedUser={loggedUser} addPost={addPost}/>
            {posts&&posts.map((post)=> (<Post key={post.Id} post={post} />
            ))}
        </>
    )
}

export default Posts