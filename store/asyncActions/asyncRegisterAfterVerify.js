import { isSmsSendSuccess, loginUser } from "../actions/user";
import { BASE_URL } from "../urls";
import { Router } from "next/router";

export const asyncRegisterUserAfterVerify = (user) => {
  return function (dispatch) {
    console.log('registrasiya fetchden on: ', JSON.stringify(user))
    fetch(`${BASE_URL}/api/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(loginUser(json.data.token));
        Router.push("/profile");
      })
      .catch((err) => console.log(err));
  };
};
