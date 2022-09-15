import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes , Outlet, Navigate} from "react-router-dom";
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
import ProfilPage from "./pages/ProfilPage";

function App() {
  const ProtectedRoute = () => {
    
    if (!localStorage.getItem('token')) {
      return <Navigate to='/' replace />;
    }
  
    return <Outlet />
  };
  const [isToken, setIsToken] = useState(false)

    useEffect(()=> {
      if (localStorage.getItem('token'))
      {
        setIsToken(true)
        
      }
      else{
        setIsToken(false)
      }

    },[localStorage.getItem('token')])


  return (
    <div className="App">
      <Router>
      {isToken && <Navbar />}
        <Routes>
          <Route element={<ProtectedRoute />}>
            {/* <Route path="/" element={<Homepage />} /> */}
            <Route path="create-ride" element={<CreateRidePage />} />
            <Route path="create-route" element={<CreateRoutePage />} />
            <Route path="groups" element={<AllGroupsPage />}/>
            <Route path="groups/:id" element={<GroupPage />}/>
            <Route path="profile" element={<ProfilPage />}/>
            <Route path="/rides" element={<AllRidesPage />}/>
            <Route path="/rides/:id" element={<RidePage />}/>
            <Route path="/routes" element={<AllRoutesPage />}/>
            <Route path="/routes/:id" element={<RoutePage />}/>
          </Route>
          <Route path="/" element={<StartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
