'use strict';

angular.module('insta5App')
  .controller('AccessCtrl', ['$routeParams', '$cookies', '$location', function ($routeParams, $cookies, $location) {
    $cookies.accessToken = $routeParams.access_token; // jshint ignore:line
    $location.path('/');
  }]);