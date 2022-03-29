import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/Admin";
import UserCard from "./UserCard";

function ListUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.adminReducer.userList);
  // console.log(users)
  const load = useSelector((state) => state.adminReducer.load);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
  <h6 style={{ textAlign:"center" , fontSize:"35px" , color:"palevioletred"}}> 
                Liste de users: {users.length}
        </h6> 
    
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
  }}>
      {load ? <h1>loaaading</h1> : users?.map((el) => <UserCard user={el} key={el._id} /> )}
    </div>
    </div>
  );
}

export default ListUsers;
