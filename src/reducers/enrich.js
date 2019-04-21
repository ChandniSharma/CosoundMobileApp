import initialState from "./initialState";
import {
  FEED_ENRICH_REQUEST,
  FEED_ENRICH_SUCCESS,
  FEED_ENRICH_FAILURE
} from "../constants";

export default function reducer(state = initialState.enrich, action) {
  switch (action.type) {
    case FEED_ENRICH_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case FEED_ENRICH_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case FEED_ENRICH_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
}
