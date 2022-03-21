import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useMatch } from "react-router-dom";
import {Button} from 'react-bootstrap'
import { editAnnonce } from "../../redux/actions/User";
function EditAnnonce() {
  const match = useMatch("/editannonce/:id");
  const dispatch = useDispatch();
  const [newAnnonc, setNewAnnonc] = useState({
    annoncementOwner: "",
    annoncementDescription: "",
    annoncementLocation: "",
    annoncementPicture: "",
    annoncementExpo: "",
  });
  const handleChange = (e) => {
    setNewAnnonc({ ...newAnnonc, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(editAnnonce(match.params.id, newAnnonc));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "300px",
        paddingLeft: "500px",
        textAlign: "center",
      }}
    >
      <div className="Container" id="container">
        <form>
          <h2>Edit Annonce</h2>
          <label htmlFor="annoncementOwner">Annoncement Owner:</label>
          <input
            type="text"
            name="annoncementOwner"
            placeholder="Edit the annoncement Owner"
            onChange={handleChange}
          />
          <label htmlFor="annoncementDescription">Annoncement Description:</label>
          <input
            type="text"
            name="annoncementDescription"
            placeholder="Edit the annoncement Description"
            onChange={handleChange}
          />
          <label htmlFor="annoncementLocation">Annoncement Location:</label>
          <input
            type="text"
            name="annoncementLocation"
            placeholder="Edit the annoncement Location"
            onChange={handleChange}
          />
          <label htmlFor="annoncementPicture">Annoncement Picture:</label>
          <input
            type="text"
            name="annoncementPicture"
            placeholder="Edit the annoncement Picture" 
            onChange={handleChange}
          />
          <label htmlFor="annoncementExpo">Annoncement Expo:</label>
          <input
            type="date"
            name="annoncementExpo"
            placeholder="Edit the annoncement Expo"
            onChange={handleChange}
          />
          <Link to="/">
            <Button
              style={{ textAlign: "center", margin: "20px" }}
              onClick={handleAdd}
            >
              Envoyer
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default EditAnnonce;
