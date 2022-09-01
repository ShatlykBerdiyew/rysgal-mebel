import { getBannerList } from "../actions/banner";
import { BASE_URL } from "../urls";

export const asyncGetBannerList = () => {
  return function (dispatch) {
    fetch(`${BASE_URL}/api/products/banners/`)
      .then((res) => res.json())
      .then((json) => dispatch(getBannerList(json.data)))
      .catch((err) => console.log("Error in getBanner", err));
  };
};
