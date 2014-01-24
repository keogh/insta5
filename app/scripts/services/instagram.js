'use strict';

angular.module('insta5App')
  .service('Instagram', function Instagram($filter) {
    var apiUrl = 'https://api.instagram.com/v1',
      accessToken = null,
      mediaPoint = '/users/self/media/recent/?',
      items = [],
      callback;

    this.loading = false;

    this.setAccessToken = function (token) {
      accessToken = token;
      return this;
    };

    this.endPoint = function () {
      return apiUrl + mediaPoint + 'access_token=' + accessToken;
    };

    this.getTop5 = function (func) {
      if (!accessToken) { return; }
      var url = this.endPoint();
      callback = func;
      this.loading = true;
      pollingInstagram(url);
    };

    function sortItems(items) {
      var media = $filter('filter')(items, {type: 'image'});
      media = $filter('orderBy')(items, '-likes.count');
      return media.splice(0, 5);
    }

    function pollingInstagram(nextUrl, count) {
      count = count || 0;
      /* jshint ignore:start */
      $.ajax({
        method: 'GET',
        url: nextUrl,
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'jsonpcallback',
        success: function (resp) {
          items = items.concat(resp.data);
          if (resp.pagination.next_url && count <= 10) { // jshint ignore:line
            pollingInstagram(resp.pagination.next_url, ++count); // jshint ignore:line
          } else {
            var media = sortItems(items);
            if (callback) {
              callback(media);
            }
          }
        },
        error: function () {
          console.log('error');
        }
      });
      /* jshint ignore:end */
    }
  });
