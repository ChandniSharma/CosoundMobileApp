import { CALL_API } from "../middlewares/api";

import {
  CART_REQUEST,
  CART_SUCCESS,
  CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  CHANGE_USER_CART_COUNT,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE
} from "../constants";

/**
 * Add/ Remove Cart
 */
export const toggle = (id, type = "add") => {
  const data = { service_id: id };
  let endpoint = "marketplace/cart";
  let types = [ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE];
  let method = "POST";
  if (type === "remove") {
    endpoint = `marketplace/cart/${id}`;
    types = [
      REMOVE_FROM_CART_REQUEST,
      REMOVE_FROM_CART_SUCCESS,
      REMOVE_FROM_CART_FAILURE
    ];
    method = "DELETE";
  }

  return {
    [CALL_API]: {
      types: [...types, [CHANGE_USER_CART_COUNT]],
      id,
      data,
      method,
      endpoint,
      authenticated: true
    }
  };
};

/**
 * Fetch user paginated cart
 */
export const fetch = pageNo => {
  const endpoint = `marketplace/cart?page=${pageNo}`;
  return {
    [CALL_API]: {
      types: [CART_REQUEST, CART_SUCCESS, CART_FAILURE],
      pageNo,
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};
