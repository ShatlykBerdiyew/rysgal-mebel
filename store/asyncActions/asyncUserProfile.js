import { getUserProfile } from "../actions/user";
import { BASE_URL } from "../urls";

export const asyncUserProfile = (token) => {
  return function (dispatch) {
    fetch(`${BASE_URL}/api/auth/profile-create/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => dispatch(getUserProfile(json.data)))
      .catch((err) => console.log(err));
  };
};
