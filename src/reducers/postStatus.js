import initialState from "./initialState";
import {
  POST_REQUEST,
  POST_FAILURE,
  POST_SUCCESS,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAILURE
} from "../constants";

export const postStatus = (state = initialState.postStatus, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case POST_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case POST_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const postDetails = (state = initialState.postDetails, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        data: {},
        error: {}
      });
    case POST_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case POST_DETAILS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};
