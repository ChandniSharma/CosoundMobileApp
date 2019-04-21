/* eslint-disable */
import initialState from "./initialState";
import {
  USER_FEED_REQUEST,
  USER_FEED_SUCCESS,
  USER_FEED_FAILURE,
  REFACTOR_USER_FEED,
  REFACTOR_LIKED_POST,
  INCREMENT_COMMENT_COUNT_USER_POST,
  DECREMENT_COMMENT_COUNT_USER_POST
} from "../constants";

export default function reducer(state = initialState.userFeed, action) {
  switch (action.type) {
    case USER_FEED_REQUEST:
      return Object.assign({}, state, {
        data: action.pageNo === 1 ? [] : state.data,
        isRequesting: true,
        error: {}
      });
    case USER_FEED_SUCCESS:
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
    case USER_FEED_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    case REFACTOR_LIKED_POST:
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
    case INCREMENT_COMMENT_COUNT_USER_POST:
      const refactorCommentCount = state.data.map(item => {
        if (item.id === action.id) {
          item.comment_count = item.comment_count + 1;
          return item;
        } else {
          return item;
        }
      });
      return Object.assign({}, state, { data: refactorCommentCount });

    case DECREMENT_COMMENT_COUNT_USER_POST:
      const decrementCommentCount = state.data.map(item => {
        if (item.id === action.postId) {
          item.comment_count = item.comment_count - 1;
          return item;
        } else {
          return item;
        }
      });
      return Object.assign({}, state, { data: decrementCommentCount });

    case REFACTOR_USER_FEED:
      return Object.assign({}, state, {
        data: state.data.map(item => {
          if (item.id === action.id) {
            return action.data.data;
          } else {
            return item;
          }
        })
      });

    default:
      return state;
  }
}
