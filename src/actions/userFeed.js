import {
  USER_FEED_REQUEST,
  USER_FEED_SUCCESS,
  USER_FEED_FAILURE,
  SET_TEMPORARY_FILE
} from "../constants";
import { CALL_API } from "../middlewares/api";

export const fetchFeed = pageNo => {
  const endpoint = `posts?page=${pageNo}`;
  return {
    [CALL_API]: {
      types: [USER_FEED_REQUEST, USER_FEED_SUCCESS, USER_FEED_FAILURE],
      endpoint,
      method: "GET",
      authenticated: true,
      pageNo
    }
  };
};

export const setTemporaryFile = file => {
  return {
    type: SET_TEMPORARY_FILE,
    file
  };
};
