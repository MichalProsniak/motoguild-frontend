import NewRideBody from "../components/NewRideBody";

function CreateRidePage() {
  return (
    <div className="navbar-margin">
      <div className="container-custom">
        <h1 className="header-custom-font">Dodaj przejazd</h1>
        <NewRideBody />
      </div>
    </div>
  );
}

export default CreateRidePage;
