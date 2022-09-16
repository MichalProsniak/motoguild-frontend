import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import pictures from "../images/piesek.jpg";
import logo from "../images/logo.png";
import Logout from "./Logout";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function OffcanvasExample() {
  const navigate = useNavigate();
  const [isClickedRoutes, setIsClickedRoutes] = useState(false);
  const [classNameRoutes, setClassNameRoutes] = useState("dropdown-menu");
  const [classNameRoutes2, setClassNameRoutes2] = useState("nav-item dropdown");
  const [isClickedRides, setIsClickedRides] = useState(false);
  const [classNameRides, setClassNameRides] = useState("dropdown-menu");
  const [classNameRides2, setClassNameRides2] = useState("nav-item dropdown");
  function handleClickRoutes() {
    setIsClickedRoutes((prevState) => !prevState);
    if (isClickedRides) {
      setIsClickedRides((prevState) => !prevState);
      setClassNameRides("dropdown-menu");
      setClassNameRides2("nav-item dropdown");
    }
    isClickedRoutes
      ? setClassNameRoutes("dropdown-menu")
      : setClassNameRoutes("dropdown-menu show");
    isClickedRoutes
      ? setClassNameRoutes2("nav-item dropdown")
      : setClassNameRoutes2("nav-item dropdown show");
  }

  function handleClickRides() {
    setIsClickedRides((prevState) => !prevState);
    if (isClickedRoutes) {
      setIsClickedRoutes((prevState) => !prevState);
      setClassNameRoutes("dropdown-menu");
      setClassNameRoutes2("nav-item dropdown");
    }
    isClickedRides
      ? setClassNameRides("dropdown-menu")
      : setClassNameRides("dropdown-menu show");
    isClickedRides
      ? setClassNameRides2("nav-item dropdown")
      : setClassNameRides2("nav-item dropdown show");
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
              Strona główna
            </Nav.Link>
          </li>
          <li className="nav-item active">
            <Nav.Link className="nav-link" href="/groups">
              Grupy
            </Nav.Link>
          </li>
          <li className={classNameRides2}>
            <Nav.Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={handleClickRides}
            >
              Rajdy
            </Nav.Link>
            <div className={classNameRides} aria-labelledby="navbarDropdown">
              <Nav.Link className="dropdown-item-custom" href="/rides">
                <span className="dropdown-item-custom-link">
                  Przeglądaj Rajdy
                </span>
              </Nav.Link>
              <Nav.Link className="dropdown-item-custom" href="/create-ride">
                <span className="dropdown-item-custom-link">Stwórz Rajd</span>
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
            >
              Trasy
            </Nav.Link>
            <div className={classNameRoutes} aria-labelledby="navbarDropdown">
              <Nav.Link className="dropdown-item-custom" href="/routes">
                <span className="dropdown-item-custom-link">
                  Przeglądaj Trasy
                </span>
              </Nav.Link>
              <Nav.Link className="dropdown-item-custom" href="/create-route">
                <span className="dropdown-item-custom-link">Stwórz Trasę</span>
              </Nav.Link>
            </div>
          </li>
          {localStorage.getItem("token") ? (
            ""
          ) : (
            <li className="nav-item active">
              <Nav.Link className="nav-link" href="/login">
                Zaloguj
              </Nav.Link>
            </li>
          )}
          {localStorage.getItem("token") ? (
            ""
          ) : (
            <li className="nav-item active">
              <Nav.Link className="nav-link" href="/register">
                Zarejestruj
              </Nav.Link>
            </li>
          )}
          {localStorage.getItem("token") ? (
            <li className="nav-item active">
              <Nav.Link to="/" className="nav-link logout-link">
                <Logout />
              </Nav.Link>
            </li>
          ) : (
            ""
          )}
          <li>
            <Link to="profile">
              <Image
                className="img fluid rounded-circle navbar-profile-pic"
                style={{ height: "50px", width: "50px" }}
                src={pictures}
              />
            </Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}

export default OffcanvasExample;
