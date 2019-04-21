import { CALL_API } from "../middlewares/api";

import { GENRES_REQUEST, GENRES_SUCCESS, GENRES_FAILURE } from "../constants";

/**
 * Fetch Countries | Sign up form
 *
 */
export const fetchGenres = (authenticated = false) => {
  const endpoint = "genres";
  return {
    [CALL_API]: {
      types: [GENRES_REQUEST, GENRES_SUCCESS, GENRES_FAILURE],
      endpoint,
      method: "GET",
      authenticated
    }
  };
};
