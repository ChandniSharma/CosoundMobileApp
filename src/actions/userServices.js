import { each } from "lodash";
import { CALL_API } from "../middlewares/api";

import {
  PUBLISH_SERVICE_REQUEST,
  PUBLISH_SERVICE_SUCCESS,
  PUBLISH_SERVICE_FAILURE,
  OFFERED_SERVICE_REQUEST,
  OFFERED_SERVICE_SUCCESS,
  OFFERED_SERVICE_FAILURE,
  PURCHASED_SERVICE_REQUEST,
  PURCHASED_SERVICE_SUCCESS,
  PURCHASED_SERVICE_FAILURE
} from "../constants";

/**
 * Publish Service
 *
 * @param formData data
 */
export const publishService = data => {
  /* FormData construct */
  const formData = new FormData();
  each(data, (value, key) => {
    if (key === "featured_images") {
      each(value, item => {

        let id = `${new Date().getTime()}${Math.random()}`;
        let type = "image";
        let filename = id+'.png';
        let uri = item.replace("file://", "");
       
        formData.append("featured_images[]", {
          name: filename,
          type: type,
          uri: uri
        });
  
        // formData.append("featured_images[]", {
        //   name: item.fileName,
        //   type: item.type,
        //   uri: item.uri.replace("file://", "")
        // });
      });
    } else {
      if(key === "image"){
        let id = `${new Date().getTime()}${Math.random()}`;
        let type = "image";
        let filename = id+'.png';
        let uri = value.replace("file://", "");
       
        formData.append([key], {
          name: filename,
          type: type,
          uri: uri
        });
  
        // formData.append([key], {
        //   name: value.fileName,
        //   type: value.type,
        //   uri: value.uri.replace("file://", "")
        // });
      }else{
        formData.append([key], value);
      }
      
    }
  });
  /* FormData construct */

  const endpoint = "marketplace/services";
  return {
    [CALL_API]: {
      types: [
        PUBLISH_SERVICE_REQUEST,
        PUBLISH_SERVICE_SUCCESS,
        PUBLISH_SERVICE_FAILURE
      ],
      data: formData,
      endpoint,
      method: "POST",
      authenticated: true,
      formData: true
    }
  };
};

export const offeredServices = (pageNo, sort) => {
  const endpoint = `marketplace/services/offered?page=${pageNo}&order=${sort}`;
  return {
    [CALL_API]: {
      types: [
        OFFERED_SERVICE_REQUEST,
        OFFERED_SERVICE_SUCCESS,
        OFFERED_SERVICE_FAILURE
      ],
      endpoint,
      method: "GET",
      authenticated: true,
      pageNo,
      sort
    }
  };
};

export const purchasedServices = (pageNo, sort) => {
  const endpoint = `marketplace/services/purchased?page=${pageNo}&order=${sort}`;
  return {
    [CALL_API]: {
      types: [
        PURCHASED_SERVICE_REQUEST,
        PURCHASED_SERVICE_SUCCESS,
        PURCHASED_SERVICE_FAILURE
      ],
      endpoint,
      method: "GET",
      authenticated: true,
      pageNo,
      sort
    }
  };
};
