import initialState from "./initialState";
import {
  RESET_CART,
  CART_REQUEST,
  CART_SUCCESS,
  CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  CHANGE_USER_CART_COUNT,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  FETCH_CART_COUNT_REQUEST,
  FETCH_CART_COUNT_SUCCESS,
  FETCH_CART_COUNT_FAILURE
} from "../constants";

export const addToCart = (state = initialState.addToCart, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case ADD_TO_CART_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case ADD_TO_CART_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const removeFromCart = (state = initialState.removeFromCart, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        data: {},
        error: {}
      });
    case REMOVE_FROM_CART_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case REMOVE_FROM_CART_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const cart = (state = initialState.cart, action) => {
  switch (action.type) {
    case CART_REQUEST:
      return Object.assign({}, state, {
        data: action.pageNo === 1 ? [] : state.data,
        isRequesting: true,
        error: {}
      });
    case CART_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, ...action.data.data],
        vat: action.data.meta.vat,
        total: action.data.meta.total,
        sub_total: action.data.meta.sub_total,
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
    case CART_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const cartCount = (state = initialState.cartCount, action) => {
  switch (action.type) {
    case FETCH_CART_COUNT_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        error: {},
        data: null
      });

    case FETCH_CART_COUNT_SUCCESS:
      return Object.assign({}, state, {
        isRequesting: false,
        data: action.data.data,
        error: {}
      });
    case FETCH_CART_COUNT_FAILURE:
      return Object.assign({}, state, {
        isRequesting: false,
        error: action.error
      });
    case CHANGE_USER_CART_COUNT:
      return Object.assign({}, state, {
        data: action.data.count
      });
    case RESET_CART:
      return Object.assign({}, initialState.cartCount);
    default:
      return state;
  }
};
