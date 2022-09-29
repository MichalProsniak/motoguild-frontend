import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CustomAutocomplete from "./CustomAutocomplete";
import { getAllRoutes } from "../helpnigFunctions/ApiCaller";
import { Rating } from "react-simple-star-rating";
import SmallMap from "./SmallMap.jsx";
import { useLoadScript } from "@react-google-maps/api";
import DateFrontToBack from "../helpnigFunctions/DateFrontToBack";
import {
  createNewGroup,
  uploadGroupImage,
  deleteGroupImage,
} from "../helpnigFunctions/ApiCaller";
import { Link, useNavigate } from "react-router-dom";

const libraries = ["places"];
export default function NewGroupBody() {
  const [isValidGroup, setIsValidGroup] = useState(false);
  const [localImage, setLocalImage] = useState();
  const [newGroup, setNewGroup] = useState({
    name: "",
    description: "",
    isPrivate: false,
    groupImage: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [imagePath, setImagePath] = useState("");
  const [styles, setStyles] = useState({
    backgroundImage: "url('https://localhost:3333/api/upload/noimage')",
  });
  const navigate = useNavigate();

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
    event.preventDefault();
    setIsValidGroup(true);
    const res = await uploadImage(localImage);
    const groupToSave = await {
      name: newGroup.name,
      description: newGroup.description,
      isPrivate: newGroup.isPrivate,
      groupImage: res,
    };
    const newGroupId = await createNewGroup(await groupToSave);
    navigate(`/groups/${newGroupId}`);
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

  async function uploadImage(files) {
    const data = new FormData();
    data.append("file", files[0]);
    const res = await uploadGroupImage(data);
    const path = await res.text();
    await setImagePath(path);
    var string = `https://localhost:3333/api/upload/GroupPictures/${path}`;
    setStyles({
      backgroundImage: `url(${string})`,
    });
    return path;
  }

  function handleLocalImage(e) {
    setLocalImage(e.target.files);
  }

  async function handleDeletePhoto() {
    await deleteGroupImage(imagePath);
    setImagePath("");
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
        {imagePath != "" && (
          <div className="create-group-photo-container">
            <label className="label-custom">Zdjęcie grupy</label>
            <div className="create-group-photo" style={styles}></div>
            <span
              className="create-group-photo-delete-text"
              onClick={handleDeletePhoto}
            >
              Usuń zdjęcie
            </span>
          </div>
        )}
        <input
          type="file"
          name="file"
          onChange={handleLocalImage}
          placeholder="Upload an image"
        ></input>
        <br></br>
        <button className="btn btn-secondary create-group-submit-btn">
          Stwórz
        </button>
      </form>
    </div>
  );
}
