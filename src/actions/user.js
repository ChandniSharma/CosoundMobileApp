import { CALL_API } from "../middlewares/api";
/* eslint-disable */
import { isEmpty } from "lodash";
import {
  SET_USER,
  USER_LOGOUT,
  FOLLOW_REQUEST,
  FOLLOW_FAILURE,
  FOLLOW_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  RESET_FETCH_USER,
  RESET_SOCIAL_DATA,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
  REFACTOR_SUGGESTIONS,
  SET_SOCIAL_USER_DATA,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILURE,
  DETAILS_UPDATE_REQUEST,
  DETAILS_UPDATE_SUCCESS,
  DETAILS_UPDATE_FAILURE,
  FETCH_MY_MUSIC_REQUEST,
  FETCH_MY_MUSIC_SUCCESS,
  FETCH_MY_MUSIC_FAILURE,
  PASSWORD_CHANGE_REQUEST,
  PASSWORD_CHANGE_SUCCESS,
  PASSWORD_CHANGE_FAILURE,
  FETCH_MY_IMAGES_REQUEST,
  FETCH_MY_IMAGES_SUCCESS,
  FETCH_MY_IMAGES_FAILURE,
  FETCH_CART_COUNT_REQUEST,
  FETCH_CART_COUNT_SUCCESS,
  FETCH_CART_COUNT_FAILURE,
  CONTACT_INFO_UPDATE_REQUEST,
  CONTACT_INFO_UPDATE_SUCCESS,
  CONTACT_INFO_UPDATE_FAILURE
} from "../constants";

export const fetchCartCount = () => {
  const endpoint = "marketplace/cart/count";
  return {
    [CALL_API]: {
      types: [
        FETCH_CART_COUNT_REQUEST,
        FETCH_CART_COUNT_SUCCESS,
        FETCH_CART_COUNT_FAILURE
      ],
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};

export const fetchMyMusic = pageNo => {
  const endpoint = `uploads/audio?page=${pageNo}`;
  console.log("call fetchMyMusic")
  return {
    [CALL_API]: {
      types: [
        FETCH_MY_MUSIC_REQUEST,
        FETCH_MY_MUSIC_SUCCESS,
        FETCH_MY_MUSIC_FAILURE
      ],
      endpoint,
      method: "GET",
      authenticated: true,
      pageNo
    }
  };
};

export const fetchMyImages = pageNo => {
  const endpoint = `uploads/image?page=${pageNo}`;
  return {
    [CALL_API]: {
      types: [
        FETCH_MY_IMAGES_REQUEST,
        FETCH_MY_IMAGES_SUCCESS,
        FETCH_MY_IMAGES_FAILURE
      ],
      endpoint,
      method: "GET",
      authenticated: true,
      pageNo
    }
  };
};

export const setUser = data => {
  return {
    type: SET_USER,
    data
  };
};

export const followUser = id => {
  const endpoint = "follow";
  const data = Object.assign({}, { id });
  return {
    [CALL_API]: {
      types: [
        FOLLOW_REQUEST,
        FOLLOW_SUCCESS,
        FOLLOW_FAILURE,
        [REFACTOR_SUGGESTIONS]
      ],
      endpoint,
      method: "POST",
      data,
      id,
      authenticated: true
    }
  };
};

export const update = (data, requestingType) => {
  const endpoint = "update";
  data.type = data.type.toLowerCase();
  let reducers = [];
  if (requestingType === "isUpdatingContactInfo") {
    reducers = [
      CONTACT_INFO_UPDATE_REQUEST,
      CONTACT_INFO_UPDATE_SUCCESS,
      CONTACT_INFO_UPDATE_FAILURE
    ];
  } else if (requestingType === "isUpdatingDetails") {
    reducers = [
      DETAILS_UPDATE_REQUEST,
      DETAILS_UPDATE_SUCCESS,
      DETAILS_UPDATE_FAILURE
    ];
  }
  if (!isEmpty(reducers)) {
    return {
      [CALL_API]: {
        types: [...reducers, [SET_USER]],
        endpoint,
        method: "PUT",
        data,
        authenticated: true
      }
    };
  }
};

export const changePassword = data => {
  const endpoint = "password/change";
  return {
    [CALL_API]: {
      types: [
        PASSWORD_CHANGE_REQUEST,
        PASSWORD_CHANGE_SUCCESS,
        PASSWORD_CHANGE_FAILURE
      ],
      endpoint,
      method: "PUT",
      data,
      authenticated: true
    }
  };
};

export const uploadProfilePic = (name, file) => {
  /* FormData construct */
  const formData = new FormData();
  console.log(" 171 file ***", file);

  formData.append([name], {
    name: file.fileName,
    type: file.type,
    uri:
      file.uri.replace("file://", "")
  });
  console.log(" 173 file ***", file[0]);

  //formData.append([name], file);
  /* FormData construct */
  console.log(" 173 form data ", formData);
  const endpoint = "update/avatar";
  return {
    [CALL_API]: {
      types: [
        UPDATE_AVATAR_REQUEST,
        UPDATE_AVATAR_SUCCESS,
        UPDATE_AVATAR_FAILURE,
        [SET_USER]
      ],
      data: formData,
      endpoint,
      method: "POST",
      authenticated: true,
      formData: true
    }
  };
};

export const fetchAuthUser = () => {
  const endpoint = "me";
  return {
    [CALL_API]: {
      types: [USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAILURE],
      endpoint,
      method: "GET",
      authenticated: true
    }
  };
};

export const setSocialUserData = data => {
  return {
    type: SET_SOCIAL_USER_DATA,
    data
  };
};

export const resetSocialUserData = () => {
  return {
    type: RESET_SOCIAL_DATA
  };
};

export const logout = () => {
  const endpoint = "logout";
  return {
    [CALL_API]: {
      types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, [USER_LOGOUT]],
      endpoint,
      method: "POST",
      authenticated: true
    }
  };
};
