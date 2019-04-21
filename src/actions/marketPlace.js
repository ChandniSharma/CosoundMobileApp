import { isNull } from "lodash";

import { CALL_API } from "../middlewares/api";

import {
  RESET_CART,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILURE,
  SERVICES_REQUEST,
  SERVICES_SUCCESS,
  SERVICES_FAILURE,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILURE,
  HEADER_CATEGORIES_REQUEST,
  HEADER_CATEGORIES_SUCCESS,
  HEADER_CATEGORIES_FAILURE,
  FEATURED_SERVICES_REQUEST,
  FEATURED_SERVICES_SUCCESS,
  FEATURED_SERVICES_FAILURE
} from "../constants";

/**
 * Fetch Categories
 *
 */
export const fetchCategories = (isHeader = false) => {
  const endpoint = "marketplace/categories";
  let types = [CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE];
  if (isHeader) {
    types = [
      HEADER_CATEGORIES_REQUEST,
      HEADER_CATEGORIES_SUCCESS,
      HEADER_CATEGORIES_FAILURE
    ];
  }
  return {
    [CALL_API]: {
      types,
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};

export const fetchServices = (categoryId, subCategoryId, pageNo) => {
  let endpoint = `marketplace/categories/${categoryId}?page=${pageNo}`;
  if (!isNull(subCategoryId)) {
    endpoint = `marketplace/categories/${categoryId}/${subCategoryId}?page=${pageNo}`;
  }
  return {
    [CALL_API]: {
      types: [SERVICES_REQUEST, SERVICES_SUCCESS, SERVICES_FAILURE],
      endpoint,
      method: "GET",
      authenticated: true,
      pageNo
    }
  };
};

export const placeOrder = () => {
  const endpoint = "marketplace/place_order";
  return {
    [CALL_API]: {
      types: [ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE, [RESET_CART]],
      endpoint,
      method: "POST",
      authenticated: true
    }
  };
};

export const fetchFeaturedServices = () => {
  const endpoint = "marketplace/services/featured";
  return {
    [CALL_API]: {
      types: [
        FEATURED_SERVICES_REQUEST,
        FEATURED_SERVICES_SUCCESS,
        FEATURED_SERVICES_FAILURE
      ],
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};
