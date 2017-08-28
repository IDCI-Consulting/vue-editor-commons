export default {

  editorId: function (state) {
    return state.configuration.editorId;
  },

  getCachedResource: function (state) {
    return function (url) {
      return state.apiCache[url];
    };
  },

};
