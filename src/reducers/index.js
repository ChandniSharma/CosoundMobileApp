/* eslint-disable */
import { combineReducers } from "redux";

import {
  notifications,
  notificationCount,
  notificationReset
} from "./notifications";
import {
  like,
  repost,
  deletePost,
  postComment,
  fetchComment,
  deleteComment,
  dedicatedPost
} from "./post";
import {
  userMusic,
  userImages,
  userProfile,
  userProfileFeed
} from "./userProfile";
import {
  services,
  categories,
  placeOrder,
  headerCategories,
  featuredServices,
  headerCategoriesIS
} from "./marketplace";
import {
  publishService,
  offeredServices,
  purchasedServices
} from "./userService";
import {
  users,
  toggleAccess,
  serviceDetail,
  serviceDelete,
  activeServices,
  serviceApprove,
  pendingServices,
  marketplaceActiveTab
} from "./admin";
import wow from "./wow";
import feed from "./feed";
import genres from "./genres";
import follow from "./follow";
import enrich from "./enrich";
import myMusic from "./myMusic";
import myImages from "./myImages";
import userFeed from "./userFeed";
import tempFile from "./tempFile";
import searchResults from "./search";
import { user, userIS } from "./user";
import suggestions from "./suggestions";
import { service, reviews } from "./service";
import socialUserData from "./socialUserData";
import { login, signup, logout } from "./auth";
import { postStatus, postDetails } from "./postStatus";
import { cardDetails, paymentDetails } from "./payment";
import { contactInfo, details, profilePic } from "./updateUser";
import { addToCart, cart, removeFromCart, cartCount } from "./cart";
import { forgotPassword, resetPassword, changePassword } from "./password";

import { USER_LOGOUT } from "../constants";

const adminReducer = {
  users,
  toggleAccess,
  serviceDetail,
  serviceDelete,
  activeServices,
  serviceApprove,
  pendingServices,
  marketplaceActiveTab
};

const appReducer = combineReducers({
  wow,
  user,
  like,
  feed,
  cart,
  login,
  repost,
  enrich,
  genres,
  signup,
  follow,
  logout,
  details,
  service,
  myMusic,
  reviews,
  services,
  myImages,
  userFeed,
  addToCart,
  tempFile,
  userMusic,
  cartCount,
  placeOrder,
  userImages,
  categories,
  deletePost,
  postStatus,
  profilePic,
  userProfile,
  suggestions,
  postDetails,
  contactInfo,
  postComment,
  cardDetails,
  fetchComment,
  notifications,
  dedicatedPost,
  deleteComment,
  searchResults,
  resetPassword,
  paymentDetails,
  removeFromCart,
  publishService,
  changePassword,
  socialUserData,
  forgotPassword,
  ...adminReducer,
  userProfileFeed,
  offeredServices,
  featuredServices,
  headerCategories,
  purchasedServices,
  notificationReset,
  notificationCount
});

// Root reducer, filter logout, and intialiases states
const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    return {
      ...state,
      user: userIS,
      headerCategories: headerCategoriesIS
    };
  }

  return appReducer(state, action);
};

export default rootReducer;
