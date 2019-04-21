import {
  LIKE_POST,
  LIKE_REQUEST,
  LIKE_FAILURE,
  LIKE_SUCCESS,
  REPOST_REQUEST,
  REPOST_SUCCESS,
  REPOST_FAILURE,
  REFACTOR_LIKED_POST,
  REMOVE_FROM_COMMENTS,
  POST_COMMENT_REQUEST,
  POST_COMMENT_FAILURE,
  POST_COMMENT_SUCCESS,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  DEDICATED_POST_REQUEST,
  DEDICATED_POST_SUCCESS,
  DEDICATED_POST_FAILURE,
  REFACTOR_FEED_LIKED_POST,
  ADD_COMMENT_TO_USER_POST,
  DELETE_USER_FEED_REQUEST,
  DELETE_USER_FEED_SUCCESS,
  DELETE_USER_FEED_FAILURE,
  REFACTOR_LIKED_PROFILE_POST,
  DECREMENT_COMMENT_COUNT_FEED,
  INCREMENT_COMMENT_COUNT_FEED,
  INCREMENT_COMMENT_COUNT_POST,
  DECREMENT_COMMENT_COUNT_POST,
  INCREMENT_COMMENT_COUNT_USER_POST,
  DECREMENT_COMMENT_COUNT_USER_POST,
  INCREMENT_COMMENT_COUNT_USER_PROFILE_POST,
  DECREMENT_COMMENT_COUNT_USER_PROFILE_POST
} from "../constants";
import { CALL_API } from "../middlewares/api";

export const fetchDedicatedPost = (id, authenticated) => {
  const endpoint = `posts/${id}`;
  return {
    [CALL_API]: {
      types: [
        DEDICATED_POST_REQUEST,
        DEDICATED_POST_SUCCESS,
        DEDICATED_POST_FAILURE
      ],
      id,
      endpoint,
      method: "GET",
      authenticated
    }
  };
};

export const likePost = (id, pathname) => {
  const endpoint = `posts/${id}/like`;
  let collateral = [];
  if (pathname === "/profile") {
    collateral = [REFACTOR_LIKED_POST];
  } else if (pathname === "/") {
    collateral = [REFACTOR_FEED_LIKED_POST];
  } else if (pathname === "/posts/:id") {
    collateral = [LIKE_POST];
  } else if (pathname === "/profile/:id") {
    collateral = [REFACTOR_LIKED_PROFILE_POST];
  }
  return {
    [CALL_API]: {
      types: [LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE, collateral],
      endpoint,
      method: "POST",
      authenticated: true,
      id
    }
  };
};

export const postComment = (data, id, pathname) => {
  const endpoint = `posts/${id}/comments`;
  let collateral = [];
  if (pathname === "/profile") {
    collateral = [INCREMENT_COMMENT_COUNT_USER_POST, ADD_COMMENT_TO_USER_POST];
  } else if (pathname === "/") {
    collateral = [INCREMENT_COMMENT_COUNT_FEED, ADD_COMMENT_TO_USER_POST];
  } else if (pathname === "/posts/:id") {
    collateral = [INCREMENT_COMMENT_COUNT_POST, ADD_COMMENT_TO_USER_POST];
  } else if (pathname === "/profile/:id") {
    collateral = [
      INCREMENT_COMMENT_COUNT_USER_PROFILE_POST,
      ADD_COMMENT_TO_USER_POST
    ];
  }
  return {
    [CALL_API]: {
      types: [
        POST_COMMENT_REQUEST,
        POST_COMMENT_SUCCESS,
        POST_COMMENT_FAILURE,
        collateral
      ],
      endpoint,
      method: "POST",
      authenticated: true,
      data,
      id
    }
  };
};

export const fetchComments = (id, pageNo) => {
  const endpoint = `posts/${id}/comments?page=${pageNo}`;
  return {
    [CALL_API]: {
      types: [
        FETCH_COMMENT_REQUEST,
        FETCH_COMMENT_SUCCESS,
        FETCH_COMMENT_FAILURE
      ],
      endpoint,
      method: "GET",
      authenticated: true,
      id,
      pageNo
    }
  };
};

export const deleteComment = (postId, id, minId, pathname) => {
  const endpoint = `posts/${postId}/comments/${id}`;
  let collateral = [];
  if (pathname === "/profile") {
    collateral = [DECREMENT_COMMENT_COUNT_USER_POST, REMOVE_FROM_COMMENTS];
  } else if (pathname === "/") {
    collateral = [DECREMENT_COMMENT_COUNT_FEED, REMOVE_FROM_COMMENTS];
  } else if (pathname === "/posts/:id") {
    collateral = [DECREMENT_COMMENT_COUNT_POST, REMOVE_FROM_COMMENTS];
  } else if (pathname === "/profile/:id") {
    collateral = [
      DECREMENT_COMMENT_COUNT_USER_PROFILE_POST,
      REMOVE_FROM_COMMENTS
    ];
  }
  return {
    [CALL_API]: {
      types: [
        DELETE_COMMENT_REQUEST,
        DELETE_COMMENT_SUCCESS,
        DELETE_COMMENT_FAILURE,
        collateral
      ],
      endpoint,
      method: "DELETE",
      authenticated: true,
      data: { minId },
      id,
      postId
    }
  };
};

export const deletePost = id => {
  const endpoint = `posts/${id}`;
  return {
    [CALL_API]: {
      types: [
        DELETE_USER_FEED_REQUEST,
        DELETE_USER_FEED_SUCCESS,
        DELETE_USER_FEED_FAILURE
      ],
      endpoint,
      method: "DELETE",
      authenticated: true,
      id
    }
  };
};

export const repost = id => {
  const endpoint = `posts/${id}/repost`;
  return {
    [CALL_API]: {
      types: [REPOST_REQUEST, REPOST_SUCCESS, REPOST_FAILURE],
      endpoint,
      method: "POST",
      authenticated: true,
      id
    }
  };
};
