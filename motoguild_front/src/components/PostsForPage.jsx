import Posts from "./Posts";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getPosts, createNewPost } from "../helpnigFunctions/ApiCaller";


export default function PostsForPage(props)
{
  const loggedUser= {
    id: 2,
    userName: "Fineasz",
    email: "fin@gmail.com",
    rating: 0
  }

    const currentRide = useParams().id;
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        const getPostsFromApi = async () => {
          const postsFromServer = await getPosts(props.link, currentRide)
          setPosts(postsFromServer)
        }
        getPostsFromApi()
      },[posts])

    async function addPost(post)
    {
      await createNewPost(props.link, currentRide, post)
      setPosts([])
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