import { CREATE_ORDER } from "../types";

export const createOrder = (data) => {
  return {
    type: CREATE_ORDER,
    payload: data,
  };
};
