import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useMatch } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { deleteSelf, editSelf } from "../../redux/actions/User";

function ProfileUser() {
  // const match = useMatch('/profileuser/:id')
  // const user = useSelector((state) => state.userReducer.listUser);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    adresse: "",
    tel: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleEdit = () => {
    dispatch(editSelf(profile._id, newUser));
    handleClose();
  };
  const load = useSelector((state) => state.userReducer.load);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const profile = useSelector((state) => state.userReducer.user);
  return (
    <div>
      {load ? (
        <Spinner animation="border" variant="primary" />
      ) : isAuth ? (
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontStyle: "italic",
              marginTop: "20px",
              color: "black",
            }}
          >
            {" "}
            Profile Of {profile.name}
          </h1>
          <h4> NAME: {profile.name}</h4>
          <h4> EMAIL: {profile.email}</h4>
          <h4> ADRESSE: {profile.adresse}</h4>
          <h4> PHONE: {profile.tel}</h4>
          <Link to="/user/signin">
            {" "}
            <button
              style={{ textAlign: "center", margin: "20px" }}
              onClick={() => dispatch(deleteSelf(profile._id))}
            >
              {" "}
              Click Here To Delete Self..{" "}
            </button>
          </Link>
          <div>
            <button
              style={{ textAlign: "center", margin: "20px" }}
              variant="primary"
              onClick={handleShow}
            >
              Click Here To Edit Self..
            </button>

            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title
                  style={{
                    fontWeight: "bold",
                    fontFamily: "unset",
                    color: "paleturquoise",
                  }}
                >
                  Edit Him-Self
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <label
                  style={{
                    padding: "10px",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                  htmlFor="name"
                >
                  Nom :
                </label>
                <input
                  style={{
                    width: "300px",
                    textAlign: "center",
                  }}
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  onChange={handleChange}
                />
                <br />
                <label
                  style={{
                    padding: "10px",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                  htmlFor="email"
                >
                  Email :
                </label>
                <input
                  style={{
                    width: "300px",
                    textAlign: "center",
                  }}
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  onChange={handleChange}
                />
                <br />
                <label
                  style={{
                    padding: "10px",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                  htmlFor="password"
                >
                  Password :
                </label>
                <input
                  style={{
                    width: "300px",
                    textAlign: "center",
                  }}
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  onChange={handleChange}
                />
                <br />
                <label
                  style={{
                    padding: "10px",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                  htmlFor="adresse"
                >
                  Adresse :
                </label>
                <input
                  style={{
                    width: "300px",
                    textAlign: "center",
                  }}
                  type="text"
                  name="adresse"
                  placeholder="enter your adresse"
                  onChange={handleChange}
                />
                <br />
                <label
                  style={{
                    padding: "10px",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                  htmlFor="tel"
                >
                  Phone :
                </label>
                <input
                  style={{
                    width: "300px",
                    textAlign: "center",
                  }}
                  type="tel"
                  name="tel"
                  placeholder="enter your phone number"
                  onChange={handleChange}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Link to= "/">
                <Button variant="primary" onClick={handleEdit}>
                  Save Changes
                </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </div>
          {/* <button style={{ textAlign: "center", margin: "20px" }} onClick={()=>dispatch(deleteSelf(profile._id))} >
        Click Here To Delete Self..
      </button> */}
        </div>
      ) : (
        <div>
          {alert("please check your email or your password")}
          <Navigate to="/user/signin" />
        </div>
      )}
    </div>
  );
}

export default ProfileUser;
