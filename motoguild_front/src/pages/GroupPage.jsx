import GroupBody from "../components/GroupBody";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGroup, getLoggedUserData } from "../helpnigFunctions/ApiCaller";

export default function GroupPage() {
  const [group, setGroup] = useState(null);
  const [user, setUser] = useState({});
  const currentGroup = useParams().id;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getUser() {
      const data = await getLoggedUserData();
      setUser(data);
    }
    async function getGroupInfo() {
      const data = await getGroup(currentGroup);
      setGroup(data);
      setIsLoading(false);
    }
    getGroupInfo();
    getUser();
  
  }, []);
  return (

    <div className="container-custom">
      {!isLoading && <GroupBody group={group} user={user}/>}
    </div>
  );
}
