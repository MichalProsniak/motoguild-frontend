import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
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
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CreateEventPage from "./pages/CreateEventPage";
import AllEventsPage from "./pages/AllEventsPage";
import EventPage from "./pages/EventPage";
import ProfilePage from "./pages/ProfilPage";

function App() {
  const ProtectedRoute = () => {
    if (!localStorage.getItem("token")) {
      return <Navigate to="/" replace />;
    }

    return <Outlet />;
  };
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, [localStorage.getItem("token")]);

  return (
    <div className="App">
      <Router>
        {isToken && <Navbar />}
        <Routes>
          <Route element={<ProtectedRoute />}>
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
          <Route path="/" element={<StartPage />} />
          <Route exact path="/events" element={<AllEventsPage />}></Route>
          <Route exact path="/events/:id" element={<EventPage />}></Route>
          <Route exact path="/create-event" element={<CreateEventPage />}></Route>
          <Route exact path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
