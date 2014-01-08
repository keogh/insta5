'use strict';

angular.module('insta5App')
  .controller('SignoutCtrl', ['$cookieStore', '$location', function ($cookieStore, $location) {
    $cookieStore.remove('accessToken');
    $location.path('/');
  }]);
