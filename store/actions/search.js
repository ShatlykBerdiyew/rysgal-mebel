import { SET_SEARCH_TITLE } from "../types";

export const setSearchTitle = (data) => {
  return {
    type: SET_SEARCH_TITLE,
    payload: data,
  };
};
