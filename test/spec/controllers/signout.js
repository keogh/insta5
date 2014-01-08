'use strict';

describe('Controller: SignoutctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('insta5App'));

  var SignoutctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignoutctrlCtrl = $controller('SignoutctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
