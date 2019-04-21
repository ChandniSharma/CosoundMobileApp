import initialState from "./initialState";
import {
  CARD_REQUEST,
  CARD_SUCCESS,
  CARD_FAILURE,
  PAYMENT_DETAILS_REQUEST,
  PAYMENT_DETAILS_SUCCESS,
  PAYMENT_DETAILS_FAILURE
} from "../constants";

export const paymentDetails = (state = initialState.paymentDetails, action) => {
  switch (action.type) {
    case PAYMENT_DETAILS_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case PAYMENT_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case PAYMENT_DETAILS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const cardDetails = (state = initialState.cardDetails, action) => {
  switch (action.type) {
    case CARD_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case CARD_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case CARD_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};
