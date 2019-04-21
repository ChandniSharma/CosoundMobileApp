import { isNull } from "lodash";

import initialState from "./initialState";
import {
  FETCH_MY_MUSIC_REQUEST,
  FETCH_MY_MUSIC_SUCCESS,
  FETCH_MY_MUSIC_FAILURE,
  ADD_TO_MY_MUSIC,
  REFACTOR_MY_MUSIC
} from "../constants";

export default function reducer(state = initialState.myMusic, action) {
  switch (action.type) {
    case FETCH_MY_MUSIC_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: action.pageNo === 1 ? [] : state.data,
        error: {}
      });
    case FETCH_MY_MUSIC_SUCCESS:
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
    case FETCH_MY_MUSIC_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    // eslint-disable-next-line
    case ADD_TO_MY_MUSIC:
      const myMusic = state.data;
      const noOfMusic = myMusic.length;
      let newMyMusic = [];
      if (noOfMusic === 4) {
        newMyMusic = [action.source, ...myMusic.slice(0, noOfMusic - 1)];
      } else {
        newMyMusic = [action.source, ...myMusic];
      }
      return Object.assign({}, state, { data: newMyMusic });
    // eslint-disable-next-line
    case REFACTOR_MY_MUSIC:
      const post = action.data.data;
      const media = post && post.media[0] ? post.media[0] : null;

      if (!isNull(media)) {
        return Object.assign({}, state, {
          data: state.data.map(item => {
            if (item.id === media.id) {
              return media;
            } else {
              return item;
            }
          })
        });
      }
      break;
    default:
      return state;
  }
}
