export default {

  cache: function (state, payload) {
    state.apiCache[payload.api_url] = payload.api_response;
  },

};
