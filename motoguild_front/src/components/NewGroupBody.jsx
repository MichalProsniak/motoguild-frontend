import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CustomAutocomplete from "./CustomAutocomplete";
import { getAllRoutes } from "../helpnigFunctions/ApiCaller";
import { Rating } from "react-simple-star-rating";
import SmallMap from "./SmallMap.jsx";
import { useLoadScript } from "@react-google-maps/api";
import DateFrontToBack from "../helpnigFunctions/DateFrontToBack";
import { createNewGroup } from "../helpnigFunctions/ApiCaller";
import { Link } from "react-router-dom";

const libraries = ["places"];
export default function NewGroupBody() {
  const [isValidGroup, setIsValidGroup] = useState(false);
  const [newGroup, setNewGroup] = useState({
    name: "",
    description: "",
    isPrivate: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewGroup((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    if (
      newGroup.name.length < 4 ||
      newGroup.description.length < 4 ||
      newGroup.rideDate === "" ||
      newGroup.rideHour === ""
    ) {
      event.preventDefault();
      setIsValidGroup(false);
      return;
    }
    setIsValidGroup(true);
    const groupToSave = {
      name: newGroup.name,
      description: newGroup.description,
      isPrivate: newGroup.isPrivate,
    };
    console.log(groupToSave);
    await createNewGroup(groupToSave);
  }

  function handlePrivate() {
    setNewGroup((prevState) => ({
      ...prevState,
      isPrivate: true,
    }));
  }

  function handlePublic() {
    setNewGroup((prevState) => ({
      ...prevState,
      isPrivate: false,
    }));
  }

  return (
    <div className="create-group-body">
      <form onSubmit={handleSubmit}>
        <label name="name" className="label-custom">
          Nazwa grupy
        </label>
        <input
          className="standard-input"
          type="text"
          name="name"
          value={newGroup.name}
          onChange={handleChange}
        ></input>

        <label name="description" className="label-custom">
          Krótki opis
        </label>
        <textarea
          className="description-input"
          type="text"
          name="description"
          value={newGroup.description}
          onChange={handleChange}
          checked={false}
        ></textarea>
        <label className="label-custom">Publiczna grupa</label>
        <input
          type="radio"
          name="radio"
          value={false}
          onChange={handlePublic}
          checked={newGroup.isPrivate === false}
        ></input>
        <label className="label-custom">Prywatna grupa</label>
        <input
          type="radio"
          name="radio"
          onChange={handlePrivate}
          value={true}
          checked={newGroup.isPrivate === true}
        ></input>
        <br></br>
        <button className="btn btn-secondary create-group-submit-btn">
          Stwórz
        </button>
      </form>
    </div>
  );
}
