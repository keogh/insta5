'use strict';

angular.module('insta5App')
  .controller('AccessCtrl', ['$scope', '$routeParams', '$cookies', '$location', function ($scope, $routeParams, $cookies, $location) {
    $cookies.accessToken = $routeParams.access_token; // jshint ignore:line
    $location.path('/');
  }]);