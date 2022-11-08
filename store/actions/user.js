import {
  GET_USER_PROFILE,
  IS_SMS_RESEND,
  IS_SMS_SENT_SUCCESS,
  IS_SMS_VERIFY,
  LOGAUT_USER,
  LOGIN_USER,
  UPDATE_PROFILE_INFO,
} from "../types";

export const loginUser = (token) => {
  localStorage.setItem("token", token);
  return {
    type: LOGIN_USER,
    payload: token,
  };
};

export const logautUser = () => {
  localStorage.removeItem("token");
  return {
    type: LOGAUT_USER,
  };
};

export const getUserProfile = (data) => {
  return {
    type: GET_USER_PROFILE,
    payload: data,
  };
};

export const updateProfileInfo = (inputName, value) => {
  return {
    type: UPDATE_PROFILE_INFO,
    name: inputName,
    value: value,
  };
};

export const isSmsSendSuccess = (data) => {
return{
  type: IS_SMS_SENT_SUCCESS,
  payload: data
}
}


export const isSmsVerifySuccess = (data) => {
  return{
    type: IS_SMS_VERIFY,
    payload: data
  }
  }

  export const isSmsResend = () => {
    return{
      type: IS_SMS_RESEND,
    }
    }