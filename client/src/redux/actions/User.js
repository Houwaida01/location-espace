import axios from "axios";
import { FAIL, FAIL_USER, GET_USER, GET_USER_BY_ID, LOAD, LOAD_USER, LOG_OUT, SIGN_IN, SIGN_UP } from "../actions types/User";
import { FAIL_ANNONCE, GET_ANNONCE, LOAD_ANNONCE } from "../actions types/User";


export const signup=(newUser)=>async(dispatch)=>{
    dispatch({type:LOAD})
    try {
       let result= await axios.post("/api/user/signup",newUser)
       dispatch({
           type:SIGN_UP ,
           payload:result.data
       })
    } catch (error) {
        dispatch({
            type: FAIL,
            payload:error.response.data.errors
        })
    }
}
export const signin=(user)=>async(dispatch)=>{
    dispatch({type:LOAD})
    try {
       let result= await axios.post("/api/user/signin",user)
       dispatch({
           type:SIGN_IN ,
           payload:result.data
       })
    } catch (error) {
        dispatch({
            type:FAIL ,
            payload:error.response.data.errors
        })
    }
}
export const logout=()=>{
    return {type:LOG_OUT}
}
//------------------CRUD---------------

 //get all annonce
 export const getAnnonce = () => async (dispatch) => {
    dispatch({ type: LOAD_ANNONCE });
    try {
      let result = await axios.get("/api/user");
      dispatch({ type: GET_ANNONCE, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_ANNONCE, payload: error.response });
    }
  };
  
  //add annonce
  export const addAnnonce = (newAnnonce) => async (dispatch) => {
    try {
      await axios.post("/api/user/add", newAnnonce);
      dispatch(getAnnonce());
    } catch (error) {
      dispatch({ type: FAIL_ANNONCE, payload: error.response });
    }
  };
  
  //delete annonce
  export const deleteAnnonce = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/user/deleteAnnonce/${id}`);
      dispatch(getAnnonce());
    } catch (error) {
      dispatch({ type: FAIL_ANNONCE, payload: error.response });
    }
  };
  //edit annonce
  export const editAnnonce=(id,editAnnonce)=>async(dispatch)=>{
      try {
          await axios.put(`/api/user/editAnnonce/${id}`,editAnnonce)
          dispatch(getAnnonce())
      } catch (error) {
          dispatch({ type: FAIL_ANNONCE, payload: error.response });
          
      }
  }
  //get one user
  export const getOneUser = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      let result = await axios.get(`/api/user/one/${id}`,getOneUser);
      dispatch({ type: GET_USER_BY_ID, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response });
    }
  };

  //get all user
export const getAllUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.get("/api/user/all");
    dispatch({ type: GET_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};
  //delete self
  export const deleteSelf = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/user/deleteSelf/${id}`);
      dispatch(getAllUser());
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response });
    }
  };
  //edit self
  export const editSelf=(id,editUser)=>async(dispatch)=>{
      try { 
          await axios.put(`/api/user/editSelf/${id}`,editUser)
          dispatch(getAllUser())
      } catch (error) {
          dispatch({ type: FAIL_USER, payload: error.response });
          
      }
  }