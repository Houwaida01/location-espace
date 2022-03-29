import React from 'react'
import { Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/actions/Admin';

function UserCard({user}) {
  const dispatch=useDispatch()
  return (
    <div style={{ paddingTop: "20px", textAlign: "center"}}>
    <Card style={{ width: "18rem" }}>
        <Card.Body>
            <Card.Title>Name:{user.name}</Card.Title> 
            <Card.Text>Email:{user.email}</Card.Text> 
            <Card.Text>Adresse:{user.adresse}</Card.Text>
            <Card.Text>Phone:{user.tel}</Card.Text>
            <button style={{ textAlign: "center", margin: "20px" }}
                onClick={() => dispatch(deleteUser(user._id))}
            >
                DELETE
            </button> 
        </Card.Body>
    </Card>
</div>
  )
}

export default UserCard