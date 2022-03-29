import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useMatch } from "react-router-dom";
import { editAnnonce } from "../../redux/actions/User";
function EditAnnonce() {
  const match = useMatch('/user/editannonce/:id');
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
          <h2>Edit Annonce</h2> <hr/>
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="annoncementOwner">Annoncement Owner:</label>
          <input
            type="text"
            name="annoncementOwner"
            placeholder="Edit the annoncement Owner"
            onChange={handleChange}
          />
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="annoncementDescription">Annoncement Description:</label>
          <input
            type="text"
            name="annoncementDescription"
            placeholder="Edit the annoncement Description"
            onChange={handleChange}
          />
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="annoncementLocation">Annoncement Location:</label>
          <input
            type="text"
            name="annoncementLocation"
            placeholder="Edit the annoncement Location"
            onChange={handleChange}
          />
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="annoncementPicture">Annoncement Picture:</label>
          <input
            type="text"
            name="annoncementPicture"
            placeholder="Edit the annoncement Picture" 
            onChange={handleChange}
          />
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="annoncementExpo">Annoncement Expo:</label>
          <input
            type="date"
            name="annoncementExpo"
            placeholder="Edit the annoncement Expo"
            onChange={handleChange}
          />
          <Link to="/annonce">
            <button
              style={{ textAlign: "center", margin: "20px" }}
              onClick={handleAdd}
            >
              Envoyer
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default EditAnnonce;
