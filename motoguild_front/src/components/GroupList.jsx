import { useState, useEffect } from "react";
import GroupForList from "../components/GroupForList";
import Pagination from "./Pagination";
import { getGroups } from "../helpnigFunctions/ApiCaller";

export default function GroupList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [paginationData, setPaginationData] = useState(null);
  const [allGroups, setAllGroups] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllGroups() {
      try {
        const res = await getGroups(currentPage, itemsPerPage);
        const data = await res.json();
        const headers = res.headers;
        setPaginationData(JSON.parse(headers.get("X-Pagination")));
        setAllGroups(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getAllGroups();
  }, [currentPage]);

  return (
    <div>
      {allGroups &&
        allGroups.map((group) => (
          <GroupForList
            key={group.id}
            id={group.id}
            name={group.name}
            owner={group.owner}
            isPrivate={group.isPrivate}
            rating={group.rating}
            participants={group.participants}
            description={group.description}
          />
        ))}
      {!isLoading && (
        <Pagination
          pagination={paginationData}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
