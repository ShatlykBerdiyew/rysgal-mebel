import { SET_LOADING } from "../types";

export const setLoading = (loadStatus) => {
  return {
    type: SET_LOADING,
    payload: loadStatus,
  };
};
