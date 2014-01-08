'use strict';

angular.module('insta5App')
  .controller('MainCtrl', ['$scope', '$cookies', '$cookieStore', 'CLIENT_ID', function ($scope, $cookies, $cookieStore, CLIENT_ID) {
    window.scope  = $scope;
    window.cookies = $cookies;
    window.cookieStore = $cookieStore;

    var accessToken = $cookies.accessToken,
      redirectUri = encodeURI('http://127.0.0.1:9000');
    
    $scope.accessToken = accessToken;
    $scope.instagramAuthUrl = 'http://instagram.com/oauth/authorize/?client_id='+CLIENT_ID+'&redirect_uri='+redirectUri+'&response_type=token';

  }]);
