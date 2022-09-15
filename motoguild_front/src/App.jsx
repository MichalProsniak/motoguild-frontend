import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes , Outlet} from "react-router-dom";
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
import StartPage from "./pages/StartPage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({id: 1, name: 'Grzegorz'})
  const handleLogout = () => setUser(null)
  
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

  const ProtectedRoute = ({ user,redirectPath="/"}) => {

    if (!user) {
      return <StartPage to={redirectPath} replace />;
    }
  
    return <Outlet />
  };

  return (
    <div className="App">
      <Router>
        {user && <Navbar />}
        {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
        <Routes>
          <Route element={<ProtectedRoute user={user}/>}>
            <Route path="home" element={<Homepage />} />
            <Route path="create-ride" element={<CreateRidePage />} />
            <Route path="create-route" element={<CreateRoutePage />} />
            <Route path="groups" element={<AllGroupsPage />}/>
            <Route path="groups/:id" element={<GroupPage />}/>
            <Route path="/rides" element={<AllRidesPage />}/>
            <Route path="/rides/:id" element={<RidePage />}/>
            <Route path="/routes" element={<AllRoutesPage />}/>
            <Route path="/routes/:id" element={<RoutePage />}/>
          </Route>
          <Route path="/" element={<StartPage />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
