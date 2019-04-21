import initialState from "./initialState";
import { GENRES_REQUEST, GENRES_SUCCESS, GENRES_FAILURE } from "../constants";

export default function reducer(state = initialState.genres, action) {
  switch (action.type) {
    case GENRES_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case GENRES_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case GENRES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
}
