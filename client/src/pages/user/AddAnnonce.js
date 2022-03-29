import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnnonce } from "../../redux/actions/User";
import { Link } from "react-router-dom";

function AddAnnonce() {
  const dispatch = useDispatch();
  const [newAnnonce, setNewAnnonce] = useState({
    annoncementOwner: "",
    annoncementDescription: "",
    annoncementLocation: "",
    annoncementPicture: "",
    annoncementExpo: "",
    idUser:localStorage.getItem('id_User')
  });
  const handleChange = (e) => {
    setNewAnnonce({ ...newAnnonce, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(addAnnonce(newAnnonce));
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
          <h2>Add New Annonce</h2> <hr/>
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="annoncementOwner">Annoncement Owner:</label>
          <input
            type="text"
            name="annoncementOwner"
            placeholder="enter the annoncement Owner"
            onChange={handleChange}
          />
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="annoncementDescription">Annoncement Description:</label>
          <input
            type="text"
            name="annoncementDescription"
            placeholder="enter the annoncement Description"
            onChange={handleChange}
          />
           <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="annoncementLocation">Annoncement Location:</label>
          <input
            type="text"
            name="annoncementLocation"
            placeholder="enter the annoncement Location"
            onChange={handleChange}
          />
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="annoncementPicture">Annoncement Picture:</label>
          <input
            type="text"
            name="annoncementPicture"
            placeholder="enter the annoncement Picture"
            onChange={handleChange}
          />
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="annoncementExpo">Annoncement Expo:</label>
          <input
            type="date"
            name="annoncementExpo"
            placeholder="enter the annoncement Expo"
            onChange={handleChange}
          />
           <input
            type="text"
            name="idUser"
           hidden
            onChange={handleChange}
          />
          <Link to="/myannonce">
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

export default AddAnnonce;
