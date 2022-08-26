import { CLEAR_ERROR, SET_ERROR } from "../types";

const init = {
  error: false,
  error_message: "",
};

export const errorReducer = (state = init, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        error: true,
        error_message: action.payload,
      };
    case CLEAR_ERROR:
      return {
        error: false,
        error_message: "",
      };
    default:
      return state;
  }
};
