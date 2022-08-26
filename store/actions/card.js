import { ADD_TO_CARD, CHANGE_QTY_PRODUCT, CLEAR_CARD, DELETE_IN_CARD } from "../types";

export const addCard = (data) => {
  return {
    type: ADD_TO_CARD,
    payload: data,
  };
};

export const deleteCard = (data) => {
  return {
    type: DELETE_IN_CARD,
    payload: data,
  };
};

export const clearCard = () => {
  return{
    type: CLEAR_CARD
  };
}

export const changeQtyProduct = (id, qty) => {
  return {
    type: CHANGE_QTY_PRODUCT,
    id: id,
    qty: qty,
  };
};
