import initialState from "./initialState";
import {
  PUBLISH_SERVICE_REQUEST,
  PUBLISH_SERVICE_SUCCESS,
  PUBLISH_SERVICE_FAILURE,
  OFFERED_SERVICE_REQUEST,
  OFFERED_SERVICE_SUCCESS,
  OFFERED_SERVICE_FAILURE,
  PURCHASED_SERVICE_REQUEST,
  PURCHASED_SERVICE_SUCCESS,
  PURCHASED_SERVICE_FAILURE
} from "../constants";

export const publishService = (state = initialState.publishService, action) => {
  switch (action.type) {
    case PUBLISH_SERVICE_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: [],
        error: {}
      });
    case PUBLISH_SERVICE_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case PUBLISH_SERVICE_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const offeredServices = (
  state = initialState.offeredServices,
  action
) => {
  switch (action.type) {
    case OFFERED_SERVICE_REQUEST:
      return Object.assign({}, state, {
        sortType: action.sort,
        isRequesting: true,
        data: action.pageNo === 1 ? [] : state.data,
        error: {}
      });
    case OFFERED_SERVICE_SUCCESS:
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
    case OFFERED_SERVICE_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const purchasedServices = (
  state = initialState.purchasedServices,
  action
) => {
  switch (action.type) {
    case PURCHASED_SERVICE_REQUEST:
      return Object.assign({}, state, {
        sortType: action.sort,
        isRequesting: true,
        data: action.pageNo === 1 ? [] : state.data,
        error: {}
      });
    case PURCHASED_SERVICE_SUCCESS:
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
    case PURCHASED_SERVICE_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};
