import initialState from "./initialState";
import { FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE } from "../constants";

export default function reducer(state = initialState.follow, action) {
  switch (action.type) {
    case FOLLOW_REQUEST:
      return Object.assign({}, state, {
        isFollowing: action.id,
        data: {},
        error: {}
      });
    case FOLLOW_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isFollowing: false,
        error: {}
      });
    case FOLLOW_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isFollowing: false
      });
    default:
      return state;
  }
}
