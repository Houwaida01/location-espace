import { FAIL, GET_ANNONCE, GET_USER, LOAD, LOG_OUT, SIGN_IN, SIGN_UP } from "../actions types/User";

const initialState = {
    user: [],
    annonceList: [],
    // FoundUser: [],
    listUser: [],
    load: false,
    errors: [],
    isAuth: false,
  };
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD:
        return { ...state, load: true };
      case SIGN_IN:
        localStorage.setItem("token", payload.token);
        // localStorage.setItem("id_User", payload.user._id);
        return { ...state, load: false, user: payload.user, isAuth: true };
      case SIGN_UP:
        localStorage.setItem("token", payload.token);
        return { ...state, load: false, user: payload.user, isAuth: true };
      case GET_ANNONCE:
        return { ...state, load: false, annonceList: payload.annonceList  };
      case GET_USER:
        return { ...state, load: false, listUser: payload.listUser  }; 
      case LOG_OUT:
        localStorage.removeItem("token");
        return {
          user: [],
          annonceList: [],
          load: false,
          errors: [],
          isAuth: false,
        };
      case FAIL:
        return { ...state, load: false, errors: payload };
  
      default:
        return state;
    }
  };
  export default userReducer;
  