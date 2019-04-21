import initialState from "./initialState";
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  RESET_SEARCH_STATE
} from "../constants";

export default function reducer(state = initialState.searchResults, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return Object.assign({}, state, {
        type: action.searchType,
        isRequesting: true,
        data: [],
        error: {}
      });
    case SEARCH_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case SEARCH_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    case RESET_SEARCH_STATE:
      return Object.assign({}, initialState.searchResults);
    default:
      return state;
  }
}
