import { isNull } from "lodash";

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
const API_BASE_URL = 'https://cosound.geekydev.com/backend/api';
const fetchCategoriesRequest = () => ({
    type: CATEGORIES_REQUEST
  });
  
  const fetchCategoriesSuccess = (data) => ({
    type: CATEGORIES_SUCCESS,
    error: data
  });
  
  const fetchCategoriesFailure = (errorMessage) => ({
    type: CATEGORIES_FAILURE,
    error: errorMessage
  });
  
  const fetchHeaderCategoriesRequest = () => ({
    type: HEADER_CATEGORIES_REQUEST
  });
  
  const fetchHeaderCategoriesSuccess = (data) => ({
    type: HEADER_CATEGORIES_SUCCESS,
    error: data
  });
  
  const fetchHeaderCategoriesFailure = (errorMessage) => ({
    type: HEADER_CATEGORIES_FAILURE,
    error: errorMessage
  });

  export const fetchCategories = (isHeader = false) => {
    return dispatch => {
      if(isHeader){
        dispatch(fetchHeaderCategoriesRequest());
      }else{
        dispatch(fetchCategoriesRequest());
      }  
      
      return axios
        .get(`${API_BASE_URL}/marketplace/categories`, {})
        .then(res => {
            if(isHeader){
                dispatch(fetchHeaderCategoriesSuccess());
              }else{
                dispatch(fetchCategoriesSuccess(res.data));
              } 
          return true;
        })
        .catch(err => {
            if(isHeader){
                dispatch(fetchHeaderCategoriesFailure());
              }else{
                dispatch(fetchCategoriesFailure(err.message));
              } 
          return false;
        });
    };
  };
  
  const fetchServicesRequest = () => ({
    type: SERVICES_REQUEST
  });
  
  const fetchServicesSuccess = (data) => ({
    type: SERVICES_SUCCESS,
    error: data
  });
  
  const fetchServicesFailure = (errorMessage) => ({
    type: SERVICES_FAILURE,
    error: errorMessage
  });
  
  export const fetchServices = (categoryId, subCategoryId, pageNo) => {
    let endpoint = `marketplace/categories/${categoryId}?page=${pageNo}`;
    if (!isNull(subCategoryId)) {
     endpoint = `marketplace/categories/${categoryId}/${subCategoryId}?page=${pageNo}`;
    }
    return dispatch => {
      dispatch(fetchServicesRequest());
      return axios
        .get(`${API_BASE_URL}/${endpoint}`, {})
        .then(res => {
          dispatch(fetchServicesSuccess(res.data));
          return true;
        })
        .catch(err => {
          dispatch(fetchServicesFailure(err.message));
          return false;
        });
    };
  };
  
  const placeOrderRequest = () => ({
    type: ORDER_REQUEST
  });
  
  const placeOrderSuccess = (data) => ({
    type: ORDER_SUCCESS,
    error: data
  });
  
  const placeOrderFailure = (errorMessage) => ({
    type: ORDER_FAILURE,
    error: errorMessage
  });
  
  export const placeOrder = (data) => {
    return dispatch => {
      dispatch(placeOrderRequest());
      return axios
        .post(`${API_BASE_URL}/marketplace/place_order`, {})
        .then(res => {
          dispatch(placeOrderSuccess(res.data));
          return true;
        })
        .catch(err => {
          dispatch(placeOrderFailure(err.message));
          return false;
        });
    };
  };

  const fetchFeaturedServicesRequest = () => ({
    type: FEATURED_SERVICES_REQUEST
  });
  
  const fetchFeaturedServicesSuccess = (data) => ({
    type: FEATURED_SERVICES_SUCCESS,
    error: data
  });
  
  const fetchFeaturedServicesFailure = (errorMessage) => ({
    type: FEATURED_SERVICES_FAILURE,
    error: errorMessage
  });
  
  export const fetchFeaturedServices = (data) => {
    return dispatch => {
      dispatch(fetchFeaturedServicesRequest());
      return axios
        .get(`${API_BASE_URL}/marketplace/services/featured`, {})
        .then(res => {
          dispatch(fetchFeaturedServicesSuccess(res.data));
          return true;
        })
        .catch(err => {
          dispatch(fetchFeaturedServicesFailure(err.message));
          return false;
        });
    };
  };
/**
 * Fetch Categories
 *
 */
// export const fetchCategories = (isHeader = false) => {
//   const endpoint = "marketplace/categories";
//   let types = [CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE];
//   if (isHeader) {
//     types = [
//       HEADER_CATEGORIES_REQUEST,
//       HEADER_CATEGORIES_SUCCESS,
//       HEADER_CATEGORIES_FAILURE
//     ];
//   }
//   return {
//     [CALL_API]: {
//       types,
//       endpoint,
//       method: "GET",
//       authenticated: true
//     }
//   };
// };

// export const fetchServices = (categoryId, subCategoryId, pageNo) => {
//   let endpoint = `marketplace/categories/${categoryId}?page=${pageNo}`;
//   if (!isNull(subCategoryId)) {
//     endpoint = `marketplace/categories/${categoryId}/${subCategoryId}?page=${pageNo}`;
//   }
//   return {
//     [CALL_API]: {
//       types: [SERVICES_REQUEST, SERVICES_SUCCESS, SERVICES_FAILURE],
//       endpoint,
//       method: "GET",
//       authenticated: true,
//       pageNo
//     }
//   };
// };

// export const placeOrder = () => {
//   const endpoint = "marketplace/place_order";
//   return {
//     [CALL_API]: {
//       types: [ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE, [RESET_CART]],
//       endpoint,
//       method: "POST",
//       authenticated: true
//     }
//   };
// };

// export const fetchFeaturedServices = () => {
//   const endpoint = "marketplace/services/featured";
//   return {
//     [CALL_API]: {
//       types: [
//         FEATURED_SERVICES_REQUEST,
//         FEATURED_SERVICES_SUCCESS,
//         FEATURED_SERVICES_FAILURE
//       ],
//       endpoint,
//       method: "GET",
//       authenticated: true
//     }
//   };
// };
