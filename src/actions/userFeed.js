import {
    USER_FEED_REQUEST,
    USER_FEED_SUCCESS,
    USER_FEED_FAILURE,
    SET_TEMPORARY_FILE
  } from "../constants";

  const API_BASE_URL = 'https://cosound.geekydev.com/backend/api';

  const fetchFeedRequest = () => ({
    type: USER_FEED_REQUEST
  });
  
  const fetchFeedSuccess = (data) => ({
    type: USER_FEED_SUCCESS,
    data: data
  });
  
  const fetchFeedFailure = (errorMessage) => ({
    type: USER_FEED_FAILURE,
    error: errorMessage
  });
  
  export const fetchFeed = (pageNo) => {
    return dispatch => {
      dispatch(fetchFeedRequest());
      return axios
        .get(`${API_BASE_URL}/posts?page=${pageNo}`, {})
        .then(res => {
          dispatch(fetchFeedSuccess(res.data));
          return true;
        })
        .catch(err => {
          dispatch(fetchFeedFailure(err.message));
          return false;
        });
    };
  };
  
//   export const fetchFeed = pageNo => {
//     const endpoint = `posts?page=${pageNo}`;
//     return {
//       [CALL_API]: {
//         types: [USER_FEED_REQUEST, USER_FEED_SUCCESS, USER_FEED_FAILURE],
//         endpoint,
//         method: "GET",
//         authenticated: true,
//         pageNo
//       }
//     };
//   };
  
  export const setTemporaryFile = file => {
    return {
      type: SET_TEMPORARY_FILE,
      file
    };
  };