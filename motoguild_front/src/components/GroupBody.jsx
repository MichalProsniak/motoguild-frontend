import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import GroupImportantInfo from "./GroupImportantInfo";
import PostsForPage from "./PostsForPage";
import GroupMembers from "./GroupMembers";
import { getGroup } from "../helpnigFunctions/ApiCaller";

export default function GroupBody() {
  const currentGroup = useParams().id;

  const [group, setGroup] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getGroupInfo() {
      const data = await getGroup(currentGroup);
      setGroup(data);
      setIsLoading(false);
    }
    getGroupInfo();
  }, []);

  return (
    <div className="group-page-container">
      {!isLoading && <GroupImportantInfo group={group} />}
      <div className="group-page-container-col2">
        {!isLoading && <GroupMembers members={group.participants} />}
        {!isLoading && <PostsForPage link="group" />}
      </div>
    </div>
  );
}
