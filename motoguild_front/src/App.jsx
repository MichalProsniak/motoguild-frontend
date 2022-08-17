import { useState, useEffect } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import CreateRidePage from "./pages/CreateRidePage";


function App() {
  const [loggedUser,setLogedUser] = useState([{
    id:1,
    UserName:"LoggedUser"
  }])
  const [isLoading, setIsLoading] = useState(true)
  // useEffect(() => {
  //   async function getUsers() {
  //     try {
  //       const res = await fetch("https://localhost:3333/api/user");
  //       const data = await res.json();
  //       setAllUsers(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getUsers();
  // }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage 
          loggedUser={loggedUser}
          />}></Route>
          <Route exact path="/create-ride" element={<CreateRidePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
