import Posts from "./Posts";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPosts, createNewPost } from "../helpnigFunctions/ApiCaller";

export default function PostsForPage(props) {
  const loggedUser = {
    id: 2,
    userName: "Fineasz",
    email: "fin@gmail.com",
    rating: 0,
  };

  const currentRide = useParams().id;
  const [posts, setPosts] = useState([]);
  const [postsLength, setPostsLength] = useState(0);

  useEffect(() => {
    const getPostsFromApi = async () => {
      const postsFromServer = await getPosts(props.link, currentRide);
      setPosts(postsFromServer);
      setPostsLength(postsFromServer.length);
    };
    getPostsFromApi();
  }, [postsLength]);

  async function addPost(post) {
    await createNewPost(props.link, currentRide, post);
    const postsFromServer = await getPosts(props.link, currentRide);
    setPosts(postsFromServer);
    setPostsLength(postsFromServer.length);
  }

  return (
    <div className="posts">
      <Posts loggedUser={loggedUser} posts={posts} onAdd={addPost} />
    </div>
  );
}
