import Posts from "./Posts";
import {useState, useEffect} from 'react'
import {Route, Link, Routes, useParams} from 'react-router-dom';


export default function GroupPosts(props)
{
    const currentGroup = useParams().id;
    const loggedUser={id: 1}
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        const getPosts = async () => {
          const postsFromServer = await fetchPosts()
          setPosts(postsFromServer)
        }
        getPosts()
      },[])

      const fetchPosts = async () =>{
        const res = await fetch(`https://localhost:3333/api/groups/${currentGroup}/posts?OrderByDate=true`)
        const data = await res.json()

        return data
      }

      const addPost = async (post) =>{
        try{
        const res = await fetch(`https://localhost:3333/api/groups/${currentGroup}/posts`,{
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

    


    return (
        <div className="posts" >
            <Posts
            loggedUser={loggedUser}
            posts={posts}
            onAdd={addPost}
            />
        </div>
    )
}