import { isNull } from "lodash";
import { CALL_API } from "../../middlewares/api";

import {
  REFACTOR_ADMIN_USER,
  ADMIN_USERS_REQUEST,
  ADMIN_USERS_SUCCESS,
  ADMIN_USERS_FAILURE,
  TOGGLE_ACCESS_REQUEST,
  TOGGLE_ACCESS_SUCCESS,
  TOGGLE_ACCESS_FAILURE
} from "../../constants";

/**
 * Fetch paginated users for admin
 *
 * @param number pageNo
 */
export const fetch = (pageNo, query) => {
  const endpoint = `admin/users?page=${pageNo}${
    !isNull(query) ? `&query=${query}` : ""
  }`;
  return {
    [CALL_API]: {
      types: [ADMIN_USERS_REQUEST, ADMIN_USERS_SUCCESS, ADMIN_USERS_FAILURE],
      pageNo,
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};

/**
 * Toggle Admin Access
 *
 * @param string id
 */
export const toggleAdminAccess = id => {
  const endpoint = `admin/users/${id}/admin`;
  return {
    [CALL_API]: {
      types: [
        TOGGLE_ACCESS_REQUEST,
        TOGGLE_ACCESS_SUCCESS,
        TOGGLE_ACCESS_FAILURE,
        [REFACTOR_ADMIN_USER]
      ],
      id,
      endpoint,
      method: "PUT",
      authenticated: true
    }
  };
};
