import { CREATE_ORDER } from "../types";

const init = {};

export const orderReducer = (state = init, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return action.payload;
    default:
      return state;
  }
};
