// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useMatch } from "react-router-dom";
// import { editSelf } from "../../redux/actions/User";

// function EditSelf() {
//     const match = useMatch('/user/editself/:id');
//     const dispatch = useDispatch();
//     const [newProfile, setNewProfile] = useState({
//         name: "",
//         email: "",
//         password: "",
//         adresse: "",
//         tel: "",
//     });
//     const handleChange = (e) => {
//       setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
//     };
//     const handleAdd = () => {
//       dispatch(editSelf(match.params.id, newProfile));
//     };
//   return (
//     <div
//     style={{
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       flexWrap: "wrap",
//       width: "300px",
//       paddingLeft: "500px",
//       textAlign: "center",
//     }}
//   >
//     <div className="Container" id="container">
//       <form>
//         <h2>Edit profile</h2> <hr/>
//         <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="name">Name :</label>
//         <input
//           type="text"
//           name="name"
//           placeholder="Edit your name"
//           onChange={handleChange}
//         />
//         <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="email">Email :</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Edit tyour email"
//           onChange={handleChange}
//         />
//         <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="password">Password :</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Edit your password"
//           onChange={handleChange}
//         />
//         <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="adresse">Adresse :</label>
//         <input
//           type="text"
//           name="adresse"
//           placeholder="Edit your adresse" 
//           onChange={handleChange}
//         />
//         <label style={{ fontWeight:"bold", fontFamily:"cursive", fontSize:"20px"}} htmlFor="phone">Phone :</label>
//         <input
//           type="tel"
//           name="tel"
//           placeholder="Edit your phone"
//           onChange={handleChange}
//         />
//         <Link to="/admin/listuser">
//           <button
//             style={{ textAlign: "center", margin: "20px" }}
//             onClick={handleAdd}
//           >
//             Envoyer
//           </button>
//         </Link>
//       </form>
//     </div>
//   </div>
//   );
// }

// export default EditSelf;
