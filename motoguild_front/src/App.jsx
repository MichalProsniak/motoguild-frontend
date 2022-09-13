import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import CreateRidePage from "./pages/CreateRidePage";
import CreateRoutePage from "./pages/CreateRoutePage";
import AllGroupsPage from "./pages/AllGroupsPage";
import AllRidesPage from "./pages/AllRidesPage";
import RidePage from "./pages/RidePage";
import AllRoutesPage from "./pages/AllRoutesPage";
import RoutePage from "./pages/RoutePage";
import GroupPage from "./pages/GroupPage";
import Register from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  const [loggedUser, setLogedUser] = useState({
    id: 1,
  });
  const [isLoading, setIsLoading] = useState(true);
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
          <Route
            exact
            path="/"
            element={<Homepage loggedUser={loggedUser} />}
          ></Route>
          <Route exact path="/create-ride" element={<CreateRidePage />}></Route>
          <Route
            exact
            path="/create-route"
            element={<CreateRoutePage />}
          ></Route>
          <Route exact path="/groups" element={<AllGroupsPage />}></Route>
          <Route exact path="/groups/:id" element={<GroupPage />}></Route>
          <Route exact path="/rides" element={<AllRidesPage />}></Route>
          <Route exact path="/rides/:id" element={<RidePage />}></Route>
          <Route exact path="/routes" element={<AllRoutesPage />}></Route>
          <Route exact path="/routes/:id" element={<RoutePage />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
