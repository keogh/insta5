'use strict';

angular.module('insta5App')
  .service('Instagram', function Instagram() {
    var apiUrl = 'https://api.instagram.com/v1',
      accessToken = null,
      end_point = '/users/self/media/recent/?';

    this.setAccessToken = function (token) {
      accessToken = token;
    };
  });
