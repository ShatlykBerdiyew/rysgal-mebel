import { isSmsSendSuccess, loginUser } from "../actions/user";
import { BASE_URL } from "../urls";

export const asyncRegisterUser = (user) => {
  return function (dispatch) {
    fetch(`${BASE_URL}/api/auth/register-mobile/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((json) => {
        if(json.response === 'success'){
          dispatch(isSmsSendSuccess(true))
        }
      })
      .catch((err) => console.log(err));
  };
};
