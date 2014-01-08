'use strict';

angular.module('insta5App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/access_token=:access_token', {
        templateUrl: 'views/main.html',
        controller: 'AccessCtrl'
      })
      .when('/signout', {
        templateUrl: 'views/signout.html',
        controller: 'SignoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .constant('CLIENT_ID', '5dbbf3b5d3614611a0a405289ab9ce42');
