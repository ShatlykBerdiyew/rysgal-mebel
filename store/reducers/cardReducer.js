import { ADD_TO_CARD, DELETE_IN_CARD } from "../types";

const init = [];

export const cardReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return [...state, action.payload];
    case DELETE_IN_CARD:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
