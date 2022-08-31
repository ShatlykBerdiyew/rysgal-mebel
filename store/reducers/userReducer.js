import {
  GET_USER_PROFILE,
  LOGAUT_USER,
  LOGIN_USER,
  UPDATE_PROFILE_INFO,
} from "../types";

const init = {
  token: null,
  user_profil: null,
};

export const userReducer = (state = init, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload,
      };
    case LOGAUT_USER:
      return {
        ...state,
        token: null,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        user_profil: action.payload,
      };
    case UPDATE_PROFILE_INFO:
      return {
        ...state,
        user_profil: { ...state.user_profil, [action.name]: action.value },
      };
    default:
      return state;
  }
};
