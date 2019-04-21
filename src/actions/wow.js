import { isNull } from "lodash";
import { INITIALIZE_WOW, SYNC_WOW } from "../constants";

export const initialize = () => {
  return {
    type: INITIALIZE_WOW
  };
};

export const sync = () => {
  return (dispatch, getState) => {
    const wow = getState().wow.wow;
    return dispatch(syncWow(wow));
  };
};

const syncWow = wow => {
  return { type: SYNC_WOW, wow };
};
