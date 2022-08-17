import { GET_BRANDS_LIST } from "../types";

export const getBrandsList = (data) => {
  return {
    type: GET_BRANDS_LIST,
    payload: data,
  };
};
