import { CALL_API } from "../middlewares/api";

import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  RESET_SEARCH_STATE
} from "../constants";

/**
 * Search Users
 *
 * @param string type
 * @param string query
 */
export const searchUsers = (type, query) => {
  const endpoint = `search/users?query=${query}`;
  return {
    [CALL_API]: {
      types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
      searchType: type,
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};

/**
 * Search services
 *
 * @param string type
 * @param string categoryId
 * @param string query
 */
export const searchServices = (type, categoryId, query) => {
  const endpoint = `marketplace/categories/${categoryId}?query=${query}`;
  return {
    [CALL_API]: {
      types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
      searchType: type,
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};

export const resetState = () => {
  return {
    type: RESET_SEARCH_STATE
  };
};
