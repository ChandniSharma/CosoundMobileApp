import { each, isNull } from "lodash";
import {
  API_URL,
  SET_TOKEN,
  POST_REQUEST,
  POST_FAILURE,
  POST_SUCCESS,
  REFACTOR_FEED,
  ADD_TO_MY_MUSIC,
  RESET_TEMP_FILE,
  ADD_TO_MY_IMAGES,
  REFACTOR_MY_MUSIC,
  REFACTOR_MY_IMAGE,
  REFACTOR_USER_FEED,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAILURE
} from "../constants";
import { feedActions, userFeedActions } from "./index";

import { getRefreshThreshold } from "../utils";

import { refreshToken } from "../services";

const API_BASE_URL = 'https://cosound.geekydev.com/backend/api';

const submitingPost = () => {
  return {
    type: POST_REQUEST
  };
};

const postFailure = error => {
  return {
    type: POST_FAILURE,
    error
  };
};

const postSuccess = data => {
  return {
    type: POST_SUCCESS,
    data
  };
};

let postPollInterval = null;

export const submit = (data, pathname) => {
  return (dispatch, getState) => {
    dispatch(submitingPost());
    const formData = new FormData();

    each(data, (value, key) => {
      if (key === "files") {
        each(value, item => {
          formData.append("files[]", item.file);
        });
      } else {
        formData.append([key], value);
      }
    });
    const endpoint = `${API_URL}posts`;
    const { token, expiresAt } = getState().user;

    const method = "POST";
    let headers = {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    };

    const refreshThreshold = getRefreshThreshold(expiresAt);

    const winnowResponse = response => {
      if (response.response) {
        const { data: error } = response.response;
        dispatch(postFailure(error));
        return false;
      } else {
        /* internet connection */
        if (response.message === "Network Error") {
          const error = { message: "Please check your internet connection" };
          dispatch(postFailure(error));
          return false;
        }
        return response;
      }
    };

    const responseHandler = response => {
      if (response.status >= 400) {
        response.json().then(error => {
          dispatch(postFailure(error));
        });
      } else {
        response.json().then(resp => {
          let mediaTypes = [];
          if (resp.data.media && !isNull(resp.data.media)) {
            mediaTypes = resp.data.media.map(item => {
              return item.file_type;
            });
          }

          if (pathname === "/profile") {
            dispatch(userFeedActions.fetchFeed(1)).then(() => {
             // dispatch(wowActions.sync());
            });

            dispatch(addToMediaList(resp.data, pathname));
          } else if (pathname === "/") {
            dispatch(feedActions.fetchFeed(1)).then(() => {
            //  dispatch(wowActions.sync());
            });
          }

          postPollInterval = setInterval(() => {
            dispatch(
              checkPostStatus(
                resp.data.id,
                pathname,
                mediaTypes,
                postPollInterval
              )
            );
          }, 5000);
          dispatch(postSuccess(resp));
        });
      }
    };

    if (refreshThreshold) {
      return refreshToken(token)
        .then(response => {
          response = winnowResponse(response);
          if (response && response.data) {
            dispatch({ type: SET_TOKEN, data: response.data });
            headers = {
              Accept: "application/json",
              Authorization: `Bearer ${response.data.token}`
            };
            return fetch(endpoint, {
              method,
              headers,
              body: formData
            })
              .then(result => {
                responseHandler(result);
              })
              .catch(err => {
                dispatch(postFailure(err));
              });
          }
        })
        .catch(e => {
          dispatch(postFailure(e));
        });
    }

    return fetch(endpoint, {
      method,
      headers,
      body: formData
    })
      .then(response => {
        responseHandler(response);
      })
      .catch(err => {
        dispatch(postFailure(err));
      });
  };
};

