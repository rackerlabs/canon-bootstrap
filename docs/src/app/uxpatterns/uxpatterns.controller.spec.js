'use strict';

describe('Controller: UxpatternsCtrl', function () {

  // load the controller's module
  beforeEach(module('docs'));

  var UxpatternsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UxpatternsCtrl = $controller('UxpatternsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
