import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAnnonce, getAllUser, getAnnonce } from "../../redux/actions/User";
import { Spinner } from "react-bootstrap";
import AnnonceCard from "../admin/AnnonceCard";
function MyAnnonce() {
    const dispatch = useDispatch();
    const annonce = useSelector((state) => state.userReducer.annonceList);
    const load = useSelector((state) => state.userReducer.load);
    const profile = useSelector((state) => state.userReducer.user);
    // console.log(profile)
   
    useEffect(() => {
      dispatch(getAnnonce())
    }, [dispatch]);
   
  return(
  <div >
    <Link to='/user/addannonce'>
      <Button variant="outline-primary">Add Annonce</Button>{" "}
    </Link>
    <Link to='/user/editannonce/:id'>
      <Button variant="outline-primary">Edit Annonce</Button>{" "}
    </Link>
    <Link to='/myannonce'> 
      <Button onClick={() => dispatch(deleteAnnonce())} variant="outline-primary">Delete Annonce</Button>{" "}
    </Link>
    <div> 
    <h6
        style={{
          textAlign: "center",
          fontSize: "35px",
          color: "palevioletred",
        }}
      >
        Liste de mes annonces : {annonce.length}
      </h6>
      <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          textAlign: "center"
        }}>
      {load ? (
        <Spinner animation="border" />
      ) : (
        annonce?.filter(el=>el.annoncementOwner == profile.name).map((el) => <AnnonceCard anncAdm={el} key={el._id} />)
      )}
      </div>
    </div>
    
  </div>
  );
}

export default MyAnnonce;
