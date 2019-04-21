import moment from "moment";

import initialState from "./initialState";
import {
  SET_USER,
  SET_TOKEN,
  SET_USER_SOCIAL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE
} from "../constants";

export const userIS = initialState.user;

export const user = (state = initialState.user, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        error: {}
      });
    case USER_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.data,
        isRequesting: false,
        error: {}
      });
    case USER_DETAILS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: action.data.token,
        expiresAt: action.data.expires_at,
        get_stream_token: action.data.get_stream_token
          ? action.data.get_stream_token
          : state.get_stream_token
      });
    case SET_USER:
      return Object.assign({}, state, { data: action.data.data });
    // eslint-disable-next-line
    case SET_USER_SOCIAL:
      const { expiresIn: expiresAt, searchToken: token } = action;
      if (expiresAt && token) {
        const data = Object.assign({}, action.data, {
          token,
          expiresAt
        });
        return Object.assign({}, state, data);
      }
      return state;
    default:
      return state;
  }
};

// export const user = (state = initialState.user, action) => {
//   switch (action.type) {
//     // eslint-disable-next-line
//     case SET_USER:
//       if (
//         !isNull(action.interval) &&
//         !isNull(action.data.data.thumbnail) &&
//         action.data.data.thumbnail !== state.data.thumbnail
//       ) {
//         clearInterval(action.interval);
//       }
//       return Object.assign({}, state, action.data);

//     // eslint-disable-next-line
//

//     default:
//       return state;
// };
