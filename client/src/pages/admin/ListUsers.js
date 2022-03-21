import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/Admin";

function ListUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.adminReducer.userList);
  console.log(users)
  const load = useSelector((state) => state.adminReducer.load);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
        <h1>hhhhhhhhhhhhhhh</h1>
      {/* {load ? <h1>loaaading</h1> : users?.map((el) => <h1> {el.name} </h1>)} */}
    </div>
  );
}

export default ListUsers;
