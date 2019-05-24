/* eslint-disable */
import { WOW } from "wowjs";

export const initWow = () => {
  const wow = new WOW();
  wow.init();
  return wow;
};

export const syncWow = wow => {
  if (wow) {
    wow.sync();
  }
};

export const performWow = wowActions => {
  try {
    wowActions.sync();
  } catch (e) {
  //  wowActions.initialize();
  }
};
