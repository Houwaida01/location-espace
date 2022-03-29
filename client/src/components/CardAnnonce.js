import React from 'react'
import { Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteAnnonce } from '../redux/actions/User';
function CardAnnonce({annonce}) {
    const dispatch=useDispatch()
  return (
    <div style={{ paddingTop: "20px", textAlign: "center"}}>
    <Card style={{ width: "18rem" }}>
           <Card.Img style={{width: "100%" ,height: "100%" }} variant="top" src={annonce.annoncementPicture} /> 
        <Card.Body>
            <Card.Title>Annoncement-Owner:{annonce.annoncementOwner}</Card.Title>
            <Card.Text>Annoncement-Description:{annonce.annoncementDescription}</Card.Text>
            <Card.Text>Annoncement-Location:{annonce.annoncementLocation}</Card.Text>
            <Card.Text>Annoncement-Expo:{annonce.annoncementExpo}</Card.Text>

            {/* <button
                onClick={() => dispatch(deleteAnnonce(annonce._id))}
            >
                  DELETE
            </button> */}
        </Card.Body>
    </Card>
</div>
  )
}

export default CardAnnonce