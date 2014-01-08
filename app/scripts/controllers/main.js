'use strict';

angular.module('insta5App')
  .controller('MainCtrl', ['$scope', '$cookies', 'CLIENT_ID', function ($scope, $cookies, CLIENT_ID) {
    window.cookies = $cookies;

    var accessToken = $cookies.accessToken,
      redirectUri = encodeURI('http://127.0.0.1:9000');
    
    $scope.instagramAuthUrl = 'http://instagram.com/oauth/authorize/?client_id='+CLIENT_ID+'&redirect_uri='+redirectUri+'&response_type=token';

  }]);
