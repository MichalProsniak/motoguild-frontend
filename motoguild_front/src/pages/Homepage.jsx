import React, { useState, useEffect } from "react";
import Posts from "../components/Posts";
import UpcomingEvents from "../components/UpcomingEvents";
import BestRoutes from "../components/BestRoutes";
import { Col, Row } from "react-bootstrap";
import { getPostsForFeed, createNewPostsForFeed } from "../helpnigFunctions/ApiCaller";

const Homepage = ({ loggedUser }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await getPostsForFeed();
      setPosts(postsFromServer);
    };
    getPosts();
  }, [posts]);

  const addPost = async (post) => {
    await createNewPostsForFeed(post)
    setPosts([]);
};

  return (
    <div>
      <Row>
        <BestRoutes />
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
