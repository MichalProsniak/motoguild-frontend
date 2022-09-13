import React, { useState, useEffect } from "react";
import Posts from "../components/Posts";
import UpcomingEvents from "../components/UpcomingEvents";
import BestRoutes from "../components/BestRoutes";
import { Col, Row } from "react-bootstrap";
import {
  getPostsForFeed,
  createNewPostsForFeed,
  getToken,
} from "../helpnigFunctions/ApiCaller";
import { withCookies, Cookies, useCookies } from "react-cookie";

const Homepage = ({ loggedUser }) => {
  const [posts, setPosts] = useState();
  const [postsLength, setPostsLength] = useState();
  const [loadedMaps, setLoadedMaps] = useState(0);
  const [cookies, setCookie] = useCookies(["refreshToken"]);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await getPostsForFeed();
      await setPosts(postsFromServer);
      await setPostsLength(postsFromServer.length);
      const x = await getToken();
      console.log(x);
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

  function onChange(newName) {
    setCookie("refreshToken", newName, { path: "/" });
  }

  return (
    <div>
      <Row>
        <BestRoutes setLoadedMaps={setLoadedMaps} loadedMaps={loadedMaps} />
      </Row>
      <Row>
        <Col className="homepage-col1">
          <div className="posts">
            <Posts loggedUser={loggedUser} posts={posts} onAdd={addPost} />
          </div>
        </Col>
        <Col className="homepage-col2">
          <UpcomingEvents />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
