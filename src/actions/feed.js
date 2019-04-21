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
import { CALL_API } from "../middlewares/api";

export const fetchFeed = pageNo => {
  const endpoint = `feeds?page=${pageNo}`;
  return {
    [CALL_API]: {
      types: [FEED_REQUEST, FEED_SUCCESS, FEED_FAILURE],
      endpoint,
      method: "GET",
      authenticated: true,
      pageNo
    }
  };
};

export const enrichData = (data, wow) => {
  const endpoint = "feeds/enrich";
  return {
    [CALL_API]: {
      types: [
        FEED_ENRICH_REQUEST,
        FEED_ENRICH_SUCCESS,
        FEED_ENRICH_FAILURE,
        [ADD_TO_FEED_ON_ENRICH, INCREMENT_UNREAD_COUNT, SYNC_WOW]
      ],
      endpoint,
      method: "POST",
      authenticated: true,
      data,
      wow
    }
  };
};

export const resetUnreadCount = () => {
  return { type: RESET_UNREAD_COUNT };
};
