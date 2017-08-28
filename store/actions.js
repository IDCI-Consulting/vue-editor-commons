var actions = {

  /**
   * Handle a get request : perform an http request and cache the json response body in the store
   *
   * @param url
   * @param $store
   * @param $http
   * @param callback : function with the json as parameter
   *
   * @returns Object : the json response
   */
  handleGetRequest: function (url, $store, $http, callback) {
    var cachedResource = $store.getters.getCachedResource(url);

    if (cachedResource) {
      return callback(cachedResource);
    }

    $http
      .get(url)
      .then(
        function (response) {
          return response.json();
        },
        function () {
          return null;
        }
      )
      .then(
        function (json) {
          $store.commit({
            type: 'cache',
            api_url: url,
            api_response: json
          });

          return callback(json);
        }, function () {
          return callback();
        }
      )
    ;
  }

};

export default actions;
