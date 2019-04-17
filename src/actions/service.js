import { CALL_API } from "../middlewares/api";

import {
  REVIEW_REQUEST,
  REVIEW_SUCCESS,
  REVIEW_FAILURE,
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
  SERVICE_FAILURE
} from "../constants";

/**
 * Fetch Service Details
 *
 */
export const fetch = id => {
  const endpoint = `marketplace/services/${id}`;
  return {
    [CALL_API]: {
      types: [SERVICE_REQUEST, SERVICE_SUCCESS, SERVICE_FAILURE],
      endpoint,
      method: "GET",
      authenticated: true,
      id
    }
  };
};

/**
 * Fetch Paginated service reviews
 *
 */
export const fetchReviews = (id, pageNo) => {
  const endpoint = `marketplace/services/${id}/reviews`;
  return {
    [CALL_API]: {
      types: [REVIEW_REQUEST, REVIEW_SUCCESS, REVIEW_FAILURE],
      endpoint,
      method: "GET",
      authenticated: true,
      id,
      pageNo
    }
  };
};
