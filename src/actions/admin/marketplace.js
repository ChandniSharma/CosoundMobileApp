import { isNull } from "lodash";

import { CALL_API } from "../../middlewares/api";
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

/**
 * Fetch paginated active/pending services for admin
 *
 * @param number pageNo
 * @param string type
 */
export const fetchServices = (pageNo, type, query) => {
  const endpoint = `admin/marketplace/services/${type}?page=${pageNo}${
    !isNull(query) ? `&query=${query}` : ""
  }`;

  let types = [];
  if (type === "active") {
    types = [
      ACTIVE_SERVICES_REQUEST,
      ACTIVE_SERVICES_SUCCESS,
      ACTIVE_SERVICES_FAILURE
    ];
  } else {
    types = [
      PENDING_SERVICES_REQUEST,
      PENDING_SERVICES_SUCCESS,
      PENDING_SERVICES_FAILURE
    ];
  }

  return {
    [CALL_API]: {
      types,
      pageNo,
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};

/**
 * Toggle & persist active tab
 *
 * @param string activeTab
 */
export const toggleActiveTab = activeTab => {
  return { type: TOGGLE_ACTIVE_TAB, activeTab };
};

/**
 * Fetch services detail
 *
 * @param string id
 */
export const fetchService = id => {
  const endpoint = `admin/marketplace/services/${id}`;
  return {
    [CALL_API]: {
      types: [
        SERVICE_DETAIL_REQUEST,
        SERVICE_DETAIL_SUCCESS,
        SERVICE_DETAIL_FAILURE
      ],
      id,
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};

export const deleteService = (id, data) => {
  const endpoint = `admin/marketplace/services/${id}`;
  return {
    [CALL_API]: {
      types: [
        SERVICE_DELETE_REQUEST,
        SERVICE_DELETE_SUCCESS,
        SERVICE_DELETE_FAILURE
      ],
      id,
      data,
      endpoint,
      method: "DELETE",
      authenticated: true
    }
  };
};

export const approveService = id => {
  const endpoint = `admin/marketplace/services/${id}/approve`;
  return {
    [CALL_API]: {
      types: [
        SERVICE_APPROVE_REQUEST,
        SERVICE_APPROVE_SUCCESS,
        SERVICE_APPROVE_FAILURE
      ],
      id,
      endpoint,
      method: "PUT",
      authenticated: true
    }
  };
};
