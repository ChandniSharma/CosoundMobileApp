import { isNull } from "lodash";
import initialState from "./initialState";
import {
  ADD_TO_MY_IMAGES,
  REFACTOR_MY_IMAGE,
  FETCH_MY_IMAGES_REQUEST,
  FETCH_MY_IMAGES_SUCCESS,
  FETCH_MY_IMAGES_FAILURE
} from "../constants";

export default function reducer(state = initialState.myImages, action) {
  switch (action.type) {
    case FETCH_MY_IMAGES_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true,
        data: action.pageNo === 1 ? [] : state.data,
        error: {}
      });
    case FETCH_MY_IMAGES_SUCCESS:
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
    case FETCH_MY_IMAGES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    // eslint-disable-next-line
    case ADD_TO_MY_IMAGES:
      const myImages = state.data;
      const noOfImages = myImages.length;
      let newMyImages = [];
      if (noOfImages === 4) {
        newMyImages = [action.source, ...myImages.slice(0, noOfImages - 1)];
      } else {
        newMyImages = [action.source, ...myImages];
      }
      return Object.assign({}, state, { data: newMyImages });
    // eslint-disable-next-line
    case REFACTOR_MY_IMAGE:
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
