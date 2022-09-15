import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import CreateRidePage from "./pages/CreateRidePage";
import CreateRoutePage from "./pages/CreateRoutePage";
import CreateGroupPage from "./pages/CreateGroupPage";
import AllGroupsPage from "./pages/AllGroupsPage";
import AllRidesPage from "./pages/AllRidesPage";
import RidePage from "./pages/RidePage";
import AllRoutesPage from "./pages/AllRoutesPage";
import RoutePage from "./pages/RoutePage";
import GroupPage from "./pages/GroupPage";
import StartPage from "./pages/StartPage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ id: 1, name: "Grzegorz" });
  const handleLogout = () => setUser(null);

  const ProtectedRoute = () => {
    if (!localStorage.getItem("token")) {
      return <StartPage to="/" replace />;
    }

    return <Outlet />;
  };

  return (
    <div className="App">
      <Router>
        {localStorage.getItem("token") && <Navbar />}
        {user ? (
          <button onClick={handleLogout}>Sign Out</button>
        ) : (
          <button onClick={handleLogin}>Sign In</button>
        )}
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Homepage />} />
            <Route path="create-ride" element={<CreateRidePage />} />
            <Route path="create-route" element={<CreateRoutePage />} />
            <Route path="create-group" element={<CreateGroupPage />} />
            <Route path="groups" element={<AllGroupsPage />} />
            <Route path="groups/:id" element={<GroupPage />} />
            <Route path="/rides" element={<AllRidesPage />} />
            <Route path="/rides/:id" element={<RidePage />} />
            <Route path="/routes" element={<AllRoutesPage />} />
            <Route path="/routes/:id" element={<RoutePage />} />
          </Route>
          <Route path="/home" element={<StartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
