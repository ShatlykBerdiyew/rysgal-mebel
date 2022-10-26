import { addInteryer } from "../actions/interyer";
import { BASE_URL } from "../urls";

export const asyncGetInteryerList = () => {
  return function (dispatch) {
    fetch(`${BASE_URL}/api/products/design-samples/`)
      .then((res) => res.json())
      .then((json) => dispatch(addInteryer(json.data)))
      .catch((err) => console.log("Error in getBanner", err));
  };
};