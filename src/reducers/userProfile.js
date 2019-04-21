/* eslint-disable */
import initialState from "./initialState";
import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  USER_PROFILE_FEED_REQUEST,
  USER_PROFILE_FEED_SUCCESS,
  USER_PROFILE_FEED_FAILURE,
  FETCH_USER_MUSIC_SUCCESS,
  FETCH_USER_MUSIC_FAILURE,
  FETCH_USER_MUSIC_REQUEST,
  FETCH_USER_IMAGES_SUCCESS,
  FETCH_USER_IMAGES_FAILURE,
  FETCH_USER_IMAGES_REQUEST,
  REFACTOR_LIKED_PROFILE_POST,
  INCREMENT_COMMENT_COUNT_USER_PROFILE_POST,
  DECREMENT_COMMENT_COUNT_USER_PROFILE_POST
} from "../constants";

export const userProfile = (state = initialState.userProfile, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        error: {}
      });
    case USER_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case USER_PROFILE_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const userImages = (state = initialState.userImages, action) => {
  switch (action.type) {
    case FETCH_USER_IMAGES_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: action.pageNo === 1 ? [] : state.data,
        error: {}
      });
    case FETCH_USER_IMAGES_SUCCESS:
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
    case FETCH_USER_IMAGES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const userMusic = (state = initialState.userMusic, action) => {
  switch (action.type) {
    case FETCH_USER_MUSIC_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: action.pageNo === 1 ? [] : state.data,
        error: {}
      });
    case FETCH_USER_MUSIC_SUCCESS:
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
    case FETCH_USER_MUSIC_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const userProfileFeed = (
  state = initialState.userProfileFeed,
  action
) => {
  switch (action.type) {
    case USER_PROFILE_FEED_REQUEST:
      return Object.assign({}, state, {
        data: action.pageNo === 1 ? [] : state.data,
        isRequesting: true,
        error: {}
      });
    case USER_PROFILE_FEED_SUCCESS:
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
    case USER_PROFILE_FEED_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    case REFACTOR_LIKED_PROFILE_POST:
      const refactorData = state.data.map(item => {
        if (item.id === action.data.data.id) {
          item.like_count = action.data.data.like_count;
          item.isLiked = action.data.data.isLiked;
          return item;
        } else {
          return item;
        }
      });
      return Object.assign({}, state, { data: refactorData });
    case INCREMENT_COMMENT_COUNT_USER_PROFILE_POST:
      const refactorCommentCount = state.data.map(item => {
        if (item.id === action.id) {
          item.comment_count = item.comment_count + 1;
          return item;
        } else {
          return item;
        }
      });
      return Object.assign({}, state, { data: refactorCommentCount });

    case DECREMENT_COMMENT_COUNT_USER_PROFILE_POST:
      const decrementCommentCount = state.data.map(item => {
        if (item.id === action.postId) {
          item.comment_count = item.comment_count - 1;
          return item;
        } else {
          return item;
        }
      });
      return Object.assign({}, state, { data: decrementCommentCount });

    default:
      return state;
  }
};
