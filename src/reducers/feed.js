/* eslint-disable */
import { isEmpty } from "lodash";
import initialState from "./initialState";
import {
  FEED_REQUEST,
  FEED_SUCCESS,
  FEED_FAILURE,
  REFACTOR_FEED,
  RESET_UNREAD_COUNT,
  ADD_TO_FEED_ON_ENRICH,
  INCREMENT_UNREAD_COUNT,
  REFACTOR_FEED_LIKED_POST,
  INCREMENT_COMMENT_COUNT_FEED,
  DECREMENT_COMMENT_COUNT_FEED
} from "../constants";

export default function reducer(state = initialState.feed, action) {
  switch (action.type) {
    case FEED_REQUEST:
      return Object.assign({}, state, {
        data: action.pageNo === 1 ? [] : state.data,
        isRequesting: true,
        error: {}
      });
    case FEED_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, ...action.data.data],
        paginationData: {
          page: action.pageNo,
          callApi:
            !isEmpty(action.data.data) && action.data.count === 20
              ? true
              : false
        },
        isRequesting: false,
        error: {}
      });
    case FEED_FAILURE:
      return Object.assign({}, state, {
        paginationData: Object.assign({}, state.paginationData, {
          callApi: false
        }),
        error: action.error,
        isRequesting: false
      });
    case REFACTOR_FEED_LIKED_POST:
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

    case DECREMENT_COMMENT_COUNT_FEED:
      const decrementCommentCount = state.data.map(item => {
        if (item.id === action.postId) {
          item.comment_count = item.comment_count - 1;
          return item;
        } else {
          return item;
        }
      });
      return Object.assign({}, state, { data: decrementCommentCount });

    case INCREMENT_COMMENT_COUNT_FEED:
      const refactorCommentCount = state.data.map(item => {
        if (item.id === action.id) {
          item.comment_count = item.comment_count + 1;
          return item;
        } else {
          return item;
        }
      });
      return Object.assign({}, state, { data: refactorCommentCount });
    case REFACTOR_FEED:
      return Object.assign({}, state, {
        data: state.data.map(item => {
          if (item.id === action.id) {
            return action.data.data;
          } else {
            return item;
          }
        })
      });

    case INCREMENT_UNREAD_COUNT:
      return Object.assign({}, state, {
        unReadFeedCount: state.unReadFeedCount + 1
      });
    case RESET_UNREAD_COUNT:
      return Object.assign({}, state, { unReadFeedCount: 0 });

    case ADD_TO_FEED_ON_ENRICH:
      const feedData = state.data;
      const feedDataLength = feedData.length;
      let newFeedData = [];
      if (newFeedData === 20) {
        newFeedData = [
          ...action.data.data,
          ...feedData.slice(0, feedDataLength - 1)
        ];
      } else {
        newFeedData = [...action.data.data, ...feedData];
      }
      return Object.assign({}, state, { data: newFeedData });
    default:
      return state;
  }
}
