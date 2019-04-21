import initialState from "./initialState";
import {
  RESET_SUGGESTIONS,
  SUGGESTIONS_REQUEST,
  SUGGESTIONS_SUCCESS,
  SUGGESTIONS_FAILURE,
  REFACTOR_SUGGESTIONS
} from "../constants";

export default function reducer(state = initialState.suggestions, action) {
  switch (action.type) {
    case SUGGESTIONS_REQUEST:
      return Object.assign({}, state, {
        data: action.pageNo === 1 ? [] : state.data,
        isRequesting: true,
        error: {}
      });
    case SUGGESTIONS_SUCCESS:
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
    case SUGGESTIONS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isRequesting: false
      });
    case REFACTOR_SUGGESTIONS:
      return Object.assign({}, state, {
        data: state.data.map(item => {
          if (item.id === action.id) {
            item.isFollowed = !item.isFollowed;
            return item;
          } else {
            return item;
          }
        })
      });
    default:
      return state;
  }
}
