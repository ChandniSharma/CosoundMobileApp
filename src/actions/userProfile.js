import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  FETCH_USER_MUSIC_REQUEST,
  FETCH_USER_MUSIC_SUCCESS,
  FETCH_USER_MUSIC_FAILURE,
  FETCH_USER_IMAGES_REQUEST,
  FETCH_USER_IMAGES_SUCCESS,
  FETCH_USER_IMAGES_FAILURE,
  USER_PROFILE_FEED_REQUEST,
  USER_PROFILE_FEED_SUCCESS,
  USER_PROFILE_FEED_FAILURE
} from "../constants";
import { CALL_API } from "../middlewares/api";

export const fetchUser = (id, authenticated) => {
  const endpoint = `users/${id}`;
  return {
    [CALL_API]: {
      types: [USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE],
      id,
      endpoint,
      method: "GET",
      authenticated
    }
  };
};

export const fetchUserFeed = (id, pageNo) => {
  const endpoint = `users/${id}/posts?page=${pageNo}`;
  return {
    [CALL_API]: {
      types: [
        USER_PROFILE_FEED_REQUEST,
        USER_PROFILE_FEED_SUCCESS,
        USER_PROFILE_FEED_FAILURE
      ],
      endpoint,
      method: "GET",
      pageNo
    }
  };
};

export const fetchUserMusic = (id, pageNo) => {
  const endpoint = `users/${id}/uploads/audio?page=${pageNo}`;
  return {
    [CALL_API]: {
      types: [
        FETCH_USER_MUSIC_REQUEST,
        FETCH_USER_MUSIC_SUCCESS,
        FETCH_USER_MUSIC_FAILURE
      ],
      endpoint,
      method: "GET",
      pageNo
    }
  };
};

export const fetchUserImages = (id, pageNo) => {
  const endpoint = `users/${id}/uploads/image?page=${pageNo}`;
  return {
    [CALL_API]: {
      types: [
        FETCH_USER_IMAGES_REQUEST,
        FETCH_USER_IMAGES_SUCCESS,
        FETCH_USER_IMAGES_FAILURE
      ],
      endpoint,
      method: "GET",
      pageNo
    }
  };
};
