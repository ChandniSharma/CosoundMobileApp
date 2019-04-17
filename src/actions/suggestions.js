import { CALL_API } from "../middlewares/api";

import {
  SUGGESTIONS_REQUEST,
  SUGGESTIONS_SUCCESS,
  SUGGESTIONS_FAILURE
} from "../constants";

/**
 * Fetch Suggestions
 *
 */
export const fetchSuggestions = pageNo => {
  const endpoint = `suggestions?page=${pageNo}`;
  return {
    [CALL_API]: {
      types: [SUGGESTIONS_REQUEST, SUGGESTIONS_SUCCESS, SUGGESTIONS_FAILURE],
      endpoint,
      method: "GET",
      pageNo,
      authenticated: true
    }
  };
};
