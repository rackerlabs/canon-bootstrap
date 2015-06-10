'use strict';

describe('Controller: GetstartedCtrl', function () {

  // load the controller's module
  beforeEach(module('docs'));

  var GetstartedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetstartedCtrl = $controller('GetstartedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
