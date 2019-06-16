import initialState from "./initialState";
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../constants";

export default function reducer(state = initialState.signup, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      console.log("call 7 line no isrequesting");
      return Object.assign({}, state, {
        isRequesting: true,
        data: {},
        error: {}
      });
    case SIGNUP_SUCCESS:
      console.log("success action==",action)
      return Object.assign({}, state, {
        data: action.data,
        isRequesting: false,
        error: {}
      });
    case SIGNUP_FAILURE:
      console.log("fail action===",action)
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    default:
      return state;
  }
}
