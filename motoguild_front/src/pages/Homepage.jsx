import React, { useState, useEffect } from "react";
import Posts from "../components/Posts";
import UpcomingEvents from "../components/UpcomingEvents";
import BestRoutes from "../components/BestRoutes";
import { Col, Row } from "react-bootstrap";
import {
  getPostsForFeed,
  createNewPostsForFeed,
  testLogin,
} from "../helpnigFunctions/ApiCaller";

const Homepage = ({ user }) => {
  const [posts, setPosts] = useState();
  const [postsLength, setPostsLength] = useState();
  const [loadedMaps, setLoadedMaps] = useState(0);

  useEffect(() => {
    const getPosts = async () => {
      if (localStorage.getItem("token")) {
        const postsFromServer = await getPostsForFeed();
        await setPosts(postsFromServer);
        await setPostsLength(postsFromServer.length);
      }
    };
    getPosts();
  }, [postsLength]);

  const addPost = async (post) => {
    await createNewPostsForFeed(post);
    const postsFromServer = await getPostsForFeed();
    await setPosts(postsFromServer);
    await setPostsLength(postsFromServer.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadedMaps((prev) => prev > 0 && prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  if (!user) {
    return (
      <div className="homepage-container">
        <BestRoutes setLoadedMaps={setLoadedMaps} loadedMaps={loadedMaps} />
        <div className="posts-homepage">
          <Posts user={user} posts={posts} onAdd={addPost} />
        </div>
      </div>
    );
  }
  return <h2>Home (Protected: authenticated user required)</h2>;
};

export default Homepage;
