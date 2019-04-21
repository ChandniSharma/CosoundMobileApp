import initialState from "./initialState";
import { SET_TEMPORARY_FILE, RESET_TEMP_FILE } from "../constants";

export default function reducer(state = initialState.tempFile, action) {
  switch (action.type) {
    case SET_TEMPORARY_FILE:
      return Object.assign({}, state, {
        file: action.file
      });
    case RESET_TEMP_FILE:
      return Object.assign({}, initialState.tempFile);
    default:
      return state;
  }
}
