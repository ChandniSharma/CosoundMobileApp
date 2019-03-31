import { combineReducers } from "redux";
import { login, signup, logout } from "./auth";

const appReducer = combineReducers({
	login,
	signup,
	logout
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;