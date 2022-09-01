import { GET_BANNER_LIST } from "../types";

export const getBannerList = (data) => {
  return {
    type: GET_BANNER_LIST,
    payload: data,
  };
};
