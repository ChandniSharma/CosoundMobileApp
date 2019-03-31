import axios from 'axios';

import {
  SET_USER,
  SET_TOKEN,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SET_USER_SOCIAL,
  RESET_SOCIAL_DATA,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
  PASSWORD_FORGOT_REQUEST,
  PASSWORD_FORGOT_SUCCESS,
  PASSWORD_FORGOT_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE
} from "../constants";

const loginRequest = () => ({
  type: LOGIN_REQUEST
});

const loginSuccess = (data) => ({
  type: LOGIN_REQUEST,
  data: data
});

const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  error: data
});

const loginFailure = (errorMessage) => ({
  type: LOGIN_FAILURE,
  error: errorMessage
});

export const login = (data) => {
  return dispatch => {
    dispatch(addTodoStarted());
    axios
      .post(`https://cosound.geekydev.com/backend/api/login`, {
        email:"ben@cosound.co",
        password:"helloben",
        rememberMe:true
      })
      .then(res => {
        dispatch(loginSuccess(res.data));
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

/**
 * Fetch for Form Data
 * @param object data
 */
// export const signup = data => {
//   const formData = new FormData();
//   each(data, (value, key) => {
//     formData.append([key], value);
//   });

//   const endpoint = "register";
//   return {
//     [CALL_API]: {
//       types: [
//         SIGNUP_REQUEST,
//         SIGNUP_SUCCESS,
//         SIGNUP_FAILURE,
//         [SET_TOKEN, SET_USER, RESET_SOCIAL_DATA]
//       ],
//       data: formData,
//       endpoint,
//       method: "POST",
//       authenticated: true,
//       formData: true
//     }
//   };
// };

// export const login = data => {
//   const endpoint = "login";
//   return {
//     [CALL_API]: {
//       types: [
//         LOGIN_REQUEST,
//         LOGIN_SUCCESS,
//         LOGIN_FAILURE,
//         [SET_TOKEN, SET_USER]
//       ],
//       endpoint,
//       method: "POST",
//       data
//     }
//   };
// };

// export const fetchUserBySearchToken = (searchToken, expiresIn) => {
//   const endpoint = "login/via_token";
//   return {
//     [CALL_API]: {
//       types: [
//         USER_DETAILS_REQUEST,
//         USER_DETAILS_SUCCESS,
//         USER_DETAILS_FAILURE,
//         [SET_USER_SOCIAL]
//       ],
//       endpoint,
//       method: "GET",
//       authenticated: true,
//       searchToken,
//       expiresIn
//     }
//   };
// };

// export const forgotPassword = data => {
//   const endpoint = "password/forgot";
//   return {
//     [CALL_API]: {
//       types: [
//         PASSWORD_FORGOT_REQUEST,
//         PASSWORD_FORGOT_SUCCESS,
//         PASSWORD_FORGOT_FAILURE
//       ],
//       endpoint,
//       method: "POST",
//       data
//     }
//   };
// };

// export const resetPassword = data => {
//   const endpoint = "password/reset";
//   return {
//     [CALL_API]: {
//       types: [
//         RESET_PASSWORD_REQUEST,
//         RESET_PASSWORD_SUCCESS,
//         RESET_PASSWORD_FAILURE
//       ],
//       endpoint,
//       method: "POST",
//       data
//     }
//   };
// };
