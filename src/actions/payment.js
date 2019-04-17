import { CALL_API } from "../middlewares/api";

import {
  CARD_REQUEST,
  CARD_SUCCESS,
  CARD_FAILURE,
  PAYMENT_DETAILS_REQUEST,
  PAYMENT_DETAILS_SUCCESS,
  PAYMENT_DETAILS_FAILURE
} from "../constants";

/**
 * Fetch payment card
 */
export const fetch = () => {
  const endpoint = "payment_methods/card";
  return {
    [CALL_API]: {
      types: [CARD_REQUEST, CARD_SUCCESS, CARD_FAILURE],
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};

/**
 * Save Payment Details
 */
export const save = data => {
  const endpoint = "payment_methods/card";
  return {
    [CALL_API]: {
      types: [
        PAYMENT_DETAILS_REQUEST,
        PAYMENT_DETAILS_SUCCESS,
        PAYMENT_DETAILS_FAILURE
      ],
      data,
      endpoint,
      method: "POST",
      authenticated: true
    }
  };
};
