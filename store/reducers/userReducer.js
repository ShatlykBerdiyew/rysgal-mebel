import { GET_USER_PROFILE, LOGAUT_USER, LOGIN_USER } from "../types";

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
    default:
      return state;
  }
};
