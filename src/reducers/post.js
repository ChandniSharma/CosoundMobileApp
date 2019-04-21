import initialState from "./initialState";
import {
  LIKE_POST,
  LIKE_REQUEST,
  LIKE_FAILURE,
  LIKE_SUCCESS,
  REPOST_REQUEST,
  REPOST_SUCCESS,
  REPOST_FAILURE,
  REMOVE_FROM_COMMENTS,
  POST_COMMENT_REQUEST,
  POST_COMMENT_FAILURE,
  POST_COMMENT_SUCCESS,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE,
  DEDICATED_POST_SUCCESS,
  DEDICATED_POST_FAILURE,
  DEDICATED_POST_REQUEST,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  DELETE_USER_FEED_REQUEST,
  DELETE_USER_FEED_SUCCESS,
  DELETE_USER_FEED_FAILURE,
  ADD_COMMENT_TO_USER_POST,
  INCREMENT_COMMENT_COUNT_POST,
  DECREMENT_COMMENT_COUNT_POST
} from "../constants";

export const dedicatedPost = (state = initialState.dedicatedPost, action) => {
  switch (action.type) {
    case DEDICATED_POST_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        data: {},
        error: {}
      });
    case DEDICATED_POST_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case DEDICATED_POST_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    case INCREMENT_COMMENT_COUNT_POST:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          comment_count: state.data.comment_count + 1
        })
      });
    case DECREMENT_COMMENT_COUNT_POST:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          comment_count: state.data.comment_count - 1
        })
      });
    case LIKE_POST:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          like_count: action.data.data.like_count,
          isLiked: action.data.data.isLiked
        })
      });
    default:
      return state;
  }
};

export const like = (state = initialState.like, action) => {
  switch (action.type) {
    case LIKE_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        data: {},
        error: {}
      });
    case LIKE_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case LIKE_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const postComment = (state = initialState.postComment, action) => {
  switch (action.type) {
    case POST_COMMENT_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        data: {},
        error: {}
      });
    case POST_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case POST_COMMENT_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const fetchComment = (state = initialState.fetchComment, action) => {
  switch (action.type) {
    case FETCH_COMMENT_REQUEST:
      return Object.assign({}, state, {
        postId: action.id,
        isRequesting: action.id,
        data: action.pageNo === 1 ? [] : state.data,
        error: {}
      });
    case FETCH_COMMENT_SUCCESS:
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
    case FETCH_COMMENT_FAILURE:
      return Object.assign({}, state, {
        postId: null,
        error: action.error,
        data: [],
        isRequesting: false
      });
    case ADD_COMMENT_TO_USER_POST:
      return Object.assign({}, state, {
        postId: action.id,
        data: [...action.data.data],
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
    case REMOVE_FROM_COMMENTS:
      if (typeof action.data.data === "object") {
        return Object.assign({}, state, {
          data: [
            ...state.data.filter(o => o.id !== action.id),
            action.data.data
          ]
        });
      } else if (typeof action.data.data === "boolean" && action.data.data) {
        return Object.assign({}, state, {
          data: state.data.filter(o => o.id !== action.id)
        });
      }
      return state;
    default:
      return state;
  }
};

export const deleteComment = (state = initialState.deleteComment, action) => {
  switch (action.type) {
    case DELETE_COMMENT_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        data: {},
        error: {}
      });
    case DELETE_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case DELETE_COMMENT_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });

    default:
      return state;
  }
};

export const deletePost = (state = initialState.deletePost, action) => {
  switch (action.type) {
    case DELETE_USER_FEED_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        data: {},
        error: {}
      });
    case DELETE_USER_FEED_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case DELETE_USER_FEED_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};

export const repost = (state = initialState.repost, action) => {
  switch (action.type) {
    case REPOST_REQUEST:
      return Object.assign({}, state, {
        isRequesting: action.id,
        data: {},
        error: {}
      });
    case REPOST_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case REPOST_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
};
