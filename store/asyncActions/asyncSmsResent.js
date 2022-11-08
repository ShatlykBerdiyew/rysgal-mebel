import { isSmsSendSuccess, isSmsVerifySuccess, loginUser } from "../actions/user";
import { BASE_URL } from "../urls";

export const asyncSmsResent = (user) => {
  return function (dispatch) {
    console.log('registrasiya fetchden on: ', user)
    fetch(`${BASE_URL}/api/auth/resend-sms/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
          dispatch(isSmsResend())
        
      })
      .catch((err) => console.log(err));
  };
};
