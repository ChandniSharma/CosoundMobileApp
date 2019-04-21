import initialState from "./initialState";
import {
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILURE,
  DETAILS_UPDATE_REQUEST,
  DETAILS_UPDATE_SUCCESS,
  DETAILS_UPDATE_FAILURE,
  CONTACT_INFO_UPDATE_REQUEST,
  CONTACT_INFO_UPDATE_SUCCESS,
  CONTACT_INFO_UPDATE_FAILURE
} from "../constants";

export const contactInfo = (state = initialState.contactInfo, action) => {
  switch (action.type) {
    case CONTACT_INFO_UPDATE_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case CONTACT_INFO_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case CONTACT_INFO_UPDATE_FAILURE:
      return Object.assign({}, state, {             
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const details = (state = initialState.details, action) => {
  switch (action.type) {
    case DETAILS_UPDATE_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case DETAILS_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case DETAILS_UPDATE_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const profilePic = (state = initialState.profilePic, action) => {
  switch (action.type) {
    case UPDATE_AVATAR_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case UPDATE_AVATAR_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case UPDATE_AVATAR_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};
