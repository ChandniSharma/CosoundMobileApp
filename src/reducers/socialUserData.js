import { rot13 } from "../utils";

import initialState from "./initialState";
import { SET_SOCIAL_USER_DATA, RESET_SOCIAL_DATA } from "../constants";

export default function reducer(state = initialState.socialUserData, action) {
  switch (action.type) {
    case SET_SOCIAL_USER_DATA:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          email: rot13(action.data.email),
          first_name: rot13(action.data.first_name),
          last_name: rot13(action.data.last_name)
        })
      });
    case RESET_SOCIAL_DATA:
      return Object.assign({}, initialState.socialUserData);
    default:
      return state;
  }
}
