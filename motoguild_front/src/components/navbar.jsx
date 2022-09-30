import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/motoguild-start.png";
import Logout from "./Logout";
import { useState, useEffect } from "react";
import { testLogin } from "../helpnigFunctions/ApiCaller";

function OffcanvasExample() {
  const [styleUser, setStyleUser] = useState({
    backgroundImage: "url('https://localhost:3333/api/upload/user/noimage')",
  });

  // useEffect(() => {
  //   async function image(){
  //     var user = await testLogin
  //     var photo = await user.image
  //     return photo
  //   }
  //   console.log(image)
  //   var stringUser=`https://localhost:3333/api/upload/User/${image}`;

  //   setStyleUser({backgroundImage: `url(${stringUser})`})

  // },[])

  const [isClickedRoutes, setIsClickedRoutes] = useState(false);
  const [classNameRoutes, setClassNameRoutes] = useState("dropdown-menu");
  const [classNameRoutes2, setClassNameRoutes2] = useState("nav-item dropdown");
  const [isClickedRides, setIsClickedRides] = useState(false);
  const [classNameRides, setClassNameRides] = useState("dropdown-menu");
  const [classNameRides2, setClassNameRides2] = useState("nav-item dropdown");
  const [isClickedEvents, setIsClickedEvents] = useState(false);
  const [classNameEvents, setClassNameEvents] = useState("dropdown-menu");
  const [classNameEvents2, setClassNameEvents2] = useState("nav-item dropdown");
  const [isClickedGroups, setIsClickedGroups] = useState(false);
  const [classNameGroups, setClassNameGroups] = useState("dropdown-menu");
  const [classNameGroups2, setClassNameGroups2] = useState("nav-item dropdown");
  const [isClickedProfil, setIsClickedProfil] = useState(false);
  const [classNameProfil, setClassNameProfil] = useState("dropdown-menu");
  const [classNameProfil2, setClassNameProfil2] = useState("nav-item dropdown");

  function handleClickRoutes() {
    setIsClickedRoutes((prevState) => !prevState);
    isClickedRoutes
      ? setClassNameRoutes("dropdown-menu")
      : setClassNameRoutes("dropdown-menu show");
    isClickedRoutes
      ? setClassNameRoutes2("nav-item dropdown")
      : setClassNameRoutes2("nav-item dropdown show");
  }

  function handleClickRides() {
    setIsClickedRides((prevState) => !prevState);
    isClickedRides
      ? setClassNameRides("dropdown-menu")
      : setClassNameRides("dropdown-menu show");
    isClickedRides
      ? setClassNameRides2("nav-item dropdown")
      : setClassNameRides2("nav-item dropdown show");
  }

  function handleClickGroups() {
    setIsClickedGroups((prevState) => !prevState);
    isClickedGroups
      ? setClassNameGroups("dropdown-menu")
      : setClassNameGroups("dropdown-menu show");
    isClickedGroups
      ? setClassNameGroups2("nav-item dropdown")
      : setClassNameGroups2("nav-item dropdown show");
  }

  function handleClickEvents() {
    setIsClickedEvents((prevState) => !prevState);
    isClickedEvents
      ? setClassNameEvents("dropdown-menu")
      : setClassNameEvents("dropdown-menu show");
    isClickedEvents
      ? setClassNameEvents2("nav-item dropdown")
      : setClassNameEvents2("nav-item dropdown show");
  }

  function handleClickProfile() {
    setIsClickedProfil((prevState) => !prevState);
    isClickedProfil
      ? setClassNameProfil("dropdown-menu")
      : setClassNameProfil("dropdown-menu show");
    isClickedProfil
      ? setClassNameProfil2("nav-item dropdown")
      : setClassNameProfil2("nav-item dropdown show");
  }
  return (
    <Navbar className="navbar navbar-expand-lg navbar-custom">
      <div
        className="navbar-custom-container collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <a className="navbar-brand" href="/">
          <img src={logo} className="logo-navbar" alt="MotoGuild" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Nav.Link className="nav-link" href="/">
              <span className="nav-text-custom">Strona główna</span>
            </Nav.Link>
          </li>

          <li className={classNameGroups2}>
            <Nav.Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={handleClickGroups}
              onBlur={() => {
                setTimeout(() => handleClickGroups(), 200);
              }}
            >
              <span className="nav-text-custom">Grupy</span>
            </Nav.Link>
            <div className={classNameGroups} aria-labelledby="navbarDropdown">
              <Nav.Link className="dropdown-item-custom" href="/groups">
                <span className="dropdown-item-custom-link">
                  <span className="nav-text-custom">Przeglądaj Grupy</span>
                </span>
              </Nav.Link>
              <Nav.Link className="dropdown-item-custom" href="/create-group">
                <span className="dropdown-item-custom-link">
                  <span className="nav-text-custom">Stwórz Grupę</span>
                </span>
              </Nav.Link>
            </div>
          </li>

          <li className={classNameRides2}>
            <Nav.Link
              className="nav-link dropdown-toggl"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={handleClickRides}
              onBlur={() => {
                setTimeout(() => handleClickRides(), 200);
              }}
            >
              <span className="nav-text-custom red-bold">Ustawki</span>
            </Nav.Link>
            <div className={classNameRides} aria-labelledby="navbarDropdown">
              <Nav.Link className="dropdown-item-custom" href="/rides">
                <span className="dropdown-item-custom-link">
                  <span className="nav-text-custom">Przeglądaj Ustawki</span>
                </span>
              </Nav.Link>
              <Nav.Link className="dropdown-item-custom" href="/create-ride">
                <span className="dropdown-item-custom-link">
                  <span className="nav-text-custom">Zaplanuj ustawkę</span>
                </span>
              </Nav.Link>
            </div>
          </li>

          <li className={classNameRoutes2}>
            <Nav.Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={handleClickRoutes}
              onBlur={() => {
                setTimeout(() => handleClickRoutes(), 200);
              }}
            >
              <span className="nav-text-custom">Trasy</span>
            </Nav.Link>
            <div className={classNameRoutes} aria-labelledby="navbarDropdown">
              <Nav.Link className="dropdown-item-custom" href="/routes">
                <span className="dropdown-item-custom-link">
                  <span className="nav-text-custom">Przeglądaj Trasy</span>
                </span>
              </Nav.Link>
              <Nav.Link className="dropdown-item-custom" href="/create-route">
                <span className="dropdown-item-custom-link">
                  <span className="nav-text-custom">Stwórz Trasę</span>
                </span>
              </Nav.Link>
            </div>
          </li>
          <li className={classNameEvents2}>
            <Nav.Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={handleClickEvents}
              onBlur={() => {
                setTimeout(() => handleClickEvents(), 200);
              }}
            >
              <span className="nav-text-custom">Wydarzenia</span>
            </Nav.Link>
            <div className={classNameEvents} aria-labelledby="navbarDropdown">
              <Nav.Link className="dropdown-item-custom" href="/events">
                <span className="dropdown-item-custom-link">
                  <span className="nav-text-custom">Przeglądaj Wydarzenia</span>
                </span>
              </Nav.Link>
              <Nav.Link className="dropdown-item-custom" href="/create-event">
                <span className="dropdown-item-custom-link">
                  <span className="nav-text-custom">Stwórz Wydarzenie</span>
                </span>
              </Nav.Link>
            </div>
          </li>
          {localStorage.getItem("token") ? (
            ""
          ) : (
            <li className="nav-item active">
              <Nav.Link className="nav-link" href="/login">
                <span className="nav-text-custom">Zaloguj</span>
              </Nav.Link>
            </li>
          )}
          {localStorage.getItem("token") ? (
            ""
          ) : (
            <li className="nav-item active">
              <Nav.Link className="nav-link" href="/register">
                <span className="nav-text-custom">Zarejestruj</span>
              </Nav.Link>
            </li>
          )}
          {localStorage.getItem("token") ? (
            <li>
              <Nav.Link
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={handleClickProfile}
                onBlur={() => {
                  setTimeout(() => handleClickProfile(), 200);
                }}
              >
                <div className="navbar-profile-pic" style={styleUser}></div>
              </Nav.Link>
              <div className={classNameProfil} aria-labelledby="navbarDropdown">
                <Nav.Link className="dropdown-item-custom" href="/profile">
                  <span className="dropdown-item-custom-link">
                    <span className="nav-text-custom">Profil</span>
                  </span>
                </Nav.Link>
                <Nav.Link className="dropdown-item-custom" href="/settings">
                  <span className="dropdown-item-custom-link">
                    <span className="nav-text-custom">Ustawienia</span>
                  </span>
                </Nav.Link>
                <Nav.Link className="dropdown-item-custom">
                  <Logout />
                </Nav.Link>
              </div>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </Navbar>
  );
}

export default OffcanvasExample;
