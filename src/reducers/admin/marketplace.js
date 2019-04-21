import initialState from "./initialState";
import {
  TOGGLE_ACTIVE_TAB,
  SERVICE_DETAIL_REQUEST,
  SERVICE_DETAIL_SUCCESS,
  SERVICE_DETAIL_FAILURE,
  SERVICE_DELETE_REQUEST,
  SERVICE_DELETE_SUCCESS,
  SERVICE_DELETE_FAILURE,
  SERVICE_APPROVE_REQUEST,
  SERVICE_APPROVE_SUCCESS,
  SERVICE_APPROVE_FAILURE,
  ACTIVE_SERVICES_REQUEST,
  ACTIVE_SERVICES_SUCCESS,
  ACTIVE_SERVICES_FAILURE,
  PENDING_SERVICES_REQUEST,
  PENDING_SERVICES_SUCCESS,
  PENDING_SERVICES_FAILURE
} from "../../constants";

export const marketplaceActiveTab = (
  state = initialState.marketplaceActiveTab,
  action
) => {
  switch (action.type) {
    case TOGGLE_ACTIVE_TAB:
      return action.activeTab;
    default:
      return state;
  }
};

export const activeServices = (state = initialState.activeServices, action) => {
  switch (action.type) {
    case ACTIVE_SERVICES_REQUEST:
      return Object.assign({}, state, {
        data: action.pageNo === 1 ? [] : state.data,
        isRequesting: true,
        error: {}
      });
    case ACTIVE_SERVICES_SUCCESS:
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
    case ACTIVE_SERVICES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const pendingServices = (
  state = initialState.pendingServices,
  action
) => {
  switch (action.type) {
    case PENDING_SERVICES_REQUEST:
      return Object.assign({}, state, {
        data: action.pageNo === 1 ? [] : state.data,
        isRequesting: true,
        error: {}
      });
    case PENDING_SERVICES_SUCCESS:
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
    case PENDING_SERVICES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const serviceDetail = (state = initialState.serviceDetail, action) => {
  switch (action.type) {
    case SERVICE_DETAIL_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case SERVICE_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case SERVICE_DETAIL_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const serviceDelete = (state = initialState.serviceDelete, action) => {
  switch (action.type) {
    case SERVICE_DELETE_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        data: {},
        error: {}
      });
    case SERVICE_DELETE_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case SERVICE_DELETE_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const serviceApprove = (state = initialState.serviceApprove, action) => {
  switch (action.type) {
    case SERVICE_APPROVE_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        data: {},
        error: {}
      });
    case SERVICE_APPROVE_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case SERVICE_APPROVE_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};
