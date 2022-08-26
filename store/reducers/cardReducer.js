import {
  ADD_TO_CARD,
  CHANGE_QTY_PRODUCT,
  CLEAR_CARD,
  DELETE_IN_CARD,
} from "../types";

const init = [];

export const cardReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return [...state, action.payload];
    case DELETE_IN_CARD:
      return state.filter((item) => item.prod_id !== action.payload);
    case CHANGE_QTY_PRODUCT:
      return state.map((item) =>
        item.prod_id === action.id
          ? { ...item, qty: item.qty + action.qty }
          : item
      );
    case CLEAR_CARD:
      return [];
    default:
      return state;
  }
};
