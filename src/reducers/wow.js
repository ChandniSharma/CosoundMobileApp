import initialState from "./initialState";
import { INITIALIZE_WOW, SYNC_WOW } from "../constants";
import { initWow, syncWow } from "../utils";

export default function reducer(state = initialState.wow, action) {
  switch (action.type) {
    case INITIALIZE_WOW:
      return Object.assign({}, state, {
        wow: initWow()
      });
    case SYNC_WOW:
      syncWow(action.wow);
      return state;

    default:
      return state;
  }
}
