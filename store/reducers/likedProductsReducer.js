import {
  ADD_ALL_LOCAL_LIKES,
  ADD_PRODUCT_IN_LIKES,
  DELETE_PRODUCT_IN_LIKES,
} from "../types";

const init = [];

export const likedProductsReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_PRODUCT_IN_LIKES:
      return [...state, action.payload];
    case DELETE_PRODUCT_IN_LIKES:
      return state.filter((item) => item.prod_id !== action.payload);
    case ADD_ALL_LOCAL_LIKES:
      return action.payload;
    default:
      return state;
  }
};
