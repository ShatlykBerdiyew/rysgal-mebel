import { loginUser } from "../actions/user";
import { BASE_URL } from "../urls";

export const asyncRegisterUser = (user) => {
  return function (dispatch) {
    fetch(`${BASE_URL}/api/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((json) => dispatch(loginUser(json.data.token)))
      .catch((err) => console.log(err));
  };
};
