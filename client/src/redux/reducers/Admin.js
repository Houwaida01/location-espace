import { FAIL, GET_ANNONCE, GET_USER, LOAD, LOG_OUT, SIGN_IN } from "../actions types/Admin";

const initialState = {
  admin: [],
  userList: [],
  annonceList: [],
  load: false,
  errors: [],
  isAuthad: false,
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, load: true };
    case SIGN_IN:
      localStorage.setItem("token", payload.token);
      return { ...state, load: false, admin: payload.admin, isAuthad: true };
      case GET_USER:
        return { ...state, load: false, userList: payload.userList  };
      case GET_ANNONCE:
        return { ...state, load: false, annonceList: payload.annonceList  };
    // case SIGN_UP:
    //   localStorage.setItem("token", payload.token);
    //   return { ...state, load: false, admin: payload.admin, isAuth: true };
      // case LOAD:
      // return { ...state, load: true };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        admin: [],
        load: false,
        errors: [],
        isAuthad: false,
      };
    case FAIL:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};
export default adminReducer;
