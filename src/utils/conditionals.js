/* eslint-disable */
import { isNull, isEmpty, each } from "lodash";
//import { toast } from "react-toastify";

//import { bgRequiredDomains } from "../constants/pathConstants";

import { jsUcfirst } from "./index";

import * as avatar from "../assets/avatar1.jpg";


const getThumbnail = data => {

  console.log(" in image func ====", data);
  return !isEmpty(data) && data.thumbnail && !isNull(data.thumbnail)
    ? data.thumbnail
    : !isEmpty(data) && data.avatar && !isNull(data.avatar)
    ? data.avatar
    : `https://ui-avatars.com/api/?name=${data.first_name ?data.first_name : ''}+${data.last_name ? data.last_name : ''}`;
};

const getImageThumbnail = item => {
  return !isNull(item.metadata) && !isNull(item.metadata.thumbnail_small)
    ? item.metadata.thumbnail_small
    : item.path;
};

const getUsername = data => {
  return `${data.first_name ? data.first_name : ""} ${
    data.last_name && !isNull(data.last_name) ? data.last_name : ""
  }`;
};

const getUserInfo = data => {
  return data.type ? `${data.type} / ${data.artist_name}` : "";
};

const getPost = post => {
  return !isEmpty(post.parent) ? post.parent : post;
};

const getPathname = (location, match) => {
  return match && match.path ? match.path : location.pathname;
};

const checkError = error => {
  return !isEmpty(error) && error.message ? error : false;
};

const checkAuth = user => {
  if (isNull(user.token)) {
   // toast.error("Log in to continue");
    return false;
  }
  return true;
};

const getTrackName = (index, metadata) => {
  return `${index + 1}. ${
    !isNull(metadata) && metadata.title ? metadata.title : ""
  }`;
};

const enterPressed = e => {
  return e.nativeEvent.key == "Enter";
};

const formatPhoneNumbers = phoneNumbers => {
  console.log(" phone n0 ******", phoneNumbers);
  return !isNull(phoneNumbers) && phoneNumbers.length > 0
    ? phoneNumbers.map(item => {
        let newItem = { label: "", value: "" };
        newItem.label = item;
        newItem.value = item;
        return newItem;
      })
    : [{label: "", value: ""}];
};

const formatLinks = (socialLinks, remainingArray) => {
  return [
    ...socialLinks.map((item, index) => {
      let newItem = { id: "", value: "", isVisible: false, isReady: false };
      newItem.value = item;
      newItem.id = index + 1;
      newItem.isVisible = true;
      newItem.isReady = true;
      return newItem;
    }),
    ...remainingArray
  ];
};

const getRemainingArray = (total, len) => {
  const remainingRows = total - len;
  let remainingArray = [];

  for (let i = remainingRows; i > 0; i--) {
    remainingArray = [
      ...remainingArray,
      {
        id: total + 1 - i,
        isVisible: i === remainingRows,
        isReady: false,
        value: ""
      }
    ];
  }

  return remainingArray;
};

const formatLinksSelect = (socialLinks, id) => {
  return socialLinks.map(item => {
    if (item.id === id) {
      item.isReady = true;
      return item;
    } else if (item.id === id + 1) {
      item.isVisible = true;
      return item;
    } else {
      return item;
    }
  });
};

const formatLinksState = (socialLinks, id, value) => {
  return socialLinks.map(item => {
    if (item.id === id) {
      item.value = value;
      return item;
    } else {
      return item;
    }
  });
};

const headerCondition = (pathname, domains) => {
  return pathname ? domains.includes(pathname) : false;
};

const includesPath = (pathname, domains) => {
  let cond = false;
  domains.map(item => {
    if (pathname.includes(item)) {
      cond = true;
    }
  });
  return cond;
};

const bgRequired = pathname => {
  let required = false;
  // each(bgRequiredDomains, item => {
  //   if (item.type === "equal" && pathname === item.path) {
  //     required = true;
  //     return false;
  //   }
  //   if (item.type === "includes" && pathname.includes(item.path)) {
  //     required = true;
  //     return false;
  //   }
  // });
  return required;
};

const getCurrentTab = (item, pathname) => {
  return pathname === item.route || pathname === item.optionalRoute;
};

const getCurrentCategory = (data, slug) => {
  const activePath = "graphic-design";
  let current = { label: "Graphic Design", slug: null };
  let currentArr = [];

  if (!isEmpty(data)) {
    if (!slug) {
      currentArr = data.filter(item => item.slug === activePath);
    } else {
      currentArr = data.filter(item => item.slug === slug);
    }
  }
  if (currentArr && currentArr[0]) {
    current = currentArr[0];
  }
  return current;
};

