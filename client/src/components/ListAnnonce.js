import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnnonce } from "../redux/actions/User";
import { Spinner } from "react-bootstrap";
import CardAnnonce from "./CardAnnonce";

function ListAnnonce() {
  const dispatch = useDispatch();
  const annonce = useSelector((state) => state.userReducer.annonceList);
  // console.log(user)
  const load = useSelector((state) => state.userReducer.load);


  useEffect(() => {
    dispatch(getAnnonce());
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
        Liste de annonces: {annonce.length}
      </h6>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          textAlign: "center",
          // width:"100%",
          // height:"100%"
        }}
      >
        {load ? (
          <Spinner animation="border" />
        ) : (
          annonce?.map((el) => <CardAnnonce annonce={el} key={el._id} />)
        )}
      </div>
    </div>
  );
}

export default ListAnnonce;
