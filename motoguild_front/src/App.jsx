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
import Register from "./pages/Registration";
import Login from "./pages/Login";
import StartPage from "./pages/StartPage";
import CreateEventPage from "./pages/CreateEventPage";
import AllEventsPage from "./pages/AllEventsPage";
import EventPage from "./pages/EventPage";

function App() {
  const ProtectedRoute = () => {

    if (!localStorage.getItem('token')) {
      return <Navigate to='/' replace />;
    }
  
    return <Outlet />
  };

  return (
    <div className="App">
      <Router>
        {localStorage.getItem('token') && <Navbar />}
        <Routes>
          <Route element={<ProtectedRoute/>}>
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
          <Route exact path="/events" element={<AllEventsPage />}></Route>
          <Route exact path="/events/:id" element={<EventPage />}></Route>
          <Route exact path="/create-event" element={<CreateEventPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
