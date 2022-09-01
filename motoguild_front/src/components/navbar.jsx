import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import pictres from "../images/piesek.jpg";
import logo from "../images/logo.png";
import { useState } from "react";

// function xx() {
//   return (
//     <>
//       {["sm"].map((expand) => (
//         <Navbar key={expand} bg="light" expand={expand} className="mb-3">
//           <Container fluid>
//             <Image style={{ height: "50px" }} src={logo} />
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="routes">Trasy</Nav.Link>
//                   <Nav.Link href="rides">Jedż</Nav.Link>
//                   <Nav.Link href="#action3">Wydarzenia</Nav.Link>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//             <Image
//               className="img fluid rounded-circle"
//               style={{ height: "50px", width: "50px" }}
//               src={pictres}
//             />
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

function OffcanvasExample() {
  const [isClickedRoutes, setIsClickedRoutes] = useState(false);
  const [classNameRoutes, setClassNameRoutes] = useState("dropdown-menu");
  const [classNameRoutes2, setClassNameRoutes2] = useState("nav-item dropdown");
  function handleClickRoutes() {
    setIsClickedRoutes((prevState) => !prevState);
    isClickedRoutes
      ? setClassNameRoutes("dropdown-menu show")
      : setClassNameRoutes("dropdown-menu");
    isClickedRoutes
      ? setClassNameRoutes2("nav-item dropdown show")
      : setClassNameRoutes2("nav-item dropdown");
  }
  const [isClickedRides, setIsClickedRides] = useState(false);
  const [classNameRides, setClassNameRides] = useState("dropdown-menu");
  const [classNameRides2, setClassNameRides2] = useState("nav-item dropdown");
  function handleClickRides() {
    setIsClickedRides((prevState) => !prevState);
    isClickedRides
      ? setClassNameRides("dropdown-menu show")
      : setClassNameRides("dropdown-menu");
    isClickedRides
      ? setClassNameRides2("nav-item dropdown show")
      : setClassNameRides2("nav-item dropdown");
  }
  return (
    <Navbar className="navbar navbar-expand-lg navbar-custom">
      <div
        className="navbar-custom-container collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <a className="navbar-brand" href="#">
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
              Home
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
              Rides
            </Nav.Link>
            <div className={classNameRides} aria-labelledby="navbarDropdown">
              <Nav.Link className="dropdown-item" href="/rides">
                Explore Rides
              </Nav.Link>
              <Nav.Link className="dropdown-item" href="/create-ride">
                Create Ride
              </Nav.Link>
              {/* <Nav.Link className="dropdown-item" href="#">Another action</a> */}
              {/* <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a> */}
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
              Routes
            </Nav.Link>
            <div className={classNameRoutes} aria-labelledby="navbarDropdown">
              <Nav.Link className="dropdown-item" href="/routes">
                Explore Routes
              </Nav.Link>
              <Nav.Link className="dropdown-item" href="/create-route">
                Create Route
              </Nav.Link>
            </div>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0 navbar-search">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
        <Image
          className="img fluid rounded-circle"
          style={{ height: "50px", width: "50px" }}
          src={pictres}
        />
      </div>
    </Navbar>
  );
}

export default OffcanvasExample;