const getCategoryId = (data, params) => {
  let slug = "graphic-design";
  let categoryId = null;
  console.log(" Data ******", data,"and Prams" ,params);
  if (!isEmpty(data)) {
    if (isEmpty(params) || !params.slug) {
      const category = data.filter(o => o.slug === slug)[0];
      if (category && category.value) {
        categoryId = category.value;
      }
    }
    if (params.slug) {
      const category = data.filter(o => o.slug === params.slug)[0];
      if (category && category.value) {
        categoryId = category.value;
      }
    }
    console.log(" cat id 206", categoryId);
  }
  return categoryId;
};

const getCategoryDataFromPath = (data, pathname) => {
  let slug = "graphic-design";
  let categoryId = null;
  let categoryName = null;

  const pathArray = pathname.split("/");
  const categorySlug = pathArray[2];

  if (!isEmpty(data)) {
    if (!categorySlug) {
      const category = data.filter(o => o.slug === slug)[0];
      if (category && category.value) {
        categoryId = category.value;
        categoryName = category.label;
      }
    }

    if (categorySlug) {
      const category = data.filter(o => o.slug === categorySlug)[0];
      if (category && category.value) {
        categoryId = category.value;
        categoryName = category.label;
      }
    }
  }
  return { categoryId, categoryName };
};

const getSubCategoryId = (data, params) => {
  let subCategoryId = null;
  if (!isEmpty(data)) {
    if (!isEmpty(params) && params.slug && params.subcategorySlug) {
      const category = data.filter(o => o.slug === params.slug)[0];
      if (category && category.sub_categories) {
        const subCategory = category.sub_categories.filter(
          o => o.slug === params.subcategorySlug
        )[0];
        if (subCategory) {
          subCategoryId = subCategory.id;
        }
      }
    }
  }
  return subCategoryId;
};

const getSearchPlaceholder = (data, pathname) => {
  return getSearchType(pathname) === "marketplace"
    ? `Search${
        !isNull(getCategoryDataFromPath(data, pathname).categoryName)
          ? ` in ${getCategoryDataFromPath(data, pathname).categoryName}..`
          : ".."
      }`
    : "Search..";
};

const getBreadCrumbsForService = data => {
  let links = [];
  if (!isEmpty(data)) {
    const category = {
      link: getCategoryLink(data),
      name: data.category.name
    };
    const subCategory = {
      link: getSubCategoryLink(data),
      name: data.sub_category.name
    };
    const product = {
      link: getServiceLink(data),
      name: data.title
    };

    links = [category, subCategory, product];
  }
  return links;
};

const getCategoryLink = item => {
  return `/marketplace/${item.category.slug}`;
};

const getSubCategoryLink = item => {
  return `/marketplace/${item.category.slug}/${item.sub_category.slug}`;
};

const getServiceLink = (item, id = null) => {
  return `/marketplace/${item.category.slug}/${item.sub_category.slug}/${
    !isNull(id) ? id : item.id
  }`;
};

const getServiceThumbnail = media => {
  let url = null;
  each(media, item => {
    if (item.metadata && item.metadata.isMain) {
      url = item.path;
      if (item.metadata.thumbnail_small) {
        url = item.metadata.thumbnail_small;
      }
      return false;
    }
  });
  return url;
};

const getServiceNormalImage = media => {
  let url = null;
  each(media, item => {
    if (item.metadata && item.metadata.isMain) {
      url = item.path;
      if (item.metadata.thumbnail_normal) {
        url = item.metadata.thumbnail_normal;
      }
      return false;
    }
  });
  return url;
};

const getServiceImage = media => {
  let url = null;
  each(media, item => {
    if (item.metadata && item.metadata.isMain) {
      url = item.path;
      return false;
    }
  });
  return url;
};

const getServiceImageThumbnail = item => {
  let url = item.path;
  if (!isEmpty(item.metadata)) {
    if (item.metadata.thumbnail_normal) {
      url = item.metadata.thumbnail_normal;
    }
    if (item.metadata.thumbnail_small) {
      url = item.metadata.thumbnail_small;
    }
  }
  return url;
};

const getCardDetails = data => {
  let number = null,
    brand = null,
    type = "Credit card / Debit Card";

  if (!isEmpty(data) && data.data && data.data.card_last_four) {
    number = `**** ${data.data.card_last_four}`;
    brand = data.data.card_brand;
    type = `${jsUcfirst(data.data.card_type)} Card`;
  }
  return { number, brand, type };
};

