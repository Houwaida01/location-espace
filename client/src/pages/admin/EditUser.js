import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../redux/actions/Admin";
import { Link, useMatch } from "react-router-dom";

function EditUser() {
  const match=useMatch('/admin/edituser/:id')
  const dispatch = useDispatch();
  const [newEdit, setNewEdit] = useState({
    name: "",
    email: "",
    password: "",
    adresse: "",
    tel: "",
  });
  const handleChange = (e) => {
    setNewEdit({ ...newEdit, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(editUser(match.params.id,newEdit));
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
          <h2>Edit User</h2>
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="name">Nom :</label>
          <input
            type="text"
            name="name"
            placeholder="Edit the user Name"
            onChange={handleChange}
          />
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Edit the user Email"
            onChange={handleChange}
          />
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="password">Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Edit the user Password"
            onChange={handleChange}
          />
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="adresse">Adresse :</label>
          <input
            type="text"
            name="adresse"
            placeholder="Edit the user Adress" 
            onChange={handleChange}
          />
          <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="tel">Phone :</label>
          <input
            type="tel"
            name="tel"
            placeholder="Edit the user Phone"
            onChange={handleChange}
          />
          <Link to="/admin/listuser">
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

export default EditUser;
