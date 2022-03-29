import React from 'react'
import { Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteAnnonc } from '../../redux/actions/Admin';
function AnnonceCard({anncAdm}) {
    const dispatch = useDispatch()
  return (
    <div style={{ paddingTop: "20px"}}>
    <Card style={{ width: "350px" }}>
           <Card.Img variant="top" src={anncAdm.annoncementPicture} /> 
        <Card.Body>
            <Card.Title>Annoncement-Owner:{anncAdm.annoncementOwner}</Card.Title>
            <Card.Text>Annoncement-Description:{anncAdm.annoncementDescription}</Card.Text>
            <Card.Text>Annoncement-Location:{anncAdm.annoncementLocation}</Card.Text>
            <Card.Text>Annoncement-Expo:{anncAdm.annoncementExpo}</Card.Text>

            <button
                onClick={() => dispatch(deleteAnnonc(anncAdm._id))}
            >
                  DELETE
            </button>
        </Card.Body>
    </Card>
</div>
  )
}

export default AnnonceCard