const getCardIcon = data => {
  let icon = "icon-pay-maestro-old";
  if (!isEmpty(data) && data.data && data.data.card_brand) {
    const card_brand = data.data.card_brand;
    switch (card_brand) {
      case "Visa":
      case "Visa (debit)":
        icon = "icon-pay-visa";
        break;
      case "Mastercard":
      case "Mastercard (2-series)":
      case "Mastercard (debit)":
      case "Mastercard (prepaid)":
        icon = "icon-pay-mastercard-old";
        break;
      case "American Express":
        icon = "icon-pay-amex";
        break;
      case "JCB":
        icon = "icon-pay-jcb";
        break;
      case "Discover":
        icon = "icon-pay-discover";
        break;
      default:
        icon = "icon-pay-maestro-old";
        break;
    }
  }
  return icon;
};

const isSuccess = resource => {
  return (
    isEmpty(resource.error) && !isEmpty(resource.data) && !resource.isRequesting
  );
};

const isError = resource => {
  return !isEmpty(resource.error) && !resource.isRequesting;
};

const formatExpiryDate = date => {
  const monthYear = date.split("/");
  const exp_month = monthYear[0];
  const exp_year = monthYear[1];
  return { exp_month, exp_year };
};

const getSortString = (sortType, type) => {
  return !isNull(type) ? (sortType === type ? `-${type}` : type) : sortType;
};

const getSelectedSortType = type => {
  const sortArray = type.split("-");
  return sortArray[1] ? sortArray[1] : sortArray[0];
};

const formatTableField = (item, field) => {
  const fieldArray = field.split("|");
  if (fieldArray[1]) {
    return item[fieldArray[0]][fieldArray[1]];
  }
  return item[field];
};

const getValueFromParams = (params, key) => {
  if (params && !isEmpty(params) && params[key]) {
    return params[key];
  }
  return null;
};

const formatPostMedia = media => {
  let images = [];
  let notImages = [];
  if (!isNull(media) && !isEmpty(media)) {
    each(media, item => {
      if (item && !isNull(item)) {
        if (item.file_type === "image") {
          images = [...images, item];
        } else {
          notImages = [...notImages, item];
        }
      } else {
        return false;
      }
    });
  }
  return { images, notImages };
};

const getSearchType = pathname => {
  if (pathname.indexOf("marketplace") !== -1) {
    return "marketplace";
  }
  return "user";
};

const getNotificationTitle = verb => {
  switch (verb) {
    case "like":
      return {
        title: "Liked your post",
        desc: "liked your"
      };
    case "comment":
      return {
        title: "Commented on your post",
        desc: "commented on your"
      };
    case "repost":
      return {
        title: "Shared your post",
        desc: "shared your"
      };
    default:
      return {
        title: "",
        desc: ""
      };
  }
};

const getOtherUser = (activitites, id, secondId = null) => {
  let user = null;
  each(activitites, item => {
    if (!isNull(secondId) && item.user.id !== id && item.user.id !== secondId) {
      user = item.user;
      return false;
    }
    if (isNull(secondId) && item.user.id !== id) {
      user = item.user;
      return false;
    }
  });
  return user;
};

const getPostalCode = address => {
  for (let p = address.length - 1; p >= 0; p--) {
    if (address[p].types.indexOf("postal_code") !== -1) {
      return address[p].long_name;
    }
  }
};

export {
  getPost,
  isError,
  isSuccess,
  checkAuth,
  bgRequired,
  checkError,
  getUserInfo,
  getUsername,
  getPathname,
  formatLinks,
  getCardIcon,
  getThumbnail,
  getOtherUser,
  getTrackName,
  enterPressed,
  includesPath,
  getSearchType,
  getPostalCode,
  getCategoryId,
  getCurrentTab,
  getSortString,
  getCardDetails,
  getServiceLink,
  getServiceImage,
  formatPostMedia,
  headerCondition,
  formatExpiryDate,
  getSubCategoryId,
  formatLinksState,
  // getRemainingRows,
  formatTableField,
  getImageThumbnail,
  formatLinksSelect,
  getRemainingArray,
  formatPhoneNumbers,
  getValueFromParams,
  getCurrentCategory,
  getServiceThumbnail,
  getSelectedSortType,
  getSearchPlaceholder,
  getNotificationTitle,
  getServiceNormalImage,
  getCategoryDataFromPath,
  getServiceImageThumbnail,
  getBreadCrumbsForService
};
