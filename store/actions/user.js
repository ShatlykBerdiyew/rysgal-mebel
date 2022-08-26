import { GET_USER_PROFILE, LOGAUT_USER, LOGIN_USER } from "../types";

export const loginUser = (token) => {
  localStorage.setItem("token", token);
  return {
    type: LOGIN_USER,
    payload: token,
  };
};

export const logautUser = () => {
  localStorage.removeItem("token");
  return {
    type: LOGAUT_USER,
  };
};

export const getUserProfile = (data) => {
  return {
    type: GET_USER_PROFILE,
    payload: data,
  };
};