const addToMediaList = data => {
  return dispatch => {
    if (data && !isNull(data.media)) {
      data.media.map(source => {
        if (source) {
          switch (source.file_type) {
            case "image":
              dispatch(addToMyImages(source));
              break;
            case "audio":
              dispatch(addToMyMusic(source));
              break;
            default:
              break;
          }
        }
        return null;
      });
    }
  };
};

const addToMyImages = source => {
  return {
    type: ADD_TO_MY_IMAGES,
    source
  };
};

const fetchPostDetailsRequest = () => ({
    type: POST_DETAILS_REQUEST
});

const fetchPostDetailsSuccess = (data) => ({
    type: POST_DETAILS_SUCCESS,
    data: data
});

const fetchPostDetailsFailure = (errorMessage) => ({
    type: POST_DETAILS_FAILURE,
    error: errorMessage
});
  
export const checkPostStatus = (id, pathname, mediaTypes, interval) => {
  return (dispatch, getState) => {
    const endpoint = `${API_URL}posts/${id}/status`;
    const { token, expiresAt } = getState().user;
    const method = "GET";
    let headers = {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    };
    const refreshThreshold = getRefreshThreshold(expiresAt);
    const winnowResponse = response => {
      if (response.response) {
        clearInterval(interval);
      } else {
        /* internet connection */
        if (response.message === "Network Error") {
          clearInterval(interval);
        }
        return response;
      }
    };

    const responseHandler = response => {
      if (response.status >= 400) {
        response.json().then(error => {
          clearInterval(interval);
        });
      } else {
        response.json().then(resp => {
          if (resp.data) {
            clearInterval(interval);
            return dispatch(fetchPostDetails(id, pathname, mediaTypes));
          }

          return resp;
        });
      }
    };
    if (refreshThreshold) {
      return refreshToken(token)
        .then(response => {
          response = winnowResponse(response);
          if (response) {
            const { data } = response;

            if (data.token) {
              dispatch({ type: SET_TOKEN, data });
              headers = {
                Accept: "application/json",
                Authorization: `Bearer ${data.token}`
              };
              return fetch(endpoint, {
                method,
                headers
              })
                .then(response => {
                  responseHandler(response);
                })
                .catch(err => {
                  clearInterval(interval);
                });
            }
          }
        })
        .catch(e => {
          clearInterval(interval);
        });
    }
    return fetch(endpoint, { method, headers })
      .then(response => {
        responseHandler(response);
      })
      .catch(exception => {
        clearInterval(interval);
      });
  };
};

const fetchPostDetails = (id, pathname, mediaTypes) => {
  const endpoint = `posts/${id}`;
  let collateral = [];
  const conditionalCollateral = mediaTypes
    .map(item => {
      if (item === "image") {
        return REFACTOR_MY_IMAGE;
      } else if (item === "audio") {
        return REFACTOR_MY_MUSIC;
      } else {
        return null;
      }
    })
    .filter(o => o !== null);
  if (pathname === "/profile") {
    collateral = [REFACTOR_USER_FEED, ...conditionalCollateral];
  } else if (pathname === "/") {
    collateral = [REFACTOR_FEED];
  }
  return dispatch => {
    dispatch(fetchPostDetailsRequest());
    return axios
      .post(`${API_BASE_URL}/${endpoint}`, {})
      .then(res => {
        dispatch(fetchPostDetailsSuccess(res.data));
        return true;
      })
      .catch(err => {
        dispatch(fetchPostDetailsFailure(err.message));
        return false;
      });
  };
  
//   return {
//     [CALL_API]: {
//       types: [
//         POST_DETAILS_REQUEST,
//         POST_DETAILS_SUCCESS,
//         POST_DETAILS_FAILURE,
//         collateral
//       ],
//       id,
//       endpoint,
//       method: "GET",
//       authenticated: true
//     }
//   };
};

const addToMyMusic = source => {
  return {
    type: ADD_TO_MY_MUSIC,
    source
  };
};

export const resetTempFile = () => {
  return {
    type: RESET_TEMP_FILE
  };
};
