import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch("https://localhost:3333/api/user");
        const data = await res.json();
        setAllUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>Get 1st user</h1>
      <p>{!isLoading && `${allUsers[0].userName}`}</p>
    </div>
  );
}

export default App;
