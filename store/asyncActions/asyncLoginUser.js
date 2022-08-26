import { Router } from "next/router";
import { setLoading } from "../actions/loading";
import { loginUser } from "../actions/user";
import { BASE_URL } from "../urls";

export const asyncLoginUser = (user) => {
  return function (dispatch) {
    dispatch(setLoading(true));
    fetch(`${BASE_URL}/api/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          console.log(res);
        }
      })
      .then((json) => {
        console.log("login edilende gelyan jogap", json);
        dispatch(loginUser(json.access));
        Router.push("/profile");
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  };
};
