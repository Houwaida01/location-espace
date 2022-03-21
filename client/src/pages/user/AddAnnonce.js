import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnnonce } from "../../redux/actions/User";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AddAnnonce() {
  const dispatch = useDispatch();
  const [newAnnonce, setNewAnnonce] = useState({
    annoncementOwner: "",
    annoncementDescription: "",
    annoncementLocation: "",
    annoncementPicture: "",
    annoncementExpo: "",
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
          <h2>New Annoncement</h2>
          <label htmlFor="annoncementOwner">Annoncement Owner:</label>
          <input
            type="text"
            name="annoncementOwner"
            placeholder="enter the annoncement Owner"
            onChange={handleChange}
          />
          <label htmlFor="annoncementDescription">Annoncement Description:</label>
          <input
            type="text"
            name="annoncementDescription"
            placeholder="enter the annoncement Description"
            onChange={handleChange}
          />
           <label htmlFor="annoncementLocation">Annoncement Location:</label>
          <input
            type="text"
            name="annoncementLocation"
            placeholder="enter the annoncement Location"
            onChange={handleChange}
          />
          <label htmlFor="annoncementPicture">Annoncement Picture:</label>
          <input
            type="text"
            name="annoncementPicture"
            placeholder="enter the annoncement Picture"
            onChange={handleChange}
          />
          <label htmlFor="annoncementExpo">Annoncement Expo:</label>
          <input
            type="date"
            name="annoncementExpo"
            placeholder="enter the annoncement Expo"
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

export default AddAnnonce;
