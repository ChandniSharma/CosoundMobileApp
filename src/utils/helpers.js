import { isEmpty, isNull, find, each } from "lodash";
import moment from "moment";

export const extractValue = collection => {
  if (!isEmpty(collection)) {
    const values = collection.map(item => {
      return item.value;
    });
    const filteredValues = values.filter(o => {
      return o !== "";
    });
    return filteredValues;
  }
  return [];
};

export const extractIds = collection => {
  if (!isEmpty(collection)) {
    const values = collection.map(item => {
      return item.id;
    });
    const filteredValues = values.filter(o => {
      return o !== "";
    });
    return filteredValues;
  }
  return [];
};

export const arrayToObject = collection => {
  const obj = {};
  collection.forEach(item => {
    const itemArr = item.split("=");
    obj[itemArr[0]] = itemArr[1];
  });
  return obj;
};

export const readableCount = (n = 0, d = 2) => {
  if (isNull(n)) return "0";
  let x = ("" + n).length;
  const p = Math.pow;
  d = p(10, d);
  x -= x % 3;
  return Math.round((n * d) / p(10, x)) / d + " kMGTPE"[x / 3];
};

export const refactorCarbonDate = dateObject => {
  return moment.utc(dateObject.date).fromNow();
};

export const formatCarbonDate = dateObject => {
  return moment.utc(dateObject.date).format("MM-DD-YYYY");
};

export const getRefreshThreshold = expiresAt => {
  return expiresAt ? moment().diff(moment(expiresAt), "seconds") > 0 : false;
};

export const getDuration = metadata => {
  return !isNull(metadata) && metadata.duration
    ? moment(metadata.duration, ["HH:mm:ss.SSS"]).format("mm:ss")
    : "00:00";
};

export const fileReader = file => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = e => {
        const url = e.target.result;
        resolve(url);
      };
      reader.readAsDataURL(file);
    } catch (e) {
      reject(e);
    }
  });
};

export const getSubcategories = (categoryId, categories) => {
  let subCategories = {
    data: [],
    isRequesting: true,
    error: {}
  };
  if (!isNull(categoryId) && !isEmpty(categories)) {
    const category = find(categories, o => o.value === categoryId);
    if (category) {
      subCategories = Object.assign({}, subCategories, {
        data: category.sub_categories.map(item => {
          const newItem = Object.assign(
            {},
            {
              value: item.id,
              label: item.name
            }
          );
          return newItem;
        })
      });
    }
  }
  subCategories = Object.assign({}, subCategories, { isRequesting: false });
  return subCategories;
};

export const formatPublishServicedata = data => {
  const dataObject = Object.assign(
    {},
    {
      title: data.title,
      about: data.about,
      price: data.price,
      image: data.image,
      description: data.description,
      delivery_time: data.delivery_time,
      category_id: data.category_id,
      sub_category_id: data.sub_category_id,
      featured_images: [
        data.featuredImage_1,
        data.featuredImage_2,
        data.featuredImage_3,
        data.featuredImage_4
      ],
      delivery_time_unit: data.delivery_time_unit,
      key_points: JSON.stringify(extractValue(data.key_points))
    }
  );
  return Object.assign({}, dataObject, {
    featured_images: dataObject.featured_images.filter(o => !isNull(o))
  });
};

const getDeviceWidthHeight = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const width = iOS ? screen.width : window.innerWidth;
  const height = iOS ? screen.height : window.innerHeight;
  return { width, height };
};

export const isMobile = () => {
  const { width, height } = getDeviceWidthHeight();
  return width <= 414 && height <= 896;
};

export const isTab = () => {
  const { width, height } = getDeviceWidthHeight();
  return width > 414 && width <= 768 && (height > 896 && height <= 1024);
};

export const getYPosition = el => {
  return el.getBoundingClientRect().top + window.scrollY;
};

export const getMetadata = source => {
  let duration = "0:00";
  let albumart = null;
  let artistName = null;
  let album = null;
  let title = null;
  if (!isEmpty(source)) {
    const { metadata } = source;
    if (!isNull(metadata)) {
      duration = metadata.duration
        ? moment(metadata.duration, ["HH:mm:ss.SSS"]).format("mm:ss")
        : "00:00";
      albumart = metadata.albumart ? metadata.albumart : null;
      artistName = metadata.artist ? metadata.artist : "";
      album = metadata.album ? metadata.album : "";
      title = metadata.title ? metadata.title : "";
    }
  }
  return {
    duration,
    albumart,
    artistName,
    album,
    title
  };
};

export const formatCurrentTime = pos => {
  return (
    Math.floor((pos % 3600) / 60) +
    ":" +
    ("00" + Math.floor(pos % 60)).slice(-2)
  );
};

export const jsUcfirst = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getUniqueId = () => {
  return `${new Date().getTime()}${Math.random()}`;
};

export const resetNotification = (action, data, type) => {
  if (type === "seen") {
    let notifications = [];
    each(data, item => {
      if (!item.is_seen) {
        notifications = [...notifications, item.id];
      }
    });
    if (!isEmpty(notifications)) {
      const requestBody = Object.assign(
        {},
        {
          notifications
        }
      );
      return action.reset(requestBody, type);
    }
    return false;
  }
  if (type === "read") {
    const requestBody = Object.assign(
      {},
      {
        notifications: data
      }
    );
    return action.reset(requestBody, type);
  }
  return false;
};

export const rot13 = s => {
  return s
    .split("")
    .map(char => {
      if (!char.match(/[A-Za-z]/)) return char;
      const c = Math.floor(char.charCodeAt(0) / 97);
      const k = (char.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
      return String.fromCharCode(k + (c === 0 ? 64 : 96));
    })
    .join("");
};
