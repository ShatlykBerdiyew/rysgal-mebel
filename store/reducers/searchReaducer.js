import { SET_SEARCH_TITLE } from "../types";

const init = {
  title: "",
  lang: "",
};

export const searchReducer = (state = init, action) => {
  switch (action.type) {
    case SET_SEARCH_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};
