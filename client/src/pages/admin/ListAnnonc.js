import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnnonc } from "../../redux/actions/Admin";
import { Spinner } from "react-bootstrap";
import AnnonceCard from "./AnnonceCard";

function ListAnnonc() {
  const dispatch = useDispatch();
  const annonce = useSelector((state) => state.adminReducer.annonceList);
  const load = useSelector((state) => state.adminReducer.load);
  useEffect(() => {
    dispatch(getAnnonc());
  }, [dispatch]);
  return (
    <div>
         <h6
        style={{
          textAlign: "center",
          fontSize: "35px",
          color: "palevioletred",
        }}
      >
        Liste de annonces "ADMIN": {annonce.length}
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
        annonce?.map((el) => <AnnonceCard anncAdm={el} key={el._id} />)
      )}
      </div>
    </div>
  );
}

export default ListAnnonc;
