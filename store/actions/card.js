import { ADD_TO_CARD, DELETE_IN_CARD } from "../types";

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
