export default {
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
  }
};
