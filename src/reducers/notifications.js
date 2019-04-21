/* eslint-disable */
import { isEmpty } from "lodash";
import initialState from "./initialState";
import {
  NOTIFICATION_REQUEST,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_FAILURE,
  SET_NOTIFICATION_COUNT,
  NOTIFICATION_COUNT_REQUEST,
  NOTIFICATION_COUNT_SUCCESS,
  NOTIFICATION_COUNT_FAILURE,
  NOTIFICATION_RESET_REQUEST,
  NOTIFICATION_RESET_SUCCESS,
  NOTIFICATION_RESET_FAILURE
} from "../constants";

export const notifications = (state = initialState.notifications, action) => {
  switch (action.type) {
    case NOTIFICATION_REQUEST:
      return Object.assign({}, state, {
        data: action.pageNo === 1 ? [] : state.data,
        isRequesting: true,
        error: {}
      });
    case NOTIFICATION_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, ...action.data.data],
        paginationData: {
          page: action.pageNo,
          callApi:
            !isEmpty(action.data.data) && action.data.count.total === 20
              ? true
              : false
        },
        isRequesting: false,
        error: {}
      });
    case NOTIFICATION_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const notificationCount = (
  state = initialState.notificationCount,
  action
) => {
  switch (action.type) {
    case NOTIFICATION_COUNT_REQUEST:
      return Object.assign({}, state, {
        data: null,
        isRequesting: true,
        error: {}
      });
    case NOTIFICATION_COUNT_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case NOTIFICATION_COUNT_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    case SET_NOTIFICATION_COUNT:
      return Object.assign({}, state, {
        data: action.data.data
      });
    default:
      return state;
  }
};

export const notificationReset = (
  state = initialState.notificationReset,
  action
) => {
  switch (action.type) {
    case NOTIFICATION_RESET_REQUEST:
      return Object.assign({}, state, {
        data: null,
        isRequesting: true,
        error: {}
      });
    case NOTIFICATION_RESET_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case NOTIFICATION_RESET_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};
