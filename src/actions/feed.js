import {
    SYNC_WOW,
    FEED_REQUEST,
    FEED_SUCCESS,
    FEED_FAILURE,
    RESET_UNREAD_COUNT,
    FEED_ENRICH_REQUEST,
    FEED_ENRICH_SUCCESS,
    FEED_ENRICH_FAILURE,
    ADD_TO_FEED_ON_ENRICH,
    INCREMENT_UNREAD_COUNT
  } from "../constants";
  
  //import { CALL_API } from "../middlewares/api";
  const API_BASE_URL = 'https://cosound.geekydev.com/backend/api';
  const fetchFeedRequest = (data) => ({
    type: FEED_REQUEST,
    data: data
  });
  
  const fetchFeedSuccess = (data) => ({
    type: FEED_SUCCESS,
    data: data
  });
  
  const fetchFeedFailure = (errorMessage) => ({
    type: FEED_FAILURE,
    error: errorMessage
  });
  
  export const fetchFeed = (pageNo) => {
    return dispatch => {
      dispatch(fetchFeedRequest());
      axios
        .get(`${API_BASE_URL}/feeds?page=${pageNo}`, {})
        .then(res => {
          dispatch(fetchFeedSuccess(res.data));
        })
        .catch(err => {
          dispatch(addTodoFailure(err.message));
        });
    };
  };
  
  const enrichDataRequest = () => ({
    type: FEED_ENRICH_REQUEST
  });
  
  const enrichDataSuccess = (data) => ({
    type: FEED_ENRICH_SUCCESS,
    data: data
  });
  
  const enrichDataFailure = (errorMessage) => ({
    type: FEED_ENRICH_FAILURE,
    error: errorMessage
  });

  const addToFeedOnEnritch = (data) => ({
    type: ADD_TO_FEED_ON_ENRICH,
    error: data
  });

  const increamentUnReadCount = (data) => ({
    type: INCREMENT_UNREAD_COUNT,
    data: data
  });
  
  export const enrichData = (data) => {
    return dispatch => {
      dispatch(enrichDataRequest());
      return axios
        .post(`${API_BASE_URL}/feeds/enrich`, data)
        .then(res => {
          dispatch(enrichDataSuccess(res.data));
          dispatch(addToFeedOnEnritch(res.data));
          dispatch(increamentUnReadCount(res.data));
          return true;
        })
        .catch(err => {
          dispatch(enrichDataFailure(err.message));
          return false;
        });
    };
  };
  // export const fetchFeed = pageNo => {
  //   const endpoint = `feeds?page=${pageNo}`;
  //   return {
  //     [CALL_API]: {
  //       types: [FEED_REQUEST, FEED_SUCCESS, FEED_FAILURE],
  //       endpoint,
  //       method: "GET",
  //       authenticated: true,
  //       pageNo
  //     }
  //   };
  // };
  
  // export const enrichData = (data, wow) => {
  //   const endpoint = "feeds/enrich";
  //   return {
  //     [CALL_API]: {
  //       types: [
  //         FEED_ENRICH_REQUEST,
  //         FEED_ENRICH_SUCCESS,
  //         FEED_ENRICH_FAILURE,
  //         [ADD_TO_FEED_ON_ENRICH, INCREMENT_UNREAD_COUNT, SYNC_WOW]
  //       ],
  //       endpoint,
  //       method: "POST",
  //       authenticated: true,
  //       data,
  //       wow
  //     }
  //   };
  // };
  
  export const resetUnreadCount = () => {
    return { type: RESET_UNREAD_COUNT };
  };
  