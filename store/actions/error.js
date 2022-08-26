import { CLEAR_ERROR, SET_ERROR } from "../types";

export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
