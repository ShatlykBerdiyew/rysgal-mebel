import {
  GET_USER_PROFILE,
  IS_SMS_RESEND,
  IS_SMS_SENT_SUCCESS,
  IS_SMS_VERIFY,
  LOGAUT_USER,
  LOGIN_USER,
  UPDATE_PROFILE_INFO,
} from "../types";

const init = {
  token: null,
  user_profil: null,
  is_sms_sent: false,
  is_sms_verify: false
};

export const userReducer = (state = init, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload,
      };
    case LOGAUT_USER:
      return {
        ...state,
        token: null,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        user_profil: action.payload,
      };
    case UPDATE_PROFILE_INFO:
      return {
        ...state,
        user_profil: { ...state.user_profil, [action.name]: action.value },
      };
    case IS_SMS_SENT_SUCCESS:
      return {
        ...state,
        is_sms_sent: action.payload
      };
    case IS_SMS_VERIFY:
      return {
        ...state,
        is_sms_verify: action.payload
      }
    case IS_SMS_RESEND:
      return {
        ...state,
        is_sms_verify: false,
      };
    default:
      return state;
  }
};
