export default {
  // Genres
  genres: {
    error: {},
    data: [],
    isRequesting: false
  },

  // Signup state
  signup: {
    error: {},
    data: {},
    isRequesting: false
  },

  // Login state
  login: {
    error: {},
    data: {},
    isRequesting: false
  },

  // User state
  user: {
    error: {},
    data: {},
    token: null,
    expiresAt: null,
    isRequesting: false,
    get_stream_token: {}
  },

  suggestions: {
    error: {},
    data: [],
    paginationData: {
      page: 1,
      page_count: null
    },
    isRequesting: false
  },

  follow: {
    isFollowing: false,
    error: {}
  },

  fetchUser: {
    error: {},
    data: {},
    isRequesting: false
  },

  socialUserData: {
    data: {}
  },

  forgotPassword: {
    error: {},
    data: {},
    isRequesting: false
  },

  resetPassword: {
    error: {},
    data: {},
    isRequesting: false
  },

  changePassword: {
    error: {},
    data: {},
    isRequesting: false
  },

  postStatus: {
    error: {},
    data: {},
    isRequesting: false
  },

  userFeed: {
    error: {},
    data: [],
    paginationData: {
      page: 1,
      page_count: null
    },
    isRequesting: false
  },

  like: {
    error: {},
    data: {},
    isRequesting: false
  },

  postComment: {
    error: {},
    data: {},
    isRequesting: false
  },

  fetchComment: {
    postId: null,
    error: {},
    data: [],
    paginationData: {
      page: 1,
      page_count: null
    },
    isRequesting: false
  },

  deleteComment: {
    error: {},
    data: {},
    isRequesting: false
  },

  deletePost: {
    error: {},
    data: {},
    isRequesting: false
  },

  wow: {
    wow: null
  },

  tempFile: {
    file: null
  },

  myMusic: {
    error: {},
    data: [],
    paginationData: {
      page: 1,
      page_count: null
    },
    isRequesting: false
  },

  myImages: {
    error: {},
    data: [],
    paginationData: {
      page: 1,
      page_count: null
    },
    isRequesting: false
  },

  postDetails: {
    error: {},
    data: {},
    isRequesting: false
  },

  contactInfo: {
    isRequesting: false,
    data: {},
    error: {}
  },

  details: {
    isRequesting: false,
    data: {},
    error: {}
  },

  profilePic: {
    isRequesting: false,
    data: {},
    error: {}
  },

  feed: {
    error: {},
    data: [],
    paginationData: {
      page: 1,
      callApi: true
    },
    isRequesting: false,
    unReadFeedCount: 0
  },

  notifications: {
    error: {},
    data: [],
    paginationData: {
      page: 1,
      callApi: true
    },
    isRequesting: false
  },

  cartCount: {
    isRequesting: false,
    error: {},
    data: null
  },

  notificationCount: {
    isRequesting: false,
    error: {},
    data: null
  },

  notificationReset: {
    isRequesting: false,
    error: {},
    data: null
  },

  repost: {
    error: {},
    data: [],
    isRequesting: false
  },

  enrich: {
    error: {},
    data: [],
    isRequesting: false
  },

  dedicatedPost: {
    error: {},
    data: {},
    isRequesting: false
  },

  userProfile: {
    error: {},
    data: {},
    isRequesting: false
  },

  userProfileFeed: {
    error: {},
    data: [],
    paginationData: {
      page: 1,
      page_count: null
    },
    isRequesting: false
  },

  userMusic: {
    error: {},
    data: [],
    paginationData: {
      page: 1,
      page_count: null
    },
    isRequesting: false
  },

  userImages: {
    error: {},
    data: [],
    paginationData: {
      page: 1,
      page_count: null
    },
    isRequesting: false
  },

  logout: {
    isRequesting: false,
    data: {},
    error: {}
  },

  // marketplace starts here
  categories: {
    isRequesting: false,
    data: [],
    error: {}
  },

  headerCategories: {
    isRequesting: false,
    data: [],
    error: {}
  },

  publishService: {
    isRequesting: false,
    data: [],
    error: {}
  },

  offeredServices: {
    sortType: "created_at",
    isRequesting: false,
    paginationData: {
      page: 1,
      page_count: null
    },
    data: [],
    error: {}
  },

  purchasedServices: {
    sortType: "created_at",
    isRequesting: false,
    paginationData: {
      page: 1,
      page_count: null
    },
    data: [],
    error: {}
  },

  services: {
    isRequesting: false,
    paginationData: {
      page: 1,
      page_count: null
    },
    data: [],
    error: {}
  },

  service: {
    isRequesting: false,
    data: {},
    error: {}
  },

  featuredServices: {
    isRequesting: false,
    data: [],
    error: {}
  },

  reviews: {
    sortType: "created_at",
    isRequesting: false,
    paginationData: {
      page: 1,
      page_count: null
    },
    data: [],
    error: {}
  },

  cart: {
    vat: null,
    total: null,
    sub_total: null,
    isRequesting: false,
    paginationData: {
      page: 1,
      page_count: null
    },
    data: [],
    error: {}
  },

  addToCart: {
    isRequesting: false,
    data: {},
    error: {}
  },

  removeFromCart: {
    isRequesting: false,
    data: {},
    error: {}
  },

  paymentDetails: {
    isRequesting: false,
    data: {},
    error: {}
  },

  cardDetails: {
    isRequesting: false,
    data: {},
    error: {}
  },

  placeOrder: {
    isRequesting: false,
    data: {},
    error: {}
  },

  searchResults: {
    type: null,
    isRequesting: false,
    data: [],
    error: {}
  }
};
