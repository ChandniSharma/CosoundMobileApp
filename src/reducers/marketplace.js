import initialState from "./initialState";
import {
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

export const categories = (state = initialState.categories, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: [],
        error: {}
      });
    case CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case CATEGORIES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const headerCategoriesIS = initialState.headerCategories;

export const headerCategories = (
  state = initialState.headerCategories,
  action
) => {
  switch (action.type) {
    case HEADER_CATEGORIES_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: [],
        error: {}
      });
    case HEADER_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case HEADER_CATEGORIES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const services = (state = initialState.services, action) => {
  switch (action.type) {
    case SERVICES_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: action.pageNo === 1 ? [] : state.data,
        error: {}
      });
    case SERVICES_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, ...action.data.data],
        paginationData: {
          page: action.data.meta.pagination
            ? action.data.meta.pagination.current_page
            : state.paginationData.page,
          page_count: action.data.meta.pagination
            ? action.data.meta.pagination.total_pages
            : state.paginationData.page_count
        },
        isRequesting: false,
        error: {}
      });
    case SERVICES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const placeOrder = (state = initialState.placeOrder, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case ORDER_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case ORDER_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const featuredServices = (
  state = initialState.featuredServices,
  action
) => {
  switch (action.type) {
    case FEATURED_SERVICES_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: [],
        error: {}
      });
    case FEATURED_SERVICES_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case FEATURED_SERVICES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};
