import { GET_BRANDS_LIST } from "../types";

const init = {};

export const brandReducer = (state = init, action) => {
  switch (action.type) {
    case GET_BRANDS_LIST:
      return action.payload;
    default:
      return state;
  }
};
