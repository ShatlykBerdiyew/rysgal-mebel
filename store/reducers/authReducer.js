import { LOGIN } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
};
