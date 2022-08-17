import { getBrandsList } from "../actions/getBrandList";
import { BASE_URL } from "../urls";

export const asyncGetBrandList = () => {
  return function (dispatch) {
    fetch(`${BASE_URL}/api/products/brands/`)
      .then((res) => res.json())
      .then((json) => dispatch(getBrandsList(json)))
      .catch((err) => console.log(err));
  };
};
