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
import { CALL_API } from "../middlewares/api";

/**
 * Fetch Paginated Notification
 *
 * @param string pageNo
 */
export const fetch = pageNo => {
  const endpoint = `notifications?page=${pageNo}`;
  return {
    [CALL_API]: {
      types: [NOTIFICATION_REQUEST, NOTIFICATION_SUCCESS, NOTIFICATION_FAILURE],
      pageNo,
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};

/**
 * Fetch Unseen Notification count
 */
export const fetchCount = () => {
  const endpoint = "notifications/count";
  return {
    [CALL_API]: {
      types: [
        NOTIFICATION_COUNT_REQUEST,
        NOTIFICATION_COUNT_SUCCESS,
        NOTIFICATION_COUNT_FAILURE
      ],
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};

/**
 * Set seen or read for notifications
 *
 * @param array data
 * @param string type
 */
export const reset = (data, type) => {
  const endpoint = `notifications/action/${type}`;
  let collaterals = [];
  if (type === "seen") {
    collaterals = [SET_NOTIFICATION_COUNT];
  }
  return {
    [CALL_API]: {
      types: [
        NOTIFICATION_RESET_REQUEST,
        NOTIFICATION_RESET_SUCCESS,
        NOTIFICATION_RESET_FAILURE,
        collaterals
      ],
      data,
      endpoint,
      method: "PUT",
      authenticated: true
    }
  };
};
