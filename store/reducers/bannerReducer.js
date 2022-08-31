import { GET_BANNER_LIST } from "../types";

const init = [];

export const bannerReducer = (state = init, action) => {
  switch (action.type) {
    case GET_BANNER_LIST:
      return action.payload;
    default:
      return state;
  }
};
