import { SET_LOADING } from "../types";

const init = false;

export const loadingReducer = (state = init, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};
