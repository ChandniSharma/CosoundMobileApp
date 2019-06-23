import initialState from "./initialState";
import {
  REFACTOR_ADMIN_USER,
  ADMIN_USERS_REQUEST,
  ADMIN_USERS_SUCCESS,
  ADMIN_USERS_FAILURE,
  TOGGLE_ACCESS_REQUEST,
  TOGGLE_ACCESS_SUCCESS,
  TOGGLE_ACCESS_FAILURE
} from "../../constants";

export const users = (state = initialState.users, action) => {
  switch (action.type) {
    case ADMIN_USERS_REQUEST:
      return Object.assign({}, state, {
        data: action.pageNo === 1 ? [] : state.data,
        isRequesting: true,
        error: {}
      });
    case ADMIN_USERS_SUCCESS:
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
    case ADMIN_USERS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    case REFACTOR_ADMIN_USER:
      return Object.assign({}, state, {
        data: state.data.map(item => {
          if (item.id === action.id) {
            item.is_admin = action.data.data.is_admin;
            return item;
          }
          return item;
        })
      });
    default:
      return state;
  }
};

export const toggleAccess = (state = initialState.toggleAccess, action) => {
  switch (action.type) {
    case TOGGLE_ACCESS_REQUEST:
      return Object.assign({}, state, {
        data: {},
        isRequesting: action.id,
        error: {}
      });
    case TOGGLE_ACCESS_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case TOGGLE_ACCESS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};
