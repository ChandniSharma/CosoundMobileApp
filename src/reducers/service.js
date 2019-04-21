import initialState from "./initialState";
import {
  REVIEW_REQUEST,
  REVIEW_SUCCESS,
  REVIEW_FAILURE,
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
  SERVICE_FAILURE
} from "../constants";

export const service = (state = initialState.service, action) => {
  switch (action.type) {
    case SERVICE_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        data: {},
        error: {}
      });
    case SERVICE_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case SERVICE_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const reviews = (state = initialState.reviews, action) => {
  switch (action.type) {
    case REVIEW_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: action.pageNo === 1 ? [] : state.data,
        error: {}
      });
    case REVIEW_SUCCESS:
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
    case REVIEW_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};